import { ApolloClient, createHttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { tokenVar } from './vars';

const httpLink = createHttpLink({
  uri: 'http://localhost:4050/graphql',
});

const authLink = setContext((_, { headers }) => {
  return { headers: { ...headers, token: tokenVar() } };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          seeFeed: offsetLimitPagination(),
          // {
          //   keyArgs: false,
          //   merge: (existing = [], incoming = []) => [...existing, ...incoming],
          // },
        },
      },
    },
  }),
});

export default client;
