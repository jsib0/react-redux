import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //l.132
import PostsReducer from './reducer-posts';

const rootReducer = combineReducers({
 
  posts: PostsReducer,
  form: formReducer

});

export default rootReducer;
