import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";
import {LexicalNestWord} from "./LexicalNestWord";

@Table
export class LexicalNest extends Model<LexicalNest> {

  @Column
  description: string;

  @Column
  name: string;

  @BelongsToMany(() => Word, () => LexicalNestWord)
  words: Word[];
}
