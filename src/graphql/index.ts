import { InMemoryCache } from 'apollo-boost';

// don't use gql tag here, it creates a tree and clientState is expecting a string
export const typeDefs = `
  type Query {
    counterValue: Int
    version: String
  }

  type Mutation {
    saveCounterValue(value: Int): Int
  }
`;

export const resolvers = {
  Query: {
    version: () => '2.1.0',
  },
  Mutation: {
    saveCounterValue: function(
      _: any,
      { value }: { value: number },
      { cache }: { cache: InMemoryCache },
    ) {
      cache.writeData({ data: { counterValue: value - 1 } });
      return value;
    },
  },
};

export const defaults = {
  counterValue: 15,
};
