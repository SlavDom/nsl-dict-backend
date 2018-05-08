import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {WordPrefix} from "./WordPrefix";
import {Word} from "./Word";

@Table
export class Prefix extends Model<Prefix> {

  @Column
  name: string;

  @BelongsToMany(() => Word, () => WordPrefix)
  words: Word[];
}
