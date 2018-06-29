import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'isomorphic-unfetch';
import { API_URL } from '../constants';
import introspectionQueryResultData from '../fragmentTypes.json';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, { getToken }) {
  const uploadLink = createUploadLink({ uri: `${API_URL}/graphql` });
  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
  });

  const cache = new InMemoryCache({ fragmentMatcher }).restore(initialState || {});

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(uploadLink),
    cache,
  });
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
