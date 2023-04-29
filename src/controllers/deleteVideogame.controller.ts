import { RequestHandler } from "express";
import { Videogame } from "../models/Videogame";

export const deleteVideoGames: RequestHandler = async (req, res) => {
    const { id } = req.params;
  try {
    await Videogame.destroy({ where: { id } })
    return res.status(200).json({ "message": "Videogame Eliminado exitosamente" })  
  } catch (error) {    
      return res.status(400).json({"message" : "Hubo un error", "error": error});
  }
};

export default deleteVideoGames;