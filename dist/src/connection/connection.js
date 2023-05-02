"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Videogame_1 = require("../models/Videogame");
const Genre_1 = require("../models/Genre");
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "mia081013",
    database: "gameshop",
    logging: false,
    models: [
        Videogame_1.Videogame,
        Genre_1.Genre,
    ]
});
async function connectionDB() {
    try {
        await exports.connection.sync({ alter: true });
    }
    catch (error) {
        console.log((error));
    }
}
exports.default = connectionDB;
