import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";
import {Suffix} from "./Suffix";

@Table
export class WordSuffix extends Model<WordSuffix> {

  @ForeignKey(() => Word)
  @Column
  wordId: number;

  @ForeignKey(() => Suffix)
  @Column
  suffixId: number;
}