"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videoGames_controller_1 = require("../controllers/videoGames.controller");
const videoGames_controller_2 = require("../controllers/videoGames.controller");
const dataBulkLoad_1 = require("../controllers/dataBulkLoad");
const router = (0, express_1.Router)();
const validate = (req, res, next) => {
    const { name, released } = req.body;
    if (!name || !released) {
        res.status(400).json({ error: "Faltan datos obligatortios" });
    }
    else {
        next();
    }
};
router.get("/getAllGames", videoGames_controller_1.getAllGames);
router.get("/getAllGames/:id", videoGames_controller_2.getGameById);
router.post("/createBulkDB", dataBulkLoad_1.createBulkDB);
router.post("/postNewGame", validate, videoGames_controller_1.postNewGame);
router.delete("/deleteGame/", videoGames_controller_1.deleteGame);
router.delete("/deleteGame/:id", videoGames_controller_1.deleteGame);
exports.default = router;
