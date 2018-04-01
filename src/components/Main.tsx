import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ComediansWithRedux } from './ComediansWithRedux';
import { CounterWithApollo } from './CounterWithApollo';
import { CounterWithRedux } from './CounterWithRedux';
import { CounterWithState } from './CounterWithState';
import { ExchangeRatesWithApollo } from './ExchangeRatesWithApollo';
import { StarWarsWithState } from './StarWarsWithState';
import { SwimmingWithRedux } from './SwimmingWithRedux';
import { Welcome } from './Welcome';

export function Main() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Welcome} />
      <Route path="/counter/state" component={CounterWithState} />
      <Route path="/counter/redux" component={CounterWithRedux} />
      <Route path="/counter/apollo" component={CounterWithApollo} />
      <Route path="/comedians" component={ComediansWithRedux} />
      <Route path="/swimming" component={SwimmingWithRedux} />
      <Route path="/exchange-rates" component={ExchangeRatesWithApollo} />
      <Route path="/star-wars" component={StarWarsWithState} />
    </Switch>
  );
}
