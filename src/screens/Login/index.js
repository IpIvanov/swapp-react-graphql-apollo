import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  TextField, Button, Container, FormGroup,
  Box, Grid, Typography, Paper, CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import ThemeContext from '../../contexts/ThemeContext';
import { SIGN_IN } from '../../client/queries';
import styles from './styles';

const Login = () => {
  const classes = makeStyles(styles)();
  const history = useHistory();
  const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    setTheme,
  } = useContext(ThemeContext);

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
    <Container fluid="true">
      <Typography
        variant="h1"
        component="h1"
        className={classes.mainTitle}
        onClick={() => {
          const themeStorage = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
          setTheme(themeStorage);
          localStorage.setItem('theme', themeStorage);
        }}
      >
        SWAPP
      </Typography>
      <Container maxWidth="md">
        <Paper>
          <Box p={10}>
            <Grid container spacing={5} display="flex" direction="column">
              {errorMessage && (
                <Grid item xs>
                  <Typography component="h5" variant="h5" className={classes.error} align="left">
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
                    className={classes.loginButton}
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
