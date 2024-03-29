import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import authLink from './auth';
import { typeDefs } from './local';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_URI,
});

const cache = new InMemoryCache({ addTypename: false });
const linkError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);

  cache.writeData({
    data: {
      authenticated: false,
    },
  });
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, linkError, httpLink]),
  typeDefs,
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});

export default client;
