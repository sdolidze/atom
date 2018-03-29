import { DECREMENT, INCREMENT } from '../actions';

interface State {
  value: number;
  step: number;
}

const initialState = { value: 7, step: 4 };

export function counterReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + state.step };
    case DECREMENT:
      return { ...state, value: state.value - state.step };
    default:
      return state;
  }
}
