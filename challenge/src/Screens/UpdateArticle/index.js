import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { TextField, Grid, Typography, Button, Paper } from '@material-ui/core';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux'
import { UpdateArticle } from '../../Actions';
import { purple } from '@material-ui/core/colors';
import { ArrowBack } from '@material-ui/icons';



const styles = theme => ({
    root: {

        maxWidth: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        color: 'red'
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: '#5a005a',
        color: "white",
        width: '100%'
    },
    Header: {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '20px'
    },
    // margin: {
    //     margin: 0,
    //     width: '80%'
    // },



});
const theme = createMuiTheme({

    palette: {
        primary: purple
    },
    typography: { useNextVariants: true },
});

class updateArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {

            content: '',
            title: '',
            date: '',
            image: ''


        }
    }

    getBase64 = (file, cb) => {

        if (!!file.size && file.size <= 4000000) { //max size 4mb which is 4000000 bytes
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                cb(reader.result)
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        } else {
            alert("image size is too large, its more than 4 MBs")

            return;
        }
    }

    uploadPhoto = (event) => {
        let file = event.target.files[0]
        this.getBase64(file, (image) => {
            this.setState({ image })
        })



    }

    Update = () => {
        let { title, content, date, image } = this.state;

        if (!!title || !!content || !!date || !!image) {
            this.props.UpdateArticle({ ...this.state, id: this.props.match.params.id });
            alert("Article has been updated successfully")
            this.setState({ title: '', content: '', date: '', image: '' })
            window.location.replace("/list")

        } else {
            alert("You should choose atleast one input")
        }
    }



    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container justify='center' alignContent='center' alignItems='center'>
                    <img src={require('../../assets/logo.png')} alt='' style={{ width: 300, height: 150, }} />
                </Grid>
                <br />  <br />  <br />

                <Paper className={classes.root}>
                    <Grid container direction="column" alignContent='center' justify='center' alignItems='center'>
                        <Grid item>
                            <Typography variant='h2' className={classes.Header}>Update Article</Typography>
                        </Grid>
                        <Grid item> <br /></Grid>
                        <MuiThemeProvider theme={theme} >
                            <Grid item >

                                <TextField
                                    label="Title"
                                    className={classes.textField}
                                    InputLabelProps={{ style: { color: 'black' } }}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(title) => this.setState({ title: title.target.value })}
                                    name="Title"
                                    value={this.state.title}
                                />

                            </Grid>
                            <Grid item >
                                <form className={classes.container} noValidate autoComplete="on">
                                    <TextField
                                        onChange={(date) => this.setState({ date: date.target.value })}
                                        type='date'
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.date}
                                    />
                                </form>
                            </Grid>
                            <Grid item>
                                <br />
                            </Grid>
                            <Grid item >
                                <TextField

                                    className={classes.textField}
                                    inputProps={{ style: { fontSize: 15 } }}
                                    variant="outlined"
                                    type="file"
                                    name="photo"
                                    onChange={(event) => this.uploadPhoto(event)}
                                />
                            </Grid>
                            <Grid item>
                                <br /> <br />
                            </Grid>
                            <Grid item >
                                <ReactQuill
                                    flexWrap
                                    value={this.state.content}
                                    onChange={(content) => this.setState({ content: content })}
                                    placeholder='Type content' />
                            </Grid>
                            <Grid item>
                                <br />
                            </Grid>
                            <Grid item >
                                <Button variant="contained" onClick={this.Update} className={classes.button}>
                                    Update
                            </Button>
                            </Grid>
                            <Grid item>

                                <Button size="large" color="primary" href='/list'>
                                    <ArrowBack />  Go back</Button>

                            </Grid>
                        </MuiThemeProvider>
                    </Grid>

                </Paper>
            </div>
        );
    }
}
updateArticle.propTypes = {
    classes: PropTypes.object.isRequired,
};



const mapDispatchToProps = {
    UpdateArticle
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(updateArticle));