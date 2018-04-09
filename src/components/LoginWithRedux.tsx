import * as React from 'react';
import { authActions, AuthState } from '../redux/auth';
import Login from './Login';
import { WithStore } from './WithStore';

export function LoginWithRedux() {
  return (
    <WithStore selector={state => state.auth}>
      {(state: AuthState, dispatch) => (
        <Login
          username={state.username}
          onUsernameChange={e =>
            dispatch(authActions.update('username', e.target.value))
          }
          password={state.password}
          onPasswordChange={e =>
            dispatch(authActions.update('password', e.target.value))
          }
          onLogin={() =>
            dispatch(authActions.login(state.username, state.password))
          }
          error={state.error}
          loading={state.loading}
          isLoggedIn={state.isLoggedIn}
        />
      )}
    </WithStore>
  );
}
