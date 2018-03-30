import { combineReducers } from 'redux';
import { comicReducer } from './comic';
import { counterReducer } from './counter';
import { swimmingReducer } from './swimming';

const rootReducer = combineReducers({
  counter: counterReducer,
  comic: comicReducer,
  swimming: swimmingReducer,
});

export default rootReducer;
