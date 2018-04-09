import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function privateRoute(
  isLoggedIn: boolean,
  redirectTo: string = '/login',
) {
  return ({ component, ...rest }: any) => {
    const Component = component;
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
        }
      />
    );
  };
}
