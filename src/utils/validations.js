// import axios from 'axios';
// import { baseUrl } from '../constants/url-releted';

// const validateLogin = values => {
//   let errors = {};

//   if (values.email.length < 1) {
//     errors.message = 'Email required!';
//   } else if (values.password.length < 1) {
//     errors.message = 'Password required!';
//   }

//   return errors;
// };

// const authenticateUser = async (values, errors) => {
//   const { email, password } = values;
//   let isLogged = false;

//   try {
//     const {
//       data: {
//         data: {
//           signIn: { token },
//         },
//       },
//     } = await axios.post(baseUrl, {
//       query: `mutation { signIn(email: "${email}" password: "${password}") {token} }`,
//     });

//     if (token.length > 0) {
//       window.localStorage.setItem('token', token);
//       isLogged = true;
//       return isLogged;
//     }
//     return (isLogged = false);
//   } catch (error) {
//     window.localStorage.setItem('token', '');
//     return { isLogged: false, errors: { messasge: error.message } };
//   }
// };

// export { validateLogin, authenticateUser };
