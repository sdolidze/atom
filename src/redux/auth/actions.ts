import { api } from '../../api';

export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export const LOGOUT = 'LOGOUT';

export const UPDATE = 'UPDATE';

export function login(username: string, password: string) {
  return {
    type: LOGIN,
    payload: api.login(username, password),
  };
}

export function update(field: string, value: string) {
  return { type: UPDATE, payload: { field, value } };
}

export function logout() {
  return { type: LOGOUT };
}
