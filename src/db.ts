// import { Sequelize } from "sequelize";
// import fs from 'fs';
// import path from 'path';

// // import dotenv from 'dotenv';
// // dotenv.config();


// // const {
// //     DB_USER,
// //     DB_PASSWORD,
// //     DB_HOST,
// //     DB_NAME
// //   } = process.env;

// export const sequelize = new Sequelize(
//     'postgres://postgres:mia081013@localhost:5432/gameshop',
//     {
//       logging: false, // set to console.log to see the raw SQL queries
//       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//     }
//   );

// const basename = path.basename(__filename);

// type ModelDefiner = (sequelize: Sequelize) => void;
// const modelDefiners: ModelDefiner[] = [];
// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))

//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach(model => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models.Videogame = Object.fromEntries(capsEntries);
// sequelize.models.Genre = Object.fromEntries(capsEntries);

// // En sequelize.models están todos los modelos importados como propiedades
// // Para relacionarlos hacemos un destructuring
// const Genre = sequelize.models.Genre;
// const Videogame = sequelize.models.Videogame;
// // Aca vendrian las relaciones


// Videogame.belongsToMany(Genre, {through: 'Videogame_Genre'})
// Genre.belongsToMany(Videogame, {through: 'Videogame_Genre'})


// export { Genre, Videogame }