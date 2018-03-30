import {
  GET_SWIMMING_STYLES_PENDING,
  GET_SWIMMING_STYLES_FULFILLED,
  GET_SWIMMING_STYLES_REJECTED,
} from '../actions';

interface State {
  error: any;
  loading: boolean;
  styles: string[];
}

const initialState: State = {
  error: null,
  loading: false,
  styles: [],
};

export function swimmingReducer(
  state: State = initialState,
  action: any,
): State {
  switch (action.type) {
    case GET_SWIMMING_STYLES_PENDING:
      return { ...state, loading: true };
    case GET_SWIMMING_STYLES_FULFILLED:
      return { ...state, styles: action.payload, loading: false };
    case GET_SWIMMING_STYLES_REJECTED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
