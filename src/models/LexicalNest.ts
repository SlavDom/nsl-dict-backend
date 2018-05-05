import {Column, Model, Table} from "sequelize-typescript";

@Table
class LexicalNest extends Model<LexicalNest> {

  @Column
  description: string;
}