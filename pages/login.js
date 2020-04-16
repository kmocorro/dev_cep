import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { login } from '../utils/auth';



const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        fontFamily: 'Roboto Condensed'
    },
    rightSide: {
        backgroundColor: '#fff',
    },
    image: { //  
        backgroundImage: `url()`,
        backgroundColor: '#fff',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const TextFieldDarkMode = withStyles({
    root: {
        '& input': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'gray',
            },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
        },
    },
})(TextField);

const TextFieldLoginMode = withStyles({
    root: {
      '& input': {
          color: 'black',
          fontSize: 18,
          fontWeight: 'normal'
      },
      '& label': {
          color: 'gray',
      },
      '& label.Mui-focused': {
          color: 'gray',
      },
      '& .MuiOutlinedInput-multiline': {
          fontWeight: 'bold'
      },
      '& .MuiSelect-outlined.MuiSelect-outlined': {
          fontWeight: 'bold'
      },
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'gray',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
      },
      '& .MuiInput-underline::before': {
          borderBottom: '2px solid #fff'
      },
      '& .MuiInput-underline::after': {
          borderBottom: '2px solid #030303'
      },
      '& .MuiInputBase-root': {
          color: 'black',
      },
      '& .MuiFormHelperText-root' : {
          color: 'gray'
      },
      '& .MuiTypography-root' : {
          color: 'gray'
      }
    }
  })(TextField);

export default function SignInSide() {
    const classes = useStyles();
    const username = useForm('');
    const password = useForm('');
    const [ responseError, setResponseError ] = useState('');
    const [ signInButton, setSignInButton ] = useState(false);

    function useForm(init){
        const [ value, setValue ] = useState(init);

        function handleOnChange(e){
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleOnChange
        }
    }

    async function handleOnSubmit(e){
        e.preventDefault();
        setResponseError('');
        setSignInButton(true);

        let route = 'http://dev-metaspf401.sunpowercorp.com:4848/login'

        try {
            const response = await fetch(route, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username: username.value, 
                    password: password.value 
                })
            });

            if (response.status == 200) {
              const { token } = await response.json();
              
              if( typeof token === 'undefined'){

                setResponseError(err ? err : responseError)
                setSignInButton(false);
              } else {
                console.log({ token })
                await login({ token });
              }
                
            } 
        } catch (error) {
            console.error(' You have an error in your code or there are network issues. ', error)

            const { response } = error
            setResponseError(response ? response.statusText : responseError)
            setSignInButton(false);
        }

    }

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.rightSide}>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon color="secondary" />
            </Avatar>
            <Typography component="" variant="body" gutterBottom color="secondary">
                META - CEP
            </Typography>
            <Typography variant="h2" component="h1" color="secondary" style={{fontFamily: 'Iceland'}}>
                Load-your-account
            </Typography>
            <form className={classes.form} >
                <TextFieldLoginMode
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username.value}
                onChange={username.onChange}
                />
                <TextFieldLoginMode
                    className={classes.textField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password.value}
                    onChange={password.onChange}
                />
                {
                    signInButton ?
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        disabled
                    >
                        Sign in
                    </Button>
                    
                    :
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={handleOnSubmit}
                    >
                        Sign in
                    </Button>
                }
                <Grid container>
                <Grid item xs>
                    <Typography variant="body2" color="error">
                        {responseError}
                    </Typography>
                </Grid>
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                    <Typography color="primary" variant="caption">
                        By signing in, you agree that you will enter your outlook credentials to META. We, the "META" developers, Kevin Mocorro, Kristiana Mikaela Ayeng & Elmer Malazarte will never ask, save or track your password. If you have questions, please send an email to <Link href="mailto:kmocorro@sunpowercorp.com?subject=META%20Sign-in%20The%20Bright" color="primary" style={{textDecoration: 'underline', color: 'black'}}>kdm</Link>.
                    </Typography>
                </Grid>
            </form>
            </div>
        </Grid>
        </Grid>
    );
}