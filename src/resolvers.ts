//import resolvers or each model inside source

import { ResolverInterface } from "./types/resolver.interface";
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
