import * as React from 'react';
import { Box, Props as BoxProps } from './Box';

export interface Props {
  color: BoxProps['color'];
  title: string;
  items: any[];
  keySelector: (item: any) => string;
  valueSelector: (item: any) => string;
}

const styles = {
  span: {
    margin: '3px 0',
  },
};

// TODO: add loading and error handling as well
// add ability to insert custom header
export function List({
  title,
  items,
  color,
  keySelector,
  valueSelector,
}: Props) {
  return (
    <Box color={color} title={title}>
      {items.map(item => (
        <span style={styles.span} key={keySelector(item)}>
          {valueSelector(item)}
        </span>
      ))}
    </Box>
  );
}
