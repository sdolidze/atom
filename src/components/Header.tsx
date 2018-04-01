import * as React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../logo.svg');

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  element: {
    margin: '0 10px',
    color: '#FFF',
    textDecoration: 'none',
  },
};

export function Header() {
  return (
    <header className="App-header" style={{ width: '100%' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Sandro's React Playground</h1>

      <div style={styles.container}>
        <Link to="/" style={styles.element}>
          Home
        </Link>
        <Link to="/counter/state" style={styles.element}>
          Counter (State)
        </Link>
        <Link to="/counter/redux" style={styles.element}>
          Counter (Redux)
        </Link>
        <Link to="/counter/apollo" style={styles.element}>
          Counter (Apollo)
        </Link>
        <Link to="/comedians" style={styles.element}>
          Comedians
        </Link>
        <Link to="/swimming" style={styles.element}>
          Swimmming
        </Link>
        <Link to="/exchange-rates" style={styles.element}>
          Exchange Rates
        </Link>
        <Link to="/star-wars" style={styles.element}>
          Star Wars
        </Link>
      </div>
    </header>
  );
}
