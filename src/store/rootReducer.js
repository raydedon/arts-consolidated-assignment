import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import postReducer from '../redux/post/postReducer';
import userReducer from '../redux/user/userReducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    posts: postReducer,
    users: userReducer
});

export default rootReducer;
