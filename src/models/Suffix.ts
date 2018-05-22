import {BelongsToMany, Column, Model, Table, Unique} from "sequelize-typescript";
import {WordSuffix} from "./WordSuffix";
import {Word} from "./Word";

@Table
export class Suffix extends Model<Suffix> {

  @Unique
  @Column
  name: string;

  @BelongsToMany(() => Word, () => WordSuffix)
  words: Word[];
}
