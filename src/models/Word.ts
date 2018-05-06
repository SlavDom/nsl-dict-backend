import {BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {LexicalNest} from "./LexicalNest";
import {Part} from "./Part";
import {WordTag} from "./WordTag";
import {Tag} from "./Tag";
import {Meaning} from "./Meaning";
import {Synonym} from "./Synonym";
import {Antonym} from "./Antonym";

@Table
export class Word extends Model<Word> {

  @Column
  value: string;

  @Column
  en: string;

  @Column
  eo: string;

  @Column
  conj: number;

  @Column
  decl: number;

  @ForeignKey(() => LexicalNest)
  @Column
  lexicalNestId: number;

  @BelongsTo(() => LexicalNest)
  lexicalNest: LexicalNest;

  @ForeignKey(() => Part)
  @Column
  partId: number;

  @BelongsTo(() => Part)
  part: Part;

  @BelongsToMany(() => Tag, () => WordTag)
  authors: Tag[];

  @HasMany(() => Meaning)
  words: Meaning[];

  @BelongsToMany(() => Word, () => Synonym)
  synonyms: Word[];

  @BelongsToMany(() => Word, () => Antonym)
  antonyms: Word[];
}
