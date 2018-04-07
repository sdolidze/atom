import { RootAction } from '../root-action';
import {
  GET_SWIMMING_STYLES_PENDING,
  GET_SWIMMING_STYLES_FULFILLED,
  GET_SWIMMING_STYLES_REJECTED,
} from './actions';

export interface SwimmingState {
  error: any;
  loading: boolean;
  items: string[];
}

const initialState: SwimmingState = {
  error: null,
  loading: false,
  items: [],
};

export function swimmingReducer(
  state: SwimmingState = initialState,
  action: RootAction,
): SwimmingState {
  switch (action.type) {
    case GET_SWIMMING_STYLES_PENDING:
      return { ...state, items: [], loading: true };
    case GET_SWIMMING_STYLES_FULFILLED:
      return { ...state, items: action.payload, loading: false };
    case GET_SWIMMING_STYLES_REJECTED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
