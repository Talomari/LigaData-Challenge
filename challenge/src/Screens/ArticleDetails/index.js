import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, CardMedia, CardContent, CardHeader, Typography, CardActions, Button, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { connect } from 'react-redux'
import { ArrowBack } from '@material-ui/icons';

const styles = theme => ({
    root: {
  


    },


});

class articleDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        const { classes, articleDetail } = this.props;
        console.log("check detail ", articleDetail)
        return (
            <div>
                <Grid container justify='center' alignContent='center' alignItems='center'>
                    <img src={require('../../assets/logo.png')} alt='' style={{ width: 300, height: 150, }} />
                </Grid>
                <br />  <br />  <br />
                <Grid container justify="center" alignItems='center' spacing={8} >


                    <Grid item>
                        <Card className={classes.root}>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item>
                                    <CardHeader title={articleDetail.title}  />

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
                                image={articleDetail.image
                                }
                            />
                            <CardContent>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    {articleDetail.date}
                                </Typography>
                                <Typography style={{flexWrap:'wrap'}}>  {renderHTML(`${articleDetail.content}`)} </Typography>
                              
                            </CardContent>
                            <CardActions>
                                <Grid container justify='center' alignItems='center'>

                                    <Grid item>

                                        <Button size="large" color="primary" href='/list'>
                                            <ArrowBack />  Go back</Button>

                                    </Grid>

                                </Grid>

                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>





            </div >
        );
    }
}
articleDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ ArticleDetail }) => {
    const { articleDetail } = ArticleDetail
    return { articleDetail }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(styles)(articleDetails)))