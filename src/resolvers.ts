//import resolvers or each model inside source

import { pokeTeamResolvers } from "./poketeam/resolvers";

const { Query: pokeTeamQueries, Mutation: pokeTeamMutations } = pokeTeamResolvers;

const resolvers = {
  Query: {
    ...pokeTeamQueries,
  },
  Mutation: {
    ...pokeTeamMutations
  }
};

export { resolvers };
