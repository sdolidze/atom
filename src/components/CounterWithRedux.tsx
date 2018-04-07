import * as React from 'react';
import { Dispatch } from 'redux';
import { RootState } from '../redux';
import { counterActions } from '../redux/counter';
import { Counter } from './../components/Counter';
import { WithStore } from './WithStore';

export const CounterWithRedux = () => (
  <WithStore>
    {(state: RootState, dispatch: Dispatch<any>) => (
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
