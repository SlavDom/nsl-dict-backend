import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Meaning} from "./Meaning";

@Table
export class Example extends Model<Example> {

  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(() => Meaning)
  @Column
  meaningId: number;

  @BelongsTo(() => Meaning)
  meaning: Meaning;
}
