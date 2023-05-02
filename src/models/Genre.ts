import { Table, Model, Column, DataType } from "sequelize-typescript";



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


  
  
  
