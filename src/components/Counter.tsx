import * as React from 'react';
import { Box, Props as BoxProps } from './Box';

interface Props {
  label: string;
  color: BoxProps['color'];
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const styles = {
  div: {
    backgroundColor: '#3F51B5',
    color: '#FFF',
    padding: '10px',
    margin: '10px',
    width: '200px',
    borderRadius: '5px',
  },
  span: {
    marginRight: '10px',
  },
};

export function Counter({
  value,
  onIncrement,
  onDecrement,
  label,
  color,
}: Props) {
  return (
    <Box color={color}>
      <h3>{label}</h3>
      <div>
        <span style={styles.span}>Value: {value}</span>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </Box>
  );
}
