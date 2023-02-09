import { Model } from "sequelize";

import { PokeTeam } from "./model";

const createPokeTeamResolver = async (
  _: any,
  args: any,
  __: any,
  ___: any
): Promise<Model> => {
  const { pokeTeamInput } = args;
  const pokeTeamInstance = await PokeTeam.create(pokeTeamInput);
  return pokeTeamInstance;
};

const getPokeTeamsResolver = async (
  _: any,
  __: any,
  ___: any,
  ____: any
): Promise<Model[]> => {
  const pokeTeams = await PokeTeam.findAll();
  return pokeTeams;
};

const getPokeTeamResolver = async (
  _: any,
  args: any,
  ___: any,
  ____: any
): Promise<Model | null> => {
  const { id } = args;
  const pokeTeam = await PokeTeam.findByPk(id);
  return pokeTeam;
};

const deletePokeTeamResolver = async (
  _: any,
  args: any,
  ___: any,
  ____: any
): Promise<Boolean> => {
  const { id } = args;
  const pokeTeam = await PokeTeam.findByPk(id);
  if (pokeTeam) {
    await pokeTeam.destroy();
    return true;
  }
  return false;
};

const pokeTeamResolvers = {
  Query: {
    getTeams: getPokeTeamsResolver,
    getTeam: getPokeTeamResolver,
  },
  Mutation: {
    createTeam: createPokeTeamResolver,
    deleteTeam: deletePokeTeamResolver,
  },
};

export { pokeTeamResolvers };
