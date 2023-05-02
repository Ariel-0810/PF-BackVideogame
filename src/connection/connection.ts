// import { Sequelize } from "sequelize-typescript";
// import {Videogame}  from "../models/Videogame";
// import  {Genre}  from "../models/Genre";



// export const connection = new Sequelize("postgres://postgress:1XjaIVI6Gk5T0WQ1LiRcsVLm0W2ueaTI@dpg-ch8ol74s3fvq1l0d03d0-a/gameshop",
// {
//     logging: false,
//     native: false,
//     dialect: 'postgres',    
//     models: [
//         Videogame,
//         Genre, 
//     ]
// }
// )

// async function connectionDB() {
//     try {
//         await connection.sync( { alter: true } )
//     } catch (error) {
//         console.log((error));        
//     }
// }

// export default connectionDB