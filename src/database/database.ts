import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME ?? "",
  process.env.DB_USERNAME ?? "",
  process.env.DB_PASSWORD ?? "",
  {
    host: "localhost",
    dialect: "postgres",
    port: 15432,
  }
);

export { sequelize };