import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Videogame } from "./Videogame";



@Table({
  timestamps: false,
  tableName: "genres",
})
export class Genre extends Model<Genre> {

  @Column({
  type: DataType.INTEGER,
  primaryKey: true,
  autoIncrement: true,
})
id!: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}

  Genre.belongsToMany(Videogame, {
    through: "videogame_genre",
  }); 


  
  
  
