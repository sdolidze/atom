import * as React from 'react';
import { CounterFunc } from './CounterFunc';

interface Props {
  step: number;
  initialValue: number;
}

interface State {
  value: number;
}

export class CounterFuncContainer extends React.Component<Props, State> {
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
      <CounterFunc
        value={this.state.value}
        onIncrement={() => this.onIncrement()}
        onDecrement={() => this.onDecrement()}
      />
    );
  }
}
