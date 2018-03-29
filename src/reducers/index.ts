import { combineReducers } from 'redux';
import { comicReducer } from './comic';
import { counterReducer } from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
  comic: comicReducer,
});

export default rootReducer;
