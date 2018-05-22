import {BelongsToMany, Column, Model, Table, Unique} from "sequelize-typescript";
import {WordPrefix} from "./WordPrefix";
import {Word} from "./Word";

@Table
export class Prefix extends Model<Prefix> {

  @Unique
  @Column
  name: string;

  @BelongsToMany(() => Word, () => WordPrefix)
  words: Word[];
}
