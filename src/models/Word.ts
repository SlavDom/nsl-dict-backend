import {BelongsTo, BelongsToMany, Column, ForeignKey, HasMany, Model, Table, Unique} from "sequelize-typescript";
import {LexicalNest} from "./LexicalNest";
import {Part} from "./Part";
import {WordTag} from "./WordTag";
import {Tag} from "./Tag";
import {Meaning} from "./Meaning";
import {Synonym} from "./Synonym";
import {Antonym} from "./Antonym";
import {LexicalNestWord} from './LexicalNestWord';
import {Suffix} from './Suffix';
import {Prefix} from './Prefix';
import {WordSuffix} from './WordSuffix';
import {WordPrefix} from './WordPrefix';

@Table
export class Word extends Model<Word> {

  @Unique
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

  @BelongsToMany(() => LexicalNest, () => LexicalNestWord)
  lexicalNests: LexicalNest[];

  @ForeignKey(() => Part)
  @Column
  partId: number;

  @BelongsTo(() => Part)
  part: Part;

  @BelongsToMany(() => Tag, () => WordTag)
  tags: Tag[];

  @BelongsToMany(() => Suffix, () => WordSuffix)
  suffixes: Suffix[];

  @BelongsToMany(() => Prefix, () => WordPrefix)
  prefixes: Prefix[];

  @Column
  ending: string;

  @HasMany(() => Meaning)
  words: Meaning[];

  @BelongsToMany(() => Word, () => Synonym)
  synonyms: Word[];

  @BelongsToMany(() => Word, () => Antonym)
  antonyms: Word[];
}
