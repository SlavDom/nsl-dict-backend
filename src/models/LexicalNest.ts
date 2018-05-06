import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";

@Table
export class LexicalNest extends Model<LexicalNest> {

  @Column
  description: string;

  @Column
  name: string;

  @HasMany(() => Word)
  words: Word[];
}
