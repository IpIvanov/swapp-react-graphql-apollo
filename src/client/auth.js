import { setContext } from 'apollo-link-context';

const authLink = setContext((req, { headers, ...context }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
    ...context,
  };
});

export default authLink;
