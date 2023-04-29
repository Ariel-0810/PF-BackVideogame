"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
exports.default = (sequelize) => {
    // define el modelo
    sequelize.define('Videogame', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        released: {
            type: sequelize_1.DataTypes.STRING(20),
        },
        rating: {
            type: sequelize_1.DataTypes.FLOAT,
        },
        platforms: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            defaultValue: [],
            allowNull: false,
        },
        create: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
        },
        background_image: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        }
    }, { timestamps: false });
};
