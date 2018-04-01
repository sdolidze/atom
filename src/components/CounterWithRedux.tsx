import * as React from 'react';
import { decrement, increment } from './../actions';
import { Counter } from './../components/Counter';
import { WithStore } from './WithStore';

export const CounterWithRedux = () => (
  <WithStore>
    {(state: any, dispatch: any) => (
      <Counter
        title="Redux"
        color="blue"
        value={state.counter.value}
        onIncrement={() => dispatch(increment())}
        onDecrement={() => dispatch(decrement())}
      />
    )}
  </WithStore>
);
