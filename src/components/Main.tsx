import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ComicWithRedux } from './ComicWithRedux';
import { CounterList } from './CounterList';
import { ExchangeRatesWithApollo } from './ExchangeRatesWithApollo';
import { Forms } from './Forms';
import { LoginWithRedux } from './LoginWithRedux';
import { Material } from './Material';
import { privateRoute } from './privateRoute';
import { StarWarsWithState } from './StarWarsWithState';
import { SwimmingWithRedux } from './SwimmingWithRedux';
import { Welcome } from './Welcome';

export interface MainProps {
  isLoggedIn: boolean;
}

export function Main({ isLoggedIn }: MainProps) {
  const PrivateRoute = privateRoute(isLoggedIn);
  return (
    <Switch>
      <PrivateRoute exact={true} path="/" component={Welcome} />
      <PrivateRoute path="/counter" component={CounterList} />
      <PrivateRoute path="/comics" component={ComicWithRedux} />
      <PrivateRoute path="/swimming" component={SwimmingWithRedux} />
      <PrivateRoute
        path="/exchange-rates"
        component={ExchangeRatesWithApollo}
      />
      <PrivateRoute path="/star-wars" component={StarWarsWithState} />
      <PrivateRoute path="/forms" component={Forms} />
      <PrivateRoute path="/material" component={Material} />
      <Route path="/login" component={LoginWithRedux} />
    </Switch>
  );
}
