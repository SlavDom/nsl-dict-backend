import {Column, Model, Table, Unique} from "sequelize-typescript";

@Table
export class User extends Model<User> {

  @Unique
  @Column
  username: string;

  @Column
  password: string;

}
