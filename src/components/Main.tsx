import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ComicWithRedux } from './ComicWithRedux';
import { CounterList } from './CounterList';
import { ExchangeRatesWithApollo } from './ExchangeRatesWithApollo';
import { Forms } from './Forms';
import LoginWithRedux from './LoginWithRedux';
import { Material } from './Material';
import { StarWarsWithState } from './StarWarsWithState';
import { SwimmingWithRedux } from './SwimmingWithRedux';
import { Welcome } from './Welcome';

export function Main() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Welcome} />
      <Route path="/counter" component={CounterList} />
      <Route path="/comics" component={ComicWithRedux} />
      <Route path="/swimming" component={SwimmingWithRedux} />
      <Route path="/exchange-rates" component={ExchangeRatesWithApollo} />
      <Route path="/star-wars" component={StarWarsWithState} />
      <Route path="/forms" component={Forms} />
      <Route path="/material" component={Material} />
      <Route path="/login" component={LoginWithRedux} />
    </Switch>
  );
}
