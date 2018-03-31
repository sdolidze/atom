import * as React from 'react';
import { Counter } from './Counter';

interface Props {
  step: number;
  initialValue: number;
}

interface State {
  value: number;
}

export class CounterWithState extends React.Component<Props, State> {
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
      <Counter
        label="State"
        color="brown"
        value={this.state.value}
        onIncrement={() => this.onIncrement()}
        onDecrement={() => this.onDecrement()}
      />
    );
  }
}
