import { RootAction } from '../root-action';
import {
  UPDATE,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
} from './actions';

export interface AuthState {
  username: string;
  password: string;
  isLoggedIn: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: AuthState = {
  username: '',
  password: '',
  isLoggedIn: false,
  loading: false,
  error: false,
};

export function authReducer(
  state: AuthState = initialState,
  action: RootAction,
): AuthState {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, error: false, loading: true };
    case LOGIN_FULFILLED:
      return { ...state, isLoggedIn: true, loading: false };
    case LOGIN_REJECTED:
      return { ...state, error: true, loading: false };
    case UPDATE:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
}
