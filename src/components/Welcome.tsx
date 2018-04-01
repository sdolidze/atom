import * as React from 'react';
import { ComediansWithRedux } from './ComediansWithRedux';
import { CounterWithApollo } from './CounterWithApollo';
import { CounterWithRedux } from './CounterWithRedux';
import { CounterWithState } from './CounterWithState';
import { ExchangeRatesWithApollo } from './ExchangeRatesWithApollo';
import { StarWarsWithState } from './StarWarsWithState';
import { SwimmingWithRedux } from './SwimmingWithRedux';

const styles: { [key: string]: React.CSSProperties } = {
  div: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export function Welcome() {
  return (
    <main style={styles.main}>
      <div>
        <CounterWithState step={1} initialValue={5} />
        <CounterWithRedux />
        <CounterWithApollo />
      </div>

      <div>
        <ComediansWithRedux />
        <SwimmingWithRedux />
      </div>

      <div>
        <ExchangeRatesWithApollo />
        <StarWarsWithState />
      </div>
    </main>
  );
}
