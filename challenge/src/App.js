import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import AddArticles from './Screens/AddArticle';
import ListArticles from './Screens/ArticleList';
// import UpdatePassword from './Screens/UpdatePassword';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
     
   <Route path="/login" render={(props) => {
            return <div>
              <Login  {...props} />
            </div>
          }}
          />
             
   <Route path="/listarticles" render={(props) => {
            return <div>
              <ListArticles  {...props} />
            </div>
          }}
          />
            <Route path="/addarticle" render={(props) => {
            return <div>
              <AddArticles  {...props} />
            </div>
          }}
          />
               <Route path="/" render={(props) => {
            return <div>
              <SignUp  {...props} />
            </div>
          }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
