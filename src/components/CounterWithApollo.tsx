import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Counter } from './Counter';

const GET_EXHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const CounterWithApollo = () => (
  <Query query={GET_EXHANGE_RATES}>
    {({ loading, error, data }) => {
      return (
        <Counter
          label="Apollo"
          color="purple"
          value={0}
          onIncrement={() => {
            console.log('inc');
          }}
          onDecrement={() => {
            console.log('dec');
          }}
        />
      );
    }}
  </Query>
);
