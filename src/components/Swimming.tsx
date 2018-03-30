import * as React from 'react';
import { connect } from 'react-redux';
import { getSwimmingStyles } from '../actions';
import { Box } from './Box';

interface Props {
  onDownload: () => void;
  styles: string[];
  error: any;
  loading: boolean;
}

function mapStateToProps(state: any) {
  return {
    styles: state.swimming.styles,
    error: state.swimming.error,
    loading: state.swimming.loading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onDownload: () => dispatch(getSwimmingStyles()),
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Swimming);
