import * as React from 'react';
import './App.css';
import { ComicList } from './components/ComicList';
import { CounterWithApollo } from './components/CounterWithApollo';
import { CounterWithRedux } from './components/CounterWithRedux';
import { CounterWithState } from './components/CounterWithState';
import { ExchangeRates } from './components/ExchangeRates';
import { Swimming } from './components/Swimming';

const logo = require('./logo.svg');

const styles: { [key: string]: React.CSSProperties } = {
  div: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={styles.div}>{children}</div>
);

class App extends React.Component {
  render() {
    return (
      <Container>
        <header className="App-header" style={{ width: '100%' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sandro's React Playground</h1>
        </header>

        <main style={styles.main}>
          <div>
            <CounterWithState step={1} initialValue={5} />
            <CounterWithRedux step={2} initialValue={-5} />
            <CounterWithApollo />
          </div>

          <div>
            <ComicList />
            <Swimming />
          </div>

          <div>
            <ExchangeRates />
          </div>
        </main>
      </Container>
    );
  }
}

export default App;
