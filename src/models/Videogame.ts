// import { DataType, Sequelize } from 'sequelize-typescript';

// // Exportamos una función que define el modelo
// // Luego le inyectamos la conexión a sequelize.
// export default (sequelize: Sequelize) => {
//   // define el modelo
//   sequelize.define('Videogame', {
//     id: {
//       type: DataType.UUID,
//       primaryKey: true,
//       defaultValue: DataType.UUIDV4,
//     },
//     name: {
//       type: DataType.STRING(50),
//       allowNull: false,
//     },
//     description: {
//       type: DataType.TEXT,
//       allowNull: false,
//     },
//     released: {
//       type: DataType.STRING(20),
//     },
//     rating: {
//       type: DataType.FLOAT,
//     },
//     platforms: {
//       type: DataType.ARRAY(DataType.STRING),
//       defaultValue: [],
//       allowNull: false,
//     },
//     create:{
//       type: DataType.BOOLEAN,
//       defaultValue: true,

//     },
//     background_image:{
//       type: DataType.TEXT,

//       allowNull: false,
//     }
//   }, { timestamps: false });
// };

// import { Model, DataTypes, BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin } from 'sequelize';
// import { Sequelize } from 'sequelize';
// import  { sequelize }  from '../db';
// import { Genre } from './Genre';

// class Videogame extends Model {
//   public id!: string;
//   public name!: string;
//   public description!: string;
//   public released!: string;
//   public rating!: number;
//   public platforms!: string[];
//   public create!: boolean;
//   public background_image!: string;

//   // Belongs-To-Many Association
//   public addGenres!: BelongsToManyAddAssociationMixin<Genre, string>;
//   public removeGenres!: BelongsToManyRemoveAssociationMixin<Genre, string>;
// }

// Videogame.init({
//   id: {
//     type: DataTypes.UUID,
//     primaryKey: true,
//     defaultValue: DataTypes.UUIDV4,
//   },
//   name: {
    //     type: DataTypes.STRING(50),
    //     allowNull: false,
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   released: {
//     type: DataTypes.STRING(20),
//   },
//   rating: {
//     type: DataTypes.FLOAT,
//   },
//   platforms: {
//     type: DataTypes.ARRAY(DataTypes.STRING),
//     defaultValue: [],
//     allowNull: false,
//   },
//   create:{
//     type: DataTypes.BOOLEAN,
//     defaultValue: true,
//   },
//   background_image:{
//     type: DataTypes.TEXT,
//     allowNull: false,
//   }
// }, {
//   sequelize,
//   timestamps: false,
//   modelName: 'Videogame',
// });

// export { Videogame };

import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "Videogame"
})

export class Videogame extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    description!: string

    @Column({
        type: DataType.STRING(20),
    })
    released!: string
}