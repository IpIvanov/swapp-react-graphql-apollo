import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers, ...context }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}` || undefined,
    },
    ...context,
  };
});

export default authLink;
