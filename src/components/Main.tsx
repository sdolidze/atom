import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ComediansWithRedux } from './ComediansWithRedux';
import { CounterList } from './CounterList';
import { ExchangeRatesWithApollo } from './ExchangeRatesWithApollo';
import { Forms } from './Forms';
import Login from './Login';
import { Material } from './Material';
import { StarWarsWithState } from './StarWarsWithState';
import { SwimmingWithRedux } from './SwimmingWithRedux';
import { Welcome } from './Welcome';

export function Main() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Welcome} />
      <Route path="/counter" component={CounterList} />
      <Route path="/comedians" component={ComediansWithRedux} />
      <Route path="/swimming" component={SwimmingWithRedux} />
      <Route path="/exchange-rates" component={ExchangeRatesWithApollo} />
      <Route path="/star-wars" component={StarWarsWithState} />
      <Route path="/forms" component={Forms} />
      <Route path="/material" component={Material} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
