import { connect } from 'react-redux';
import { decrement, increment } from './../actions';
import { Counter } from './../components/Counter';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    label: 'Redux',
    color: 'blue' as 'blue',
    value: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  };
};

export const CounterWithRedux = connect(mapStateToProps, mapDispatchToProps)(
  Counter,
);
