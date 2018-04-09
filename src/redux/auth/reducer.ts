import { RootAction } from '../root-action';
import {
  UPDATE,
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT,
} from './actions';

export interface AuthState {
  username: string;
  password: string;
  loading: boolean;
  error: boolean;
  user: User | null;
}

export interface User {
  username: string;
  firstName: string;
  lastName: string;
}

const initialState: AuthState = {
  username: '',
  password: '',
  user: null,
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
      const user: User = {
        username: 'sdolidze',
        firstName: 'Sandro',
        lastName: 'Dolidze',
      };
      return { ...state, user, loading: false };
    case LOGIN_REJECTED:
      return { ...state, error: true, loading: false };
    case UPDATE:
      return { ...state, [action.payload.field]: action.payload.value };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
