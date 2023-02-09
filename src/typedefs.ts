// import typedefs like defined in pizza.typedefs

import { pokeTeamDefinitions } from "./poketeam/typedefs";
const typeDefs = `
  type Query{
    ${pokeTeamDefinitions.queries}
  }
  type Mutation{
    ${pokeTeamDefinitions.mutations}
  }
  
  ${pokeTeamDefinitions.types}
`;

export { typeDefs };
