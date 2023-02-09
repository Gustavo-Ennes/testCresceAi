import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME ?? "",
  process.env.DB_USERNAME ?? "",
  process.env.DB_PASSWORD ?? "",
  {
    host: "localhost",
    dialect: "postgres",
    port: Number(process.env.DB_PORT) ?? 5432,
  }
);

export { sequelize };
