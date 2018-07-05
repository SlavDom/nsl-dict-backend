import {Column, DataType, Model, Table, Unique} from "sequelize-typescript";
import {ROLES} from "../lib/enum";

@Table
export class User extends Model<User> {

  @Unique
  @Column
  username: string;

  @Column
  password: string;

  @Column(DataType.STRING)
  role: ROLES;

}
