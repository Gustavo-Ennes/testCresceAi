import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

const PokeTeam = sequelize.define(
  "poketeam",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    slot1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slot2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slot3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slot4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slot5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slot6: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    tableName: "poketeam",
    timestamps: true,
  }
);

export { PokeTeam };

// `sequelize.define` also returns the model