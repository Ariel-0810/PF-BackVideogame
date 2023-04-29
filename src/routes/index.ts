// import { Router, Request, Response } from "express";
// import axios from "axios";
// import videoGamesRouter from "../routes/videogames.routes" 
// import genresRouter from "../routes/genre.routes";
// import addGenresDb from "../controllers/AddGenresDb.controller.js";
// const { APIKEY } = process.env; 
// import dotenv from 'dotenv';
// dotenv.config();


// const router = Router();

// router.get("/", (req: Request , res: Response ) => {
//     res.send("Estas en la ruta /");
//   });

//   router.use("/videogames", videoGamesRouter);
//   router.use("/genres", genresRouter);

//   (async function traerDatosDeLaApi() {
//     const data = await axios(
//     `https://api.rawg.io/api/genres?key=${APIKEY}`
//     );
    
//     let datosApis = data.data.results;
    
//     datosApis.map((date: any) => {
//     addGenresDb(date.name);
//     });
//     })();
    
    // export default router;
    
    
    
    
    
    
    