import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Counter } from './Counter';

const GET_COUNTER_VALUE = gql`
  query ReadValue {
    counterValue
  }
`;

export const CounterWithApollo = () => (
  <Query query={GET_COUNTER_VALUE}>
    {({ data, client }) => {
      return (
        <Counter
          label="Apollo"
          color="purple"
          value={data.counterValue}
          onIncrement={() => {
            client.writeData({ data: { counterValue: data.counterValue + 1 } });
          }}
          onDecrement={() => {
            client.writeData({ data: { counterValue: data.counterValue - 1 } });
          }}
        />
      );
    }}
  </Query>
);
