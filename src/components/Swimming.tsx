import * as React from 'react';
import { connect } from 'react-redux';
import { getSwimmingStyles } from '../actions';
import { Box } from './Box';

interface Props {
  onDownload: () => void;
}

export const Swimming = connect(
  (state: any) => {
    return {};
  },
  (dispatch: any) => {
    return {
      onDownload: () => dispatch(getSwimmingStyles()),
    };
  },
)(({ onDownload }: Props) => {
  return (
    <Box color="blue">
      Swimming
      <button
        style={{
          marginTop: '10px',
        }}
        onClick={() => onDownload()}
      >
        Download Swimming Styles
      </button>
    </Box>
  );
});
