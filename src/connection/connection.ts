import { Sequelize } from "sequelize-typescript";
import {Videogame}  from "../models/Videogame";
import  {Genre}  from "../models/Genre";



export const connection = new Sequelize(
{
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "mia081013",
    database: "gameshop",
    logging: false,
    models: [
        Videogame,
        Genre, 
    ]
}
)

async function connectionDB() {
    try {
        await connection.sync( { alter: true } )
    } catch (error) {
        console.log((error));        
    }
}

export default connectionDB