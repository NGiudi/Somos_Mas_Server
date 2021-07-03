const { ROLES_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(ROLES_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    role: {
      type: type.STRING
    },
  },
  {
    paranoid: true
  });
}