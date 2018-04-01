import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Counter } from './Counter';

const GET_COUNTER_VALUE = gql`
  query ReadValue {
    counterValue @client
    version @client
  }
`;

const DECREMENT = gql`
  mutation Decrement($value: Int) {
    saveCounterValue(value: $value) @client
  }
`;

export const CounterWithApollo = () => (
  <Query query={GET_COUNTER_VALUE}>
    {({ data, client }) => {
      return (
        <Counter
          title={'Apollo ' + data.version}
          color="purple"
          value={data.counterValue}
          onIncrement={() => {
            client.writeData({ data: { counterValue: data.counterValue + 1 } });
          }}
          onDecrement={async () => {
            await client.mutate({
              mutation: DECREMENT,
              variables: { value: data.counterValue },
            });
          }}
        />
      );
    }}
  </Query>
);
