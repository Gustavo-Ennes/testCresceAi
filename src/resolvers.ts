//import resolvers or each model inside source

import { pizzaResolvers } from "./pizza/pizza.resolver";

const { Query: pizzaQueries, Mutation: pizzaMutations } = pizzaResolvers;

const resolvers = {
  Query: {
    ...pizzaQueries,
  },
  Mutation: {
    ...pizzaMutations
  }
};

export { resolvers };
