import { BrowserRouter as Router } from 'react-router-dom';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client/lib/main';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import introspectionQueryResultData from './fragmentTypes.json';
import { defaults, resolvers } from './resolvers';

const { API_URL, AUTH_TOKEN } = require('./constants');

const uploadLink = createUploadLink({ uri: `${API_URL}/graphql` });
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
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

const cache = new InMemoryCache({ fragmentMatcher });

// Config Apollo Link State
const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, stateLink]).concat(uploadLink),
  cache,
});

const AppWithProvider = () => (
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
registerServiceWorker();
