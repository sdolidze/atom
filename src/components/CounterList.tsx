import * as React from 'react';
import { CounterWithApollo } from './CounterWithApollo';
import { CounterWithRedux } from './CounterWithRedux';
import { CounterWithState } from './CounterWithState';

export function CounterList() {
  return (
    <div style={{ display: 'flex' }}>
      <CounterWithState step={1} initialValue={5} />
      <CounterWithRedux />
      <CounterWithApollo />
    </div>
  );
}
