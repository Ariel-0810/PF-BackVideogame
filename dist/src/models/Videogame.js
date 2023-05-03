"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videogame = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Videogame = class Videogame extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], Videogame.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
    })
], Videogame.prototype, "released", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSONB),
        allowNull: false,
        defaultValue: [],
    })
], Videogame.prototype, "platforms", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    })
], Videogame.prototype, "genres", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        defaultValue: 'https://thumbs.gfycat.com/DescriptiveFluidFrogmouth-size_restricted.gif',
        allowNull: true,
    })
], Videogame.prototype, "background_image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    })
], Videogame.prototype, "rating_top", void 0);
Videogame = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "videogames",
    })
], Videogame);
exports.Videogame = Videogame;
//# sourceMappingURL=Videogame.js.map