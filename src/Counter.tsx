import * as React from 'react';

interface Props {
  step: number;
  initialValue: number;
}

interface State {
  value: number;
}

const styles = {
  div: {
    backgroundColor: '#673AB7',
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

export class Counter extends React.Component<Props, State> {
  state = { value: this.props.initialValue };

  onIncrement() {
    this.setState({
      value: this.state.value + this.props.step,
    });
  }

  onDecrement() {
    this.setState({
      value: this.state.value - this.props.step,
    });
  }

  render() {
    return (
      <div style={styles.div}>
        <span style={styles.span}>Value: {this.state.value}</span>
        <button onClick={() => this.onIncrement()}>+</button>
        <button onClick={() => this.onDecrement()}>-</button>
      </div>
    );
  }
}
