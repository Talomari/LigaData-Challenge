import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, Button, CardMedia, CardActionArea, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import { ArticleDetails, DeleteArticle,isLoggedIn } from '../../Actions'

import { connect } from 'react-redux'


const styles = theme => ({
    root: {
        maxWidth: 300,
        maxHeight: 450,
        minWidth: 300,
        minHeight: 450
    },
    media: {
        maxWidth: 300,
        maxHeight: 450,
        minWidth: 300,
        minHeight: 450

    }


});

class ListArticels extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    logout = () => {
        this.props.isLoggedIn(false);
        window.location.replace('/')

    }



    delete = (id) => {
        this.props.DeleteArticle(id)

    }
    render() {
        const { classes, ARTICLE, ArticleDetails } = this.props;
        console.log('ARTICLe', ARTICLE);

        return (
            <div>
                <Grid container justify='center' alignContent='center' alignItems='center'>
                    <img src={require('../../assets/logo.png')} alt='' style={{ width: 300, height: 150, }} />
                </Grid>
                <Grid item style={{ width: '100%', marginTop: 20}}>
                    <Grid container direction="row" justify="flex-end" style={{paddingRight:100}} spacing={5}>
                        <Grid item>
                            <a href='/addarticle' style={{ textDecoration: 'none', color: "#FF8C00" }}>
                                <Button variant="contained" style={{ border: 0, backgroundColor: '#5a005a', color: 'white' }} >
                                    Add Article
                                       </Button>
                            </a>
                        </Grid>
                        <Grid item>

                            <Button variant="contained" style={{ border: 0, backgroundColor: '#5a005a', color: 'white' }} onClick={this.logout} >
                                Logout
                                       </Button>

                        </Grid>
                    </Grid>
                </Grid>
                <br />  <br />  <br />
                <Grid container justify="center" alignItems='center' spacing={8} >

                    {ARTICLE.length ? ARTICLE.map((elem, i) => {
                        return <Grid item key={i}>
                            <Card className={classes.root}>
                                <Link to='/article/detail' onClick={() => ArticleDetails(elem)} style={{ textDecoration: 'none' }}>
                                    <Grid container justify='center' alignItems='center'>
                                        <Grid item>
                                            <CardHeader title={elem.title} style={{ color: '#5a005a' }} />

                                        </Grid>
                                    </Grid>
                                    <CardMedia
                                        className={classes.media}
                                        component="img"
                                        image={elem.image
                                        }
                                    />
                                </Link>
                            </Card>
                            <Card style={{ maxWidth: 300 }}>
                                <Grid container direction='row' justify='space-around'>

                                    <Grid item>
                                        <Link to={`/update/article/${elem.id}`} style={{ textDecoration: 'none' }}>
                                            <Button size="small" style={{ color: '#5a005a' }} >


                                                Edit
                                    </Button>
                                        </Link>
                                    </Grid>

                                    <Grid item>
                                        <Button size="small" color='secondary' onClick={() => this.delete(elem.id)}>
                                            Delete
                                     </Button>
                                    </Grid>

                                </Grid>
                            </Card>


                        </Grid>
                    }) : <h1>No article added yet </h1>
                    }

                </Grid>





            </div >
        );
    }
}
ListArticels.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ Article }) => {
    const { ARTICLE } = Article
    return { ARTICLE }
}

const mapDispatchToProps = {
    ArticleDetails,
    DeleteArticle,
    isLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(styles)(ListArticels)))