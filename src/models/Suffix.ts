import {BelongsToMany, Column, Model, Table} from "sequelize-typescript";
import {WordSuffix} from "./WordSuffix";
import {Word} from "./Word";

@Table
export class Suffix extends Model<Suffix> {

  @Column
  name: string;

  @BelongsToMany(() => Word, () => WordSuffix)
  words: Word[];
}
