import { combineReducers } from 'redux';
import { FormState, reducer as formReducer } from 'redux-form';
import { comicReducer, ComicState } from './comic';
import { counterReducer, CounterState } from './counter';
import { swimmingReducer, SwimmingState } from './swimming';

export interface RootState {
  counter: CounterState;
  comic: ComicState;
  swimming: SwimmingState;
  form: FormState;
}

export const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  comic: comicReducer,
  swimming: swimmingReducer,
  form: formReducer,
});
