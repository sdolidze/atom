import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Box } from './Box';

const GET_EXHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const ExchangeRates = () => (
  <Query query={GET_EXHANGE_RATES}>
    {({ loading, error, data }) => {
      return (
        <Box color="brown">
          {(() => {
            if (loading) {
              return <p>Loading...</p>;
            }

            if (error) {
              return <p>Error :(</p>;
            }

            return data.rates.slice(0, 10).map(({ currency, rate }: any) => (
              <div key={currency}>
                <span>{`${currency}: ${rate}`}</span>
              </div>
            ));
          })()}
        </Box>
      );
    }}
  </Query>
);
