import { Router } from "express";
import { getAllGames, postNewGame, deleteGame } from "../controllers/videoGames.controller";
import { getGameById  } from "../controllers/videoGames.controller";
import { createBulkDB } from "../controllers/dataBulkLoad";

const router = Router();

const validate = (req, res, next) => {
const { name, released } = req.body
if( !name || !released ) {
    res.status(400).json({error: "Faltan datos obligatortios"})
} else {
    next();
}
}

router.get("/getAllGames", getAllGames);
router.get("/getAllGames/:id", getGameById );
router.post("/createBulkDB", createBulkDB);
router.post("/postNewGame", validate, postNewGame);
router.delete("/deleteGame/", deleteGame);
router.delete("/deleteGame/:id", deleteGame);



export default router;