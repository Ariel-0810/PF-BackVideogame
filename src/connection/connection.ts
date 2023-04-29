import { Sequelize } from "sequelize-typescript";
import { Videogame } from "../models/Videogame";



export const connection = new Sequelize(
    // 'postgres://postgres:mia081013@localhost:5432/gameshop',
{
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "mia081013",
    database: "gameshop",
    logging: false,
    models: [
        Videogame
    ]
})

async function connectionDB() {
    try {
        await connection.sync()
    } catch (error) {
        console.log((error));
        
    }
}

export default connectionDB