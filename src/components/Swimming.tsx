import * as React from 'react';
import { Box } from './Box';

interface Props {
  onDownload: () => void;
  items: string[];
  error: any;
  loading: boolean;
}

const styles = {
  button: {
    margin: '10px 0',
  },
  error: {
    color: 'red',
  },
};

export function Swimming({ onDownload, items, error, loading }: Props) {
  return (
    <Box color="blue" title={'Swimming' + (loading ? ' (loading)' : '')}>
      <button style={styles.button} onClick={() => onDownload()}>
        Download Swimming Styles
      </button>
      <div>{items.map((style, i) => <div key={i}>{style}</div>)}</div>
      {error && <div style={styles.error}> Error: {error.toString()}</div>}
    </Box>
  );
}
