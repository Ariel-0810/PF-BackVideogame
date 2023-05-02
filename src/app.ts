// import express, { req: Request, Res: Response, next: NextFunction } from 'express';
 import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from "cors";
// import connectionDB from './connection/connection';
import router from './routes/videogames.routes';
// import routes from '../src/routes/index';

const server = express();

//--config
server.set("port", process.env.PORT || 3001)


//middlesware
// server.use(morgan('dev'));
// server.use(urlencoded({ extended: false }));
// server.use(json());
// server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// server.locals.name = 'API';
// server.use(bodyParser.json({ limit: '50mb' }));
// server.use(cookieParser());

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cors());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//--conexion
// connectionDB();


//--routes
server.get("/", (req, res) => {
  res.json("Videogame activo")
});

//-- videogames
server.use("/api", router);


export default server;



