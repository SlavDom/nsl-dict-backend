import {BelongsToMany, Column, Model, Table, Unique} from "sequelize-typescript";
import {WordTag} from "./WordTag";
import {Word} from "./Word";

@Table
export class Tag extends Model<Tag> {

  @Unique
  @Column
  name: string;

  @Column
  description: string;

  @BelongsToMany(() => Word, () => WordTag)
  authors: Word[];
}
