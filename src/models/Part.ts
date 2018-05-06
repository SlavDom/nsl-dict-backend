import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";

@Table
export class Part extends Model<Part> {

  @Column
  name: string;

  @Column
  description: string;

  @HasMany(() => Word)
  words: Word[];
}
