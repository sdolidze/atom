import * as React from 'react';
import { counterActions, CounterState } from '../redux/counter';
import { Counter } from './../components/Counter';
import { WithStore } from './WithStore';

export const CounterWithRedux = () => (
  <WithStore selector={state => state.counter}>
    {(state: CounterState, dispatch) => (
      <Counter
        title="Redux"
        color="blue"
        value={state.value}
        onIncrement={() => dispatch(counterActions.increment())}
        onDecrement={() => dispatch(counterActions.decrement())}
      />
    )}
  </WithStore>
);
