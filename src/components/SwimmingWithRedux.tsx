import * as React from 'react';
import { getSwimmingStyles } from '../actions';
import { Box } from './Box';
import { WithStore } from './WithStore';

interface Props {
  onDownload: () => void;
  styles: string[];
  error: any;
  loading: boolean;
}

function Swimming({ onDownload, styles, error, loading }: Props) {
  return (
    <Box color="blue">
      Swimming (loading: {loading.toString()})
      <button
        style={{
          marginTop: '10px',
        }}
        onClick={() => onDownload()}
      >
        Download Swimming Styles
      </button>
      <div>{styles.map((style, i) => <div key={i}>{style}</div>)}</div>
      {error ? (
        <div style={{ color: 'red' }}> Error: {error.toString()}</div>
      ) : null}
    </Box>
  );
}

export const SwimmingWithRedux = () => (
  <WithStore>
    {(state: any, dispatch: any) => (
      <Swimming
        styles={state.swimming.styles}
        error={state.swimming.error}
        loading={state.swimming.loading}
        onDownload={() => dispatch(getSwimmingStyles())}
      />
    )}
  </WithStore>
);
