import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { isLoggedIn, setUser } from '../../Actions';
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


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

            email: '',
            password: ''
        }
    }

  hashCode = (password) => {
    return password.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
  }

    comparePassword = (savedPassword, password) => {
        
        return savedPassword === password // true or false
    }

    submit = (event) => {
        event.preventDefault()
        const { email, password } = this.state;
        const { isLoggedIn, setUser, user } = this.props
        if (!!user.email && user.email === email) {
            let hashPassword = this.hashCode(password)
            if (this.comparePassword(user.password, hashPassword)) {
                setUser({...this.state, password:hashPassword})
                isLoggedIn(true);
                alert("User has been loggedIn succesfully")
                window.location.replace('/list')
                return;
            } else {
                alert("Wrong password")
                return;
            }


        }

        alert("User does not exist")
        return;

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
                        Loggin
                    </Typography>
                    <MuiThemeProvider theme={ theme } >
                        <form className={classes.form} onSubmit={this.submit}>
                            <Grid container spacing={2}>
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
                                        InputLabelProps={{ style: { borderColor: 'red' } }}

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
                                style={{ backgroundColor: '#5a005a', color: 'white' }}
                                className={classes.submit}
                            >
                                Loggin
                        </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/signup"  style={{ color: '#5a005a' }}>
                                        Don't have an account yet? ? Create account
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));