import { mock } from "sinon";
import { expect } from "chai";

import { server } from "../../app";
import { PokeTeam } from "./model";

const getTeamsQuery = `
query{
  getTeams{
    name
    slot1
  }
} 
`;

const getTeamQuery = `
query{
  getTeam(id: 2){
    name
    id
  }
}
`;
const createTeamMutation = `
mutation{
  createTeam(pokeTeamInput:{name: "team1", slot1: 1,slot2: 2,slot3: 3,slot4: 4,slot5: 5,slot6: 6 }){
    name
    id
  }
}
`;

const deleteTeamMutation = `
mutation{
  deleteTeam(id: 1)
}
`;

describe("PokeTeam integration tests", async () => {
  const pokeTeamMock = mock(PokeTeam);

  it("Should list the pokeTeams", async () => {
    pokeTeamMock.expects("findAll").resolves([
      {
        id: 1,
        name: "team1",
        slot1: 1,
        slot2: 1,
        slot3: 1,
        slot4: 1,
        slot5: 1,
        slot6: 1,
      },
    ]);

    const { body }: any = await server.executeOperation({
      query: getTeamsQuery,
    });

    expect(body.singleResult?.data)
      .to.have.property("getTeams")
      .that.deep.equals([
        {
          name: "team1",
          slot1: 1,
        },
      ]);
  });

  it("Should get a poketeam by id", async () => {
    pokeTeamMock.expects("findByPk").resolves({
      name: "name1",
      id: 1,
      destroy: () => true,
    });

    const { body }: any = await server.executeOperation({
      query: getTeamQuery,
    });
    expect(body.singleResult?.data)
      .to.have.property("getTeam")
      .that.deep.equals({
        name: "name1",
        id: "1",
      });
  });

  it("should return null if cannot find an id", async () => {
    pokeTeamMock.expects("findByPk").resolves(null);

    const { body }: any = await server.executeOperation({
      query: getTeamQuery,
    });
    expect(body.singleResult?.data)
      .to.have.property("getTeam")
      .that.deep.equals(null);
  });

  it("should create an pokeTeam", async () => {
    pokeTeamMock.expects("create").resolves({ name: "team11", id: 1 });

    const { body }: any = await server.executeOperation({
      query: createTeamMutation,
    });

    expect(body.singleResult?.data)
      .to.have.property("createTeam")
      .that.deep.equals({
        name: "team11",
        id: "1",
      });
  });

  it("should delete an pokeTeam", async () => {
    pokeTeamMock.expects("findByPk").resolves({
      name: "name1",
      id: 1,
      destroy: () => true,
    });

    const { body }: any = await server.executeOperation({
      query: deleteTeamMutation,
    });

    expect(body.singleResult?.data)
      .to.have.property("deleteTeam")
      .that.deep.equals(true);
  });

  it("should do nothing deleted and return false id doesn't exists", async () => {
    pokeTeamMock.expects("findByPk").resolves(null);

    const { body }: any = await server.executeOperation({
      query: deleteTeamMutation,
    });

    expect(body.singleResult?.data)
      .to.have.property("deleteTeam")
      .that.deep.equals(false);
  });
});
