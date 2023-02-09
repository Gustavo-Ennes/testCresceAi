"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaModel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const PizzaModel = database_1.sequelize.define("pizza", {
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    topping: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
    },
}, {
    tableName: "pizza",
    timestamps: true,
});
exports.PizzaModel = PizzaModel;
// `sequelize.define` also returns the model
