import {Column, HasMany, Model, Table, Unique} from "sequelize-typescript";
import {Word} from "./Word";

@Table
export class Part extends Model<Part> {

  @Unique
  @Column
  name: string;

  @Column
  description: string;

  @HasMany(() => Word)
  words: Word[];
}
