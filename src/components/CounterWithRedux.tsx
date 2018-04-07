import * as React from 'react';
import { counterActions } from '../redux/counter';
import { Counter } from './../components/Counter';
import { WithStore } from './WithStore';

export const CounterWithRedux = () => (
  <WithStore>
    {(state: any, dispatch: any) => (
      <Counter
        title="Redux"
        color="blue"
        value={state.counter.value}
        onIncrement={() => dispatch(counterActions.increment())}
        onDecrement={() => dispatch(counterActions.decrement())}
      />
    )}
  </WithStore>
);
