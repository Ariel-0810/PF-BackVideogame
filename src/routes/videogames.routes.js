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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getVideoGames_controller_1 = __importDefault(require("../controllers/getVideoGames.controller"));
const getVideoGamesId_controller_1 = __importDefault(require("../controllers/getVideoGamesId.controller"));
const getVideoGamesQuery_controller_1 = __importDefault(require("../controllers/getVideoGamesQuery.controller"));
const router = (0, express_1.Router)();
router.get("/videogames", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        if (name) {
            const listVideoGamesQuery = yield (0, getVideoGamesQuery_controller_1.default)(name);
            return res.status(200).json(listVideoGamesQuery);
        }
        else {
            const listVideoGames = yield (0, getVideoGames_controller_1.default)();
            return res.status(200).json(listVideoGames);
        }
    }
    catch (error) {
        if (error.message === "This videogame does not exist") {
            return res.status(400).json({ error: error.message });
        }
        else {
            return res.status(400).json({ error: error.message });
        }
    }
}));
router.get("/videogame/:idVideogame", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idVideogame = parseInt(req.params.idVideogame);
        console.log(idVideogame);
        const listVideoGamesForId = yield (0, getVideoGamesId_controller_1.default)(idVideogame);
        res.status(200).json(listVideoGamesForId);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
router.post("/videogames", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, released, rating, platforms, genres, background_image, } = req.body;
    // try {
    //     let arrayGenres: number[] = [];
    //     for (let i = 0; i < genres.length; i++) {
    //       const searchGenres = await (Genre as unknown as ModelCtor<Model<Genre, Genre>>).findOne({
    //           where: { name: genres[i] },
    //           attributes: ["id"],
    //       }) as Model<Genre> | null;
    //       if (searchGenres) {
    //         arrayGenres.push(searchGenres.getDataValue('id'));
    //       }
    //     }
    // if (arrayGenres.length > 0) {
    //   const addVideoGames = await createVideoGame(
    //     name,
    //     description,
    //     released,
    //     rating,
    //     platforms,
    //     background_image
    //   );
    //   await addVideoGames.addGenres(arrayGenres);
    //   res.status(201).json(addVideoGames);
    // }
    // } catch (error: unknown) {
    //     interface ErrorWithMessage {
    //         message: string;
    //     }
    // res.status(400).json({ error: (error as ErrorWithMessage).message });
    // }
}));
exports.default = router;
