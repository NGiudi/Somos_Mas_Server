const { CONTACTS_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(CONTACTS_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING
    },
    phone: {
      type: type.STRING
    },
    email: {
      type: type.STRING
    },
    message: {
      type: type.TEXT
    },
  },
  {
    paranoid: true
  });
}