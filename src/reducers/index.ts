import { combineReducers } from 'redux';
import { FormState, reducer as formReducer } from 'redux-form';
import { comicReducer, ComicState } from './comicReducer';
import { counterReducer, CounterState } from './counterReducer';
import { swimmingReducer, SwimmingState } from './swimmingReducer';

export interface RootState {
  counter: CounterState;
  comic: ComicState;
  swimming: SwimmingState;
  form: FormState;
}

const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  comic: comicReducer,
  swimming: swimmingReducer,
  form: formReducer,
});

export default rootReducer;
