const { CATEGORIES_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(CATEGORIES_TABLE, {
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING
    },
    description: {
      type: type.STRING
    }
  },
  {
    paranoid: true
  });
}