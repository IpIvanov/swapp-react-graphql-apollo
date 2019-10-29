import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const AUTH_QUERY = gql`
  query AuthQuery {
    authenticated @client
  }
`;

export const useIsAuthorized = () => {
  const { data } = useQuery(AUTH_QUERY);

  return data ? data.authenticated : false;
};
