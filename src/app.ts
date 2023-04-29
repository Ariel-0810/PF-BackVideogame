// import express, { Request, Response, NextFunction } from 'express';
 import express, { json, urlencoded } from 'express';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from "cors";
import connectionDB from './connection/connection';
import Videosrouter from './routes/videogames.routes';
// import routes from '../src/routes/index';
// import './db.js';

const server = express();

//--config
server.set("port", process.env.PORT || 3001)


//middlesware
server.use(morgan('dev'));
server.use(cors());
server.use(urlencoded({ extended: false }));
server.use(json());
// server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// server.locals.name = 'API';
// server.use(bodyParser.json({ limit: '50mb' }));
// server.use(cookieParser());
// server.use((req: Request, res: Response, next: NextFunction) => {
//   res.header('Access-Control-Allow-Origin', '*'); // 'http://localhost:3000'
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

//--conexion
connectionDB();


//--routes
server.get("/api", (req, res) => {
  res.json("Videogame activo")
});

//-- videgames
server.use("/api/videogames", Videosrouter);
// server.use(express.json())

// Error catching endware.
// interface CustomError extends Error {
//     status?: number;
//   }


// server.use((err: CustomError, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

export default server;



