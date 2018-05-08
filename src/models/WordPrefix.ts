import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";
import {Prefix} from "./Prefix";

@Table
export class WordPrefix extends Model<WordPrefix> {

  @ForeignKey(() => Word)
  @Column
  wordId: number;

  @ForeignKey(() => Prefix)
  @Column
  prefixId: number;
}