import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  TextField, Button, Container, FormGroup,
  Box, Grid, Typography, Paper, CircularProgress,
} from '@material-ui/core';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const history = useHistory();
  const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState(null);

  const [login, { loading }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: { token } }) => {
      localStorage.setItem('token', token);
      client.writeData({ data: { authenticated: true } });
      history.push('/episodes');
    },
    onError: () => {
      setErrorMessage('Invalid credentials!');
    },
  });


  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { value } = evt.target;
    setValues({
      ...values,
      [evt.target.name]: value,
    });
  };

  const userLogin = () => {
    login({ variables: { email: values.email, password: values.password } });
  };

  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  if (loading) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Container fluid="true" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Typography variant="h1" component="h1" style={{ fontFamily: 'SfDistantGalaxyOutline', color: '#FFE300', fontSize: 150 }}>
        SWAPP
      </Typography>
      <Container maxWidth="md">
        <Paper>
          <Box p={10}>
            <Grid container spacing={5} display="flex" direction="column">
              {errorMessage && (
                <Grid item xs>
                  <Typography component="h5" variant="h5" style={{ color: 'red' }} align="left">
                    {errorMessage}
                  </Typography>
                </Grid>
              )}
              <Grid item xs>
                <FormGroup>
                  <TextField
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    variant="filled"
                    margin="dense"
                  />
                  <TextField
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    variant="filled"
                    margin="dense"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    color="primary"
                    variant="outlined"
                    size="large"
                    style={{
                      textTransform: 'none',
                      background: '#000',
                      color: '#FFE300',
                      fontSize: 36,
                      fontWeight: 900,
                    }}
                    onClick={userLogin}
                  >
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Container>
  );
};

export default Login;
