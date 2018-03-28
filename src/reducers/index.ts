import { combineReducers } from 'redux';
import { DECREMENT, INCREMENT } from './../actions';

let initialState = { value: 7, step: 4 };

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + state.step };
    case DECREMENT:
      return { ...state, value: state.value - state.step };
    default:
      return state;
  }
};

const helloReducer = combineReducers({
  counter: counterReducer,
});

export default helloReducer;
