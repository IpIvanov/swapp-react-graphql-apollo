import React, { useState } from 'react';
import {
  TextField, Button, Container, FormGroup,
  Box, Grid, Typography, Paper,
} from '@material-ui/core';


const Login = () => {
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
    console.log('user login');
  };

  return (
    <Container fluid="true" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Typography variant="h1" component="h1" style={{ fontFamily: 'SfDistantGalaxyOutline', color: '#FFE300', fontSize: 150 }}>
        SWAPP
      </Typography>
      <Container maxWidth="md">
        <Paper>
          <Box p={10}>
            <Grid container spacing={5} display="flex" direction="column">
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
