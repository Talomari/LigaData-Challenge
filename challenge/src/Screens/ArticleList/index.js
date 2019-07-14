import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, Grid, Button, CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const styles = theme => ({
    root: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 30,
        overflowX: 'auto',

    },
    table: {
        minWidth: 500,

    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'transparent',

        },
    },

});

class ListArticels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Articles: []
        }
    }


    render() {
        const { classes } = this.props;
        const { Articles } = this.state
        return (
            <div>
                <Grid container justify='center' alignContent='center' alignItems='center'>
                    <img src={require('../../assets/logo.png')} alt='' style={{ width: 300, height: 150, }} />
                </Grid>
                <br />  <br />  <br />
                <Card className={classes.root}>
                <CardMedia></CardMedia>
                    
                </Card>

            </div >
        );
    }
}
ListArticels.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default (withStyles(styles)(ListArticels))