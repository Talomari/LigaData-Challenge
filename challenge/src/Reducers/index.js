import { combineReducers } from 'redux';
import loggedIn from './isLoggedIn';
import Article from './Article';
import userReducer from './setUser'
import ArticleDetail from './ArticleDetails'
export const rootReducer = combineReducers({
    userReducer,
    loggedIn,
    Article,
    ArticleDetail
});