import { connect } from 'react-redux';
import { decrement, increment } from './../actions';
import { CounterFunc } from './../components/CounterFunc';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    value: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  };
};

const CounterReduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  CounterFunc,
);

export default CounterReduxContainer;
