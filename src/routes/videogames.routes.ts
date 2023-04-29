import { Router } from "express";
// import { Genre } from "../db";
// import { ModelCtor, Model } from "sequelize";
import getVideoGames from "../controllers/getVideoGames.controller";
import postVideoGames from "../controllers/postVideoGames.controlle";
import deleteVideoGames from "../controllers/deleteVideogame.controller";
// import  getVideoGamesId from "../controllers/getVideoGamesId.controller";
// import getVideoGamesQuery from "../controllers/getVideoGamesQuery.controller";
// import createVideoGame from "../controllers/postVideoGames.controlle";


const Videosrouter = Router();

Videosrouter.get("/allvideogames", getVideoGames);

Videosrouter.post("/postvideogames", postVideoGames);

Videosrouter.delete("/deletevideogames/:id", deleteVideoGames);
// router.get("/videogames", async (req, res) => {
//     const { name }: { name?: string } = req.query;
// try {
//     if (name) {
//         const listVideoGamesQuery = await getVideoGamesQuery(name);
//         return res.status(200).json(listVideoGamesQuery);
//     } else {
//         const listVideoGames = await getVideoGames();
//         return res.status(200).json(listVideoGames);
//     }
// } catch (error: unknown) {
//     interface ErrorWithMessage {
//          message: string;
//      }       
    
//     if ((error as ErrorWithMessage).message === "This videogame does not exist") {
   
// return res.status(400).json({ error: (error as ErrorWithMessage).message });
// } else {
// return res.status(400).json({ error: (error as ErrorWithMessage).message });
// }
// }
// });

// router.get("/videogame/:idVideogame", async (req, res) => {
    
// try {
// const  idVideogame = parseInt(req.params.idVideogame);

// console.log(idVideogame);
// const listVideoGamesForId = await getVideoGamesId(idVideogame);
// res.status(200).json(listVideoGamesForId);
// } catch (error: unknown) {
//     interface ErrorWithMessage {
//         message: string;
//     }
// res.status(400).json({ error: (error as ErrorWithMessage).message });
// }
// });

// router.post("/videogames", async (req, res) => {
// const {
// name,
// description,
// released,
// rating,
// platforms,
// genres,
// background_image,
// } = req.body;
// // try {
// //     let arrayGenres: number[] = [];

// //     for (let i = 0; i < genres.length; i++) {
// //       const searchGenres = await (Genre as unknown as ModelCtor<Model<Genre, Genre>>).findOne({
// //           where: { name: genres[i] },
// //           attributes: ["id"],
// //       }) as Model<Genre> | null;
    
// //       if (searchGenres) {
// //         arrayGenres.push(searchGenres.getDataValue('id'));
// //       }
// //     }
    
    

// // if (arrayGenres.length > 0) {
// //   const addVideoGames = await createVideoGame(
// //     name,
// //     description,
// //     released,
// //     rating,
// //     platforms,
// //     background_image
// //   );
// //   await addVideoGames.addGenres(arrayGenres);

// //   res.status(201).json(addVideoGames);
// // }
// // } catch (error: unknown) {
// //     interface ErrorWithMessage {
// //         message: string;
// //     }
// // res.status(400).json({ error: (error as ErrorWithMessage).message });
// // }
// });

export default Videosrouter;