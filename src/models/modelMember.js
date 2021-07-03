const { MEMBERS_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(MEMBERS_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING
    },
    content: {
      type: type.TEXT
    },
    imageURL: {
      type: type.STRING
    }
  },
  {
    paranoid: true
  });
}