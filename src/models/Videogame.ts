import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
// import { Genre } from "./Genre";


@Table({
  timestamps: false,
  tableName: "videogames",
})
export class Videogame extends Model<Videogame> {

  @Column({
    type: DataType.INTEGER,
  type: DataType.UUID,
  primaryKey: true,
  defaultValue: DataType.UUIDV4
})
id!: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.DATEONLY,
  })
  released!: Date;

  @Column({
    type: DataType.STRING,
    defaultValue: 'https://thumbs.gfycat.com/DescriptiveFluidFrogmouth-size_restricted.gif',
    allowNull: true,
  })
  background_image!:string

  @Column({
    type: DataType.FLOAT,
  })
  rating_top!: number;
  
  @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    description!: string;
  
  
  
    @Column({
      type: DataType.ARRAY(DataType.STRING),
      defaultValue: [],
      allowNull: false,
    })
    platforms!: string;
  
    @Column({
      type: DataType.BOOLEAN,
      defaultValue: true,
    })
    create!: string;
}


