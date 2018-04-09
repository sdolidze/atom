import * as React from 'react';
import { AuthState, login, update } from '../redux/auth';
import Login from './Login';
import { WithStore } from './WithStore';

export function LoginWithRedux() {
  return (
    <WithStore selector={state => state.auth}>
      {(state: AuthState, dispatch) => (
        <Login
          username={state.username}
          onUsernameChange={e => dispatch(update('username', e.target.value))}
          password={state.password}
          onPasswordChange={e => dispatch(update('password', e.target.value))}
          onLogin={() => dispatch(login(state.username, state.password))}
          error={state.error}
          loading={state.loading}
          isLoggedIn={state.user != null}
        />
      )}
    </WithStore>
  );
}
