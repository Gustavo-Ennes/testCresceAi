import { expect } from "chai";
import { sequelize } from "./database";

describe("database test", () => {
  it("should not to throw if database config is ok", async () => {
    try{
      await sequelize.authenticate()
      expect(true).to.be.true
    } catch(error: any){
      console.log("ERROR: ", error.message)
      expect(false).to.be.true
    }
  });
});
