import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";
import {Tag} from "./Tag";

@Table
export class WordTag extends Model<WordTag> {

  @ForeignKey(() => Word)
  @Column
  wordId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}