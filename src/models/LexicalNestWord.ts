import {Column, ForeignKey, Model, Table} from "sequelize-typescript";

@Table
export class LexicalNestWord extends Model<LexicalNestWord> {
    @ForeignKey(() => Word)
    @Column
    wordId: number;

    @ForeignKey(() => Tag)
    @Column
    nestId: number;
}