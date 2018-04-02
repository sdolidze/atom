import * as React from 'react';

const baseStyle: React.CSSProperties = {
  color: '#FFF',
  padding: '10px',
  margin: '10px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
};

const colors = {
  red: '#F44336',
  blue: '#4B92F3',
  green: '#58B24D',
  purple: '#692EB8',
  brown: '#795548',
};

const sizes = {
  small: '200px',
  medium: '400px',
  large: '800px',
};

export interface Props {
  title: string;
  children: React.ReactNode;
  color: keyof typeof colors;
  size?: keyof typeof sizes;
}

export function Box({ title, children, color, size = 'small' }: Props) {
  const style = {
    ...baseStyle,
    backgroundColor: colors[color],
    width: sizes[size],
  };
  return (
    <div style={style}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
