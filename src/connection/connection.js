// "use strict";
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.connection = void 0;
// const sequelize_typescript_1 = require("sequelize-typescript");
// const Videogame_1 = require("../models/Videogame");
// // require("dotenv").config();
// // const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// exports.connection = new sequelize_typescript_1.Sequelize('postgres://postgres:mia081013@localhost:5432/gameshop', {
//     logging: false,
//     models: [
//         Videogame_1.Gameshop
//     ]
// });
// function connectionDB() {
//     return __awaiter(this, void 0, void 0, function* () {
//         try {
//             yield exports.connection.sync();
//         }
//         catch (error) {
//             console.log((error));
//         }
//     });
// }
// exports.default = connectionDB;
