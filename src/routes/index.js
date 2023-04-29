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
const axios_1 = __importDefault(require("axios"));
const videogames_routes_1 = __importDefault(require("../routes/videogames.routes"));
const genre_routes_1 = __importDefault(require("../routes/genre.routes"));
const AddGenresDb_controller_js_1 = __importDefault(require("../controllers/AddGenresDb.controller.js"));
const { APIKEY } = process.env;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Estas en la ruta /");
});
router.use("/", videogames_routes_1.default);
router.use("/genres", genre_routes_1.default);
(function traerDatosDeLaApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, axios_1.default)(`https://api.rawg.io/api/genres?key=${APIKEY}`);
        let datosApis = data.data.results;
        datosApis.map((date) => {
            (0, AddGenresDb_controller_js_1.default)(date.name);
        });
    });
})();
exports.default = router;
