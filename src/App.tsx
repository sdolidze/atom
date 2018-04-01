import * as React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

const styles: { [key: string]: React.CSSProperties } = {
  div: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

class App extends React.Component {
  render() {
    return (
      <div style={styles.div}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
