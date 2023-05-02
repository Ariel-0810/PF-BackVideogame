"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Request, Response, NextFunction } from 'express';
const express_1 = __importStar(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./connection/connection"));
const videogames_routes_1 = __importDefault(require("./routes/videogames.routes"));
// import routes from '../src/routes/index';
const server = (0, express_1.default)();
//--config
server.set("port", process.env.PORT || 3001);
//middlesware
server.use((0, morgan_1.default)('dev'));
server.use((0, cors_1.default)());
server.use((0, express_1.urlencoded)({ extended: false }));
server.use((0, express_1.json)());
server.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.locals.name = 'API';
server.use(body_parser_1.default.json({ limit: '50mb' }));
server.use((0, cookie_parser_1.default)());
//--conexion
(0, connection_1.default)();
//--routes
server.get("/", (req, res) => {
    res.json("Videogame activo");
});
//-- videogames
server.use("/api", videogames_routes_1.default);
exports.default = server;
