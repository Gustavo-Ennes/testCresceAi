import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.POSTGRES_NAME ?? "",
  process.env.POSTGRES_USERNAME ?? "",
  process.env.POSTGRES_PASSWORD ?? "",
  {
    host: "localhost",
    dialect: "postgres",
    port: Number(process.env.POSTGRES_PORT),
  }
);

export { sequelize };
