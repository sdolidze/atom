import * as React from 'react';

const style: React.CSSProperties = {
  color: '#FFF',
  padding: '10px',
  margin: '10px',
  width: '200px',
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

export interface Props {
  title: string;
  children: React.ReactNode;
  color: keyof typeof colors;
}

export function Box({ title, children, color }: Props) {
  return (
    <div style={{ ...style, backgroundColor: colors[color] }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
