import gql from "graphql-tag";
import { getCurrentUser as GET_CURRENT_USER_QUERY } from "../graphql/queries.gql";
export default apolloClient =>
  apolloClient
    .query({ query: GET_CURRENT_USER_QUERY })
    .then(({ data }) => {
      return { currentUser: data.currentUser };
    })
    .catch(err => {
      console.log(err);
      // Fail gracefully
      return { currentUser: {} };
    });
