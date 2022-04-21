import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;
