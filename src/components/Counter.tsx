import * as React from 'react';
import { Box, Props as BoxProps } from './Box';

interface Props {
  title: string;
  color: BoxProps['color'];
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const styles = {
  div: {
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
  title,
  color,
}: Props) {
  return (
    <Box color={color} title={title}>
      <div>
        <span style={styles.span}>Value: {value}</span>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </Box>
  );
}
