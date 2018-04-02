import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { comicReducer } from './comic';
import { counterReducer } from './counter';
import { swimmingReducer } from './swimming';

const rootReducer = combineReducers({
  counter: counterReducer,
  comic: comicReducer,
  swimming: swimmingReducer,
  form: formReducer,
});

export default rootReducer;
