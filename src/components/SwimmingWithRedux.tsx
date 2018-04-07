import * as React from 'react';
import { swimmingActions, SwimmingState } from '../redux/swimming';
import { Swimming } from './Swimming';
import { WithStore } from './WithStore';

export const SwimmingWithRedux = () => (
  <WithStore selector={state => state.swimming}>
    {(state: SwimmingState, dispatch) => (
      <Swimming
        {...state}
        onDownload={() => dispatch(swimmingActions.getSwimmingStyles())}
      />
    )}
  </WithStore>
);
