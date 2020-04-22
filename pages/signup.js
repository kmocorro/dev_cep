import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Fab4 META
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const signup_name = useForm('');
  const signup_organization = useForm('');
  const signup_username = useForm('');
  const signup_username_maxChar = 15;
  const signup_password = useForm('');
  const signup_password_maxChar = 8;
  
  const [ responseMessage, setResponseMessage ] = useState('');
  const [ signUpButton, setSignUpButton ] = useState(false);

  console.log(responseMessage);

  function useForm(init){
    const [ value, setValue ] = useState(init);
    const [ charCountValue, setCharCountValue ] = useState(0);

    function handleOnChange(e){
      let input = e.target.value;

      setValue(input);
      setCharCountValue(input.length)
    }
    
    return {
      value,
      onChange: handleOnChange,
      count: charCountValue
    }
  }


  async function handleOnSubmit(e){
    e.preventDefault();
    setSignUpButton(true);

    let route = 'http://dev-metaspf401.sunpowercorp.com:4848/register'

    try {
        const response = await fetch(route, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: signup_name.value,
              organization: signup_organization.value,
              username: signup_username.value,
              password: signup_password.value,
            })
        });

        if (response.status === 200) {
          
          setResponseMessage(await response.json());
          setSignUpButton(false);
            
        }
    } catch (error) {
        console.error(' You have an error in your code or there are network issues. ', error)

        const { response } = error
        setResponseError(response ? response.statusText : responseError)
        setSignInButton(false);
    }

  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Cashier Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={signup_name.onChange}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="organization"
                label="Organization"
                name="Organization"
                autoComplete="organization"
                onChange={signup_organization.onChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                onChange={signup_username.onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={signup_password.onChange}
                helperText={
                  signup_password.count >= signup_password_maxChar ?
                  ''
                  :
                  `${signup_password.count} / ${signup_password_maxChar}`
                }
              />
            </Grid>
          </Grid>
          {
            signUpButton ?
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled
              >
                Sign Up
              </Button>
            :
            responseMessage.status !== 'success' ? 
              signup_password.count >= signup_password_maxChar ?
              
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleOnSubmit}>
                Sign Up
              </Button>
              :
              <></>
            :
            responseMessage.status == 'success' ?
            <Typography variant="h6" align="center" gutterBottom>
              Registration successful
            </Typography>
            :
            <></>

          }
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}