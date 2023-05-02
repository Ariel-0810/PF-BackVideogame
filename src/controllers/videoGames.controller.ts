import { RequestHandler } from "express";
import { Videogame } from "../models/Videogame";
// import { Genre } from "../models/Genre";
import { Request, Response } from 'express';
import { Op } from "sequelize";



async function getAllGames( req?: Request, res?:Response) {
  const { name } = req.query;

    try {
      if(!name)
      {
        let allGames = await Videogame.findAll()
        if (allGames.length === 0) {
        return res.status(404).json({ "message": "No se encontraron videojuegos en la Base de Datos" })};
        res.status(200).json(allGames)
      } else {
        let gameName = await Videogame.findAll({
          where: { name: { [Op.iLike]: `%${name}%` } }})
          if(gameName.length === 0) {
            return res.status(404).json({ "message": `No se encontraron videojuegos con el nombre: ${name}` })}
          return res.status(200).json(gameName)
      }      
     } catch (error) {
        res.status(400).json({"message" : "Hubo un error", "error": error});
      }
    }
  

  const getGameById  = async (req, res) => {
    const { id } = req.params;
  
     try {
    let gameId = await Videogame.findByPk(id)
    //   id,{
    //   include: {
    //     model: Videogame,
    //     attributes: ["Platforms"],
    //   },
    // }
    // );
    if(!gameId) {
      return res.status(404).json({ "message": `No se encontraron videojuegos con el Id: ${id}` })}
          res.status(200).json(gameId)
      } catch (error) {
        res.status(500).send({ message: "Error interno del servidor" });
      }
  }

    const postNewGame: RequestHandler = async (req, res) => {
      try {
        await Videogame.create({ ...req.body })
        return res.status(200).json({ "message": "Videogame creado exitosamente" })  
      } catch (error) {    
          return res.status(400).json({"message" : "Hubo un error", "error": error});
      }
    };
    
    const deleteGame: RequestHandler = async (req, res) => {
        const { id } = req.params;
        const { name } = req.query;
      try {
        if(!name){
        await Videogame.destroy({ where: { id } })
        return res.status(200).json({ "message": "Videogame Eliminado exitosamente" })
        } else {
          await Videogame.destroy({where: { name: { [Op.iLike]: `%${name}%` } }})
          return res.status(200).json({"message": "Videogame Eliminado exitosamente" })
        }  
      } catch (error) {    
          return res.status(400).json({"message" : "Hubo un error", "error": error});
      }
    };
    
    
    export {
      getAllGames,   
      postNewGame,
      deleteGame,
      getGameById
    };
