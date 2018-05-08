import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Word} from "./Word";
import {LexicalNest} from "./LexicalNest";

@Table
export class LexicalNestWord extends Model<LexicalNestWord> {
    @ForeignKey(() => Word)
    @Column
    wordId: number;

    @ForeignKey(() => LexicalNest)
    @Column
    nestId: number;
}