import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import AddArticles from './Screens/AddArticle';
import ListArticles from './Screens/ArticleList';
import ArticleDetail from './Screens/ArticleDetails';
import UpdateArticle from './Screens/UpdateArticle'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/update/article/:id" render={(props) => {
            return isLoggedIn ? <UpdateArticle  {...props} /> : <Login  {...props} />



          }}
          />
          <Route path="/article/detail" render={(props) => {
            return isLoggedIn ? <ArticleDetail  {...props} /> : <Login  {...props} />

          }}
          />


          <Route path="/list" render={(props) => {
            return isLoggedIn ? <ListArticles  {...props} /> : <Login  {...props} />
          }}
          />
          <Route path="/addarticle" render={(props) => {
            return isLoggedIn ? <AddArticles  {...props} /> : <Login  {...props} />
          }}
          />
          <Route path="/signup" render={(props) => {
            return <div>
              <SignUp  {...props} />
            </div>
          }}
          />
            <Route path="/login" render={(props) => {
            return <div>
              <Login  {...props} />
            </div>
          }}
          />
            <Route path="/" render={(props) => {
            return <div>
              <Login  {...props} />
            </div>
          }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = ({ loggedIn }) => {
  const { isLoggedIn } = loggedIn
  return { isLoggedIn }
}




export default connect(mapStateToProps)(App);
