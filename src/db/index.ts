import {Sequelize} from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'nsl',
  username: 'admin',
  password: '',
  dialect: 'sqlite',
  storage: './my.db',
  modelPaths: [__dirname + '../models']
});

export default sequelize;