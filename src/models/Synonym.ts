import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";

@Table
export class Synonym extends Model<Synonym> {

  @ForeignKey(() => Word)
  @Column
  sourceId: number;

  @ForeignKey(() => Word)
  @Column
  valueId: number;
}
