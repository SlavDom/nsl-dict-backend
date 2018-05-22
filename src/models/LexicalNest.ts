import {BelongsToMany, Column, Model, Table, Unique} from "sequelize-typescript";
import {Word} from "./Word";
import {LexicalNestWord} from "./LexicalNestWord";

@Table
export class LexicalNest extends Model<LexicalNest> {

  @Column
  description: string;

  @Unique
  @Column
  name: string;

  @BelongsToMany(() => Word, () => LexicalNestWord)
  words: Word[];
}
