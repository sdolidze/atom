import * as React from 'react';

interface Props {
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

export function CounterFunc({ value, onIncrement, onDecrement }: Props) {
  return (
    <div style={styles.div}>
      <span style={styles.span}>Value: {value}</span>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
