"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conection = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import dotenv from 'dotenv';
// dotenv.config();
// const {
//     DB_USER,
//     DB_PASSWORD,
//     DB_HOST,
//     DB_NAME
//   } = process.env;
exports.sequelize = new sequelize_1.Sequelize("postgres://postgress:1XjaIVI6Gk5T0WQ1LiRcsVLm0W2ueaTI@dpg-ch8ol74s3fvq1l0d03d0-a/gameshop", {
    logging: false,
    native: false,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
const basename = path_1.default.basename(__filename);
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs_1.default.readdirSync(path_1.default.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
    .forEach((file) => {
    modelDefiners.push(require(path_1.default.join(__dirname, '/models', file)));
});
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(exports.sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(exports.sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
exports.sequelize.models.Videogame = Object.fromEntries(capsEntries);
exports.sequelize.models.Genre = Object.fromEntries(capsEntries);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const Genre = sequelize.models.Genre;
// const Videogame = sequelize.models.Videogame;
const { Videogame, Genre } = exports.sequelize.models;
// Aca vendrian las relaciones
Videogame.belongsToMany(Genre, { through: 'Videogame_Genre' });
Genre.belongsToMany(Videogame, { through: 'Videogame_Genre' });
exports.conection = Object.assign(Object.assign({}, exports.sequelize.models), { conn: exports.sequelize });
//# sourceMappingURL=db.js.map