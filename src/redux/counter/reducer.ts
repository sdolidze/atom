import { RootAction } from '..';
import { DECREMENT, INCREMENT } from './actions';

export interface CounterState {
  value: number;
  step: number;
}

const initialState: CounterState = { value: 7, step: 4 };

export function counterReducer(
  state: CounterState = initialState,
  action: RootAction,
) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + state.step };
    case DECREMENT:
      return { ...state, value: state.value - state.step };
    default:
      return state;
  }
}
