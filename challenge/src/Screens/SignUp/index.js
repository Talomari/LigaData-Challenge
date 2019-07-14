import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles,MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { isLoggedIn, setUser } from '../../Actions'
import { purple } from '@material-ui/core/colors'




const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
});
const theme = createMuiTheme({

  palette: {
      primary: purple
  },
  typography: { useNextVariants: true },
});

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  submit = (event) => {
    event.preventDefault()
    const { email } = this.state;
    const { isLoggedIn, setUser, user } = this.props
    if (!!user.email && user.email === email) {
      alert("User is already exist")
      return;
    }
    setUser(this.state)
    isLoggedIn(true);
    alert("User has been succesfully added");
    window.location.replace('/login')
    return


  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        
        <img src={require('../../assets/logo.png')} alt='' style={{ width: 300, height: 150 }} />
                    <br />  <br />  <br />
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <MuiThemeProvider theme={ theme } >
          <form className={classes.form} onSubmit={this.submit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(firstName) => this.setState({ firstName: firstName.target.value })}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(lastName) => this.setState({ lastName: lastName.target.value })}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(email) => this.setState({ email: email.target.value })}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(password) => this.setState({ password: password.target.value })}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ backgroundColor: '#5a005a', color: 'white' }}
              
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2"  style={{ color: '#5a005a' }}>
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
          </MuiThemeProvider>
        </div>

      </Container>
    );
  }
}


const mapStateToProps = ({ userReducer }) => {
  const { user } = userReducer;
  return { user }
}


const mapDispatchToProps = {
  isLoggedIn,
  setUser
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUp));