// import { Videogame } from '../models/Videogame';
// import { sequelize } from '../db';
// import { Op } from "sequelize";

// // MODIFICARLO  YA QUE LO QUE HAY QUE HACER ES QUE BUSQUE LOS PRIMEROS 15 VIDEOJUEGOS Q COINCIDAN CON LA PALABRA Q INGRESE... OSEA HAY QE HACER UN LIKE..

// const getVideoGamesQuery = async (name: string) => {
// const videogameListQuery = await Videogame.findAll({
// where: { name: { [Op.iLike]: `%${name}%` } },
// limit: 15,
// include: [{ model: sequelize.models.Genre, attributes: ["name"], through: { attributes: [] } }],
// });

// if (videogameListQuery) return videogameListQuery;

// throw new Error("This videogame does not exist");
// };

// export default getVideoGamesQuery;