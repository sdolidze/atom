import * as React from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { CounterFuncContainer } from './containers/CounterFuncContainer';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter step={1} initialValue={5} />
        <CounterFuncContainer step={2} initialValue={-5} />
      </div>
    );
  }
}

export default App;
