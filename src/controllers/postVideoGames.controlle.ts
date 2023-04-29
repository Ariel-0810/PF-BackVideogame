// import { Videogame } from "../models/Videogame";

// const createVideoGame = async (
//   name: string,
//   description: string,
//   released: Date,
//   rating: number,
//   platforms: string[],
//   background_image: string
// ) => {
//   const newVideoGame = await Videogame.create({
//     name,
//     description,
//     released,
//     rating,
//     platforms,
//     background_image,
//   });
  
//   return newVideoGame;
// };

// export default createVideoGame;


import { RequestHandler } from "express";
import { Videogame } from "../models/Videogame";

export const postVideoGames: RequestHandler = async (req, res) => {
  try {
    await Videogame.create({ ...req.body })
    return res.status(200).json({ "message": "Videogame creado exitosamente" })  
  } catch (error) {    
      return res.status(400).json({"message" : "Hubo un error", "error": error});
  }
};

export default postVideoGames;