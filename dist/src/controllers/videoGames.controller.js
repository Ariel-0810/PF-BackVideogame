"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameById = exports.deleteGame = exports.postNewGame = exports.getAllGames = void 0;
const Videogame_1 = require("../models/Videogame");
const sequelize_1 = require("sequelize");
async function getAllGames(req, res) {
    const { name } = req.query;
    try {
        if (!name) {
            let allGames = await Videogame_1.Videogame.findAll();
            if (allGames.length === 0) {
                return res.status(404).json({ "message": "No se encontraron videojuegos en la Base de Datos" });
            }
            ;
            res.status(200).json(allGames);
        }
        else {
            let gameName = await Videogame_1.Videogame.findAll({
                where: { name: { [sequelize_1.Op.iLike]: `%${name}%` } }
            });
            if (gameName.length === 0) {
                return res.status(404).json({ "message": `No se encontraron videojuegos con el nombre: ${name}` });
            }
            return res.status(200).json(gameName);
        }
    }
    catch (error) {
        res.status(400).json({ "message": "Hubo un error", "error": error });
    }
}
exports.getAllGames = getAllGames;
const getGameById = async (req, res) => {
    const { id } = req.params;
    try {
        let gameId = await Videogame_1.Videogame.findByPk(id);
        //   id,{
        //   include: {
        //     model: Videogame,
        //     attributes: ["Platforms"],
        //   },
        // }
        // );
        if (!gameId) {
            return res.status(404).json({ "message": `No se encontraron videojuegos con el Id: ${id}` });
        }
        res.status(200).json(gameId);
    }
    catch (error) {
        res.status(500).send({ message: "Error interno del servidor" });
    }
};
exports.getGameById = getGameById;
const postNewGame = async (req, res) => {
    try {
        await Videogame_1.Videogame.create(Object.assign({}, req.body));
        return res.status(200).json({ "message": "Videogame creado exitosamente" });
    }
    catch (error) {
        return res.status(400).json({ "message": "Hubo un error", "error": error });
    }
};
exports.postNewGame = postNewGame;
const deleteGame = async (req, res) => {
    const { id } = req.params;
    const { name } = req.query;
    try {
        if (!name) {
            await Videogame_1.Videogame.destroy({ where: { id } });
            return res.status(200).json({ "message": "Videogame Eliminado exitosamente" });
        }
        else {
            await Videogame_1.Videogame.destroy({ where: { name: { [sequelize_1.Op.iLike]: `%${name}%` } } });
            return res.status(200).json({ "message": "Videogame Eliminado exitosamente" });
        }
    }
    catch (error) {
        return res.status(400).json({ "message": "Hubo un error", "error": error });
    }
};
exports.deleteGame = deleteGame;
//# sourceMappingURL=videoGames.controller.js.map