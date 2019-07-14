import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, Button, CardMedia, CardActionArea, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import { ArticleDetails, DeleteArticle } from '../../Actions'

import { connect } from 'react-redux'


const styles = theme => ({
    root: {
        maxWidth: 345


    },


});

class ListArticels extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
                <br />  <br />  <br />
                <Grid container justify="center" alignItems='center' spacing={8} >

                    {ARTICLE.length  ? ARTICLE.map((elem, i) => {
                        return <Grid item key={i}>
                            <Card className={classes.root}>
                                <Link to='/article/detail' onClick={() => ArticleDetails(elem)} style={{ textDecoration: 'none' }}>
                                    <Grid container justify='center' alignItems='center'>
                                        <Grid item>
                                            <CardHeader title={elem.title} />

                                        </Grid>
                                    </Grid>
                                    <CardMedia
                                        style={{
                                            maxWidth: 345,
                                            minWidth: 345,
                                            maxHeigth: 300,
                                            minHeight: 300,
                                        }}
                                        component="img"
                                        image={elem.image
                                        }
                                    />
                                </Link>

                                <Grid container justify='space-around'>
                                    <Grid item>
                                        <Button size="small" color='primary'>
                                            Edit
        </Button>
                                    </Grid>

                                    <Grid item>
                                        <Button size="small" color='secondary' onClick={() => this.delete(elem.id)}>
                                            Delete
        </Button>
                                    </Grid>
                                </Grid>



                            </Card>

                        </Grid>
                    }) : <h1>No article added yet, If you want to add article click here </h1>
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
    DeleteArticle
}

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(styles)(ListArticels)))