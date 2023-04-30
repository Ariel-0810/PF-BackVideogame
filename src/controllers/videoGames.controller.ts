import { RequestHandler } from "express";
import { Videogame } from "../models/Videogame";

const getVideoGames: RequestHandler = async (req, res) => {
    try {
      const videogames: Videogame[] = await Videogame.findAll();
      if (videogames.length === 0) {
        return res.status(404).json({ "message": "No se encontraron videojuegos" });
      }
      return res.status(200).json(videogames);
    } catch (error) {
      return res.status(500).json({ "message": "Error al recuperar los videojuegos" });
    }
  };

const postVideoGames: RequestHandler = async (req, res) => {
  try {
    await Videogame.create({ ...req.body })
    return res.status(200).json({ "message": "Videogame creado exitosamente" })  
  } catch (error) {    
      return res.status(400).json({"message" : "Hubo un error", "error": error});
  }
};

const deleteVideoGames: RequestHandler = async (req, res) => {
    const { id } = req.params;
  try {
    await Videogame.destroy({ where: { id } })
    return res.status(200).json({ "message": "Videogame Eliminado exitosamente" })  
  } catch (error) {    
      return res.status(400).json({"message" : "Hubo un error", "error": error});
  }
};

export {
    getVideoGames, 
    postVideoGames,
    deleteVideoGames
};