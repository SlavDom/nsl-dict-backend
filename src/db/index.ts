import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('nsl-dict', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: './my.db',
  operatorsAliases: false
});

export default sequelize;