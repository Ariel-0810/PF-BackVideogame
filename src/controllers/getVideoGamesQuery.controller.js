"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
// MODIFICARLO  YA QUE LO QUE HAY QUE HACER ES QUE BUSQUE LOS PRIMEROS 15 VIDEOJUEGOS Q COINCIDAN CON LA PALABRA Q INGRESE... OSEA HAY QE HACER UN LIKE..
const getVideoGamesQuery = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const videogameListQuery = yield db_1.Videogame.findAll({
        where: { name: { [sequelize_1.Op.iLike]: `%${name}%` } },
        limit: 15,
        include: [{ model: db_1.sequelize.models.Genre, attributes: ["name"], through: { attributes: [] } }],
    });
    if (videogameListQuery)
        return videogameListQuery;
    throw new Error("This videogame does not exist");
});
exports.default = getVideoGamesQuery;
