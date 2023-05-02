import { Table, Model, Column, DataType } from "sequelize-typescript";

interface Platform {
  platform: { id:number, name:string, slug:string, image:string | null, year_end: string | null, year_start: string | null, games_count: number,  image_background: string};
  released_at: string;
  requirements_en: {
    minimum: string;
    recommended: string;
  } | null;  
}

interface Genre {
  id:number,
  name:string,
  slug:string,
  games_count: number,
  image_background: string  
}


@Table({
  timestamps: false,
  tableName: "videogames",
})
export class Videogame extends Model<Videogame> {

//   @Column({
//     type: DataType.INTEGER,
//   type: DataType.UUID,
//   primaryKey: true,
//   defaultValue: DataType.UUIDV4
// })
// id!: number;
  
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
    type: DataType.ARRAY(DataType.JSONB),
    allowNull: false,
    defaultValue: [],
  })
  platforms!: Platform[];

  @Column({
    type: DataType.FLOAT,
  })
  genres!: Genre[];

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
  
    // @Column({
    //   type: DataType.BOOLEAN,
    //   defaultValue: true,
    // })
    // create!: string;
}

