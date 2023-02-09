// see index/typedefs
const pokeTeamDefinitions = {
  types: `
    type PokeTeam{
      id: ID!
      name: String!
      slot1: Int!
      slot2: Int!
      slot3: Int!
      slot4: Int!
      slot5: Int!
      slot6: Int!
      createdAt: String!
      updateAt: String!
    }

    input PokeTeamInput{
      name: String!
      slot1: Int!
      slot2: Int!
      slot3: Int!
      slot4: Int!
      slot5: Int!
      slot6: Int!
    }
  `,
  queries: `
    getTeams: [PokeTeam]
    getTeam(id: ID!): PokeTeam
  `,
  mutations: `
    createTeam(pokeTeamInput: PokeTeamInput): PokeTeam
    deleteTeam(id: ID!): Boolean
  `,
};

export { pokeTeamDefinitions };
