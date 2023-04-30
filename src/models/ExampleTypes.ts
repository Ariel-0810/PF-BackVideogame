//Este modelo es parte del ejemplo para carga masiva

import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "Types"
})

export class Types extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string

}