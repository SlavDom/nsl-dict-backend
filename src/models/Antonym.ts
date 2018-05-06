import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";

@Table
export class Antonym extends Model<Antonym> {

  @ForeignKey(() => Word)
  @Column
  sourceId: number;

  @ForeignKey(() => Word)
  @Column
  valueId: number;
}
