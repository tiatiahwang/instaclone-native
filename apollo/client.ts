import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';

const client = new ApolloClient({
  uri: 'http://localhost:4050/graphql',
  cache: new InMemoryCache(),
});

export default client;
