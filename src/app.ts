// import express, { Request, Response, NextFunction } from 'express';
 import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from "cors";
import connectionDB from './connection/connection';
import router from './routes/videogames.routes';
// import routes from '../src/routes/index';

const server = express();

//--config
server.set("port", process.env.PORT || 3001)


//middlesware
server.use(morgan('dev'));
server.use(cors());
server.use(urlencoded({ extended: false }));
server.use(json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.locals.name = 'API';
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());


//--conexion
connectionDB();


//--routes
server.get("/", (req, res) => {
  res.json("Videogame activo")
});

//-- videogames
server.use("/api", router);


export default server;



