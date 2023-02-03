// import typedefs like defined in pizza.typedefs

import { pizzaDefinitions } from "./pizza/pizza.typedefs";
const typeDefs = `
  type Query{
    ${pizzaDefinitions.queries}
  }
  type Mutation{
    ${pizzaDefinitions.mutations}
  }
  
  ${pizzaDefinitions.types}
`;

export { typeDefs };