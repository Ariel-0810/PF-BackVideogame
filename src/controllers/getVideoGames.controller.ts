// import { Genre } from "../models/Genre";
// import { Videogame } from "../models/Videogame";

// const getVideoGames = async () => {
//   const videogameList = await Videogame.findAll({
//     include: {
//       model: Genre,
//       attributes: ["name"],
//       through: {
//         attributes: [],
//       },
//     },
//   });
//   return videogameList;
// };

// export default getVideoGames;


import { RequestHandler } from "express";
import { Videogame } from "../models/Videogame";

export const getVideoGames: RequestHandler = async (req, res) => {
  try {
    const videogame: Videogame[] = await Videogame.findAll()
      return res.status(200).json(videogame)    
  } catch (error) {    
      return res.status(400).json({"message" : "Hubo un error", "error": error});
  }
};

export default getVideoGames;
