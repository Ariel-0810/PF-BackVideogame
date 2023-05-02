"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadApiEndpoints = void 0;
// import GameShopData from "../../data/gameshop.json";
const GameShopData = __importStar(require("../src/data/data.json"));
const axios_1 = __importDefault(require("axios"));
const loadApiEndpoints = (app) => {
    app.get("/api", async (req, res) => {
        try {
            const gameShop = GameShopData;
            if (!gameShop) {
                return res.status(404).json({ message: "No se encontraron Juegos" });
            }
            return res.status(200).json(gameShop);
        }
        catch (error) {
            // console.error(Error al cargar cursos: ${error});
            console.error("No se encontraron Juegos");
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    });
    app.get("/api/games", async (req, res) => {
        try {
            const response = await axios_1.default.get("https://api.rawg.io/api/games?page_size=10&key=20769d79ed974b54ad7a5ccd0f24c887&page_size=25");
            const games = response.data.results.map((game) => {
                const { id, name, background_image, rating_top } = game;
                return { id, name, background_image, rating_top };
            });
            return res.status(200).json(games);
        }
        catch (error) {
            // console.error(Error al cargar juegos: ${error});
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    });
};
exports.loadApiEndpoints = loadApiEndpoints;
// export const createVideogames = async (): Promise<void> => {
//     try {
//       const gamesResponse: AxiosResponse<Game[]> = await axios.get<Game[]>("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad");
//       const games = Array.isArray(gamesResponse.data) ? gamesResponse.data.map((game) => ({
//         id: game.id,
//         name: game.name,
// description: game.description,
// released: game.released,
// rating: game.rating,
// platforms: game.platforms.map((platform) => ({
//   id: platform.platform.id,
//   name: platform.platform.name,
//   slug: platform.platform.slug,
//   released_at: platform.released_at,
//   requirements_en: platform.requirements_en,
//   requirements_ru: platform.requirements_ru,
// })),
// genres: game.genres.map((genre) => ({
//   id: genre.id,
//   name: genre.name,
//   slug: genre.slug,
//   games_count: genre.games_count,
//   image_background: genre.image_background,
// })),
//         background_image: game.background_image,
//         rating_top: game.rating_top,
//         // ratings_count: game.ratings_count,
//       })):[];
//       const createdGames = await Videogame.bulkCreate(games);
//       console.log(`Se crearon ${createdGames.length} videojuegos`);
//       console.log(games);
//     } catch (error) {
//       console.error('Error al crear los videojuegos', error);
//     }
//   };
