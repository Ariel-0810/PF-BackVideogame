// import { DataType, Sequelize } from 'sequelize-typescript';

// export default (sequelize: Sequelize) => {
// sequelize.define('Genre', {
//     id: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//      name: {
//         type: DataType.STRING,
//         allowNull: false,
//       }
//     }, { timestamps: false });
//   };
// import { Model, DataTypes, BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin } from 'sequelize';
// import { Sequelize } from 'sequelize';
// import { Videogame } from './Videogame';
// import { sequelize } from '../db';


// class Genre extends Model {
//   public id!: number;
//   public name!: string;

//   // Belongs-To-Many Association
//   public addVideogames!: BelongsToManyAddAssociationMixin<Videogame, string>;
//   public removeVideogames!: BelongsToManyRemoveAssociationMixin<Videogame, string>;
// }

// Genre.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
// }, {
//   sequelize,
//   timestamps: false,
//   modelName: 'Genre',
// });

// // Many-To-Many Association
// Videogame.belongsToMany(Genre, { through: 'Videogame_Genre' });
// Genre.belongsToMany(Videogame, { through: 'Videogame_Genre' });

// export { Genre };
