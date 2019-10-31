import { useQuery } from '@apollo/react-hooks';
import { AUTH_QUERY } from '../client/queries';

export const useIsAuthorized = () => {
  const { data } = useQuery(AUTH_QUERY);

  return data ? data.authenticated : false;
};
