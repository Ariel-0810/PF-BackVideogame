"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBulkDB = void 0;
const axios_1 = __importDefault(require("axios"));
const Videogame_1 = require("../models/Videogame");
const createBulkDB = async (req, res) => {
    try {
        const response = await axios_1.default.get("https://api.rawg.io/api/games?page_size=10&key=6df927ecdff443ffa74507df2223a6ad&page_size=40");
        const games = response.data.results;
        const promises = games.map(async (game) => {
            const videogame = await Videogame_1.Videogame.findOne({
                where: { name: game.name },
            });
            // const requirements  =
            //   videogame && videogame.platforms
            //     ? videogame.platforms[3].requirements_en
            //     : null;
            // const minimum = requirements ? requirements.minimum : null;
            // const recommended = requirements ? requirements.recommended : null;
            //     console.log(requirements);
            const { id, name, released, background_image, rating_top } = game;
            return { id, name, released, background_image, rating_top };
        });
        const createdGames = await Promise.all(promises);
        const filteredGames = createdGames.filter((game) => game !== null);
        const savedGames = await Videogame_1.Videogame.bulkCreate(filteredGames);
        return res.status(200).json(savedGames);
    }
    catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
exports.createBulkDB = createBulkDB;
//# sourceMappingURL=dataBulkLoad.js.map