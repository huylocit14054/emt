import { getCurrentUser as GET_CURRENT_USER_QUERY } from '../graphql/queries.gql';

export default apolloClient =>
  apolloClient
    .query({ query: GET_CURRENT_USER_QUERY })
    .then(({ data }) => ({ currentUser: data.currentUser }))
    .catch(error => {
      return { currentUser: {} };
    });
