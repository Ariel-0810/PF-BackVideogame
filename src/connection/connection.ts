import { Sequelize } from "sequelize-typescript";
import { Videogame } from "../models/Videogame";
import { Types } from "../models/ExampleTypes" //Esta linea es parte del ejemplo para carga masiva



export const connection = new Sequelize(
    // 'postgres://postgres:mia081013@localhost:5432/gameshop',
{
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "noesmentira1986",
    database: "gameshop",
    logging: false,
    models: [
        Videogame,
        Types //Esta linea es parte del ejemplo para carga masiva
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