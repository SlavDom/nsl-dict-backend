import {BelongsTo, Column, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";
import {Example} from "./Example";

@Table
export class Meaning extends Model<Meaning> {

  @Column
  description: string;

  @HasMany(() => Example)
  examples: Example[];

  @ForeignKey(() => Word)
  @Column
  wordId: number;

  @BelongsTo(() => Word)
  word: Word;
}
