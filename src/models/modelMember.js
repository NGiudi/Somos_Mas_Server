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
    job: {
      type: type.STRING
    },
    linkedinURL:{
      type: type.STRING
    },
    imageURL: {
      type: type.STRING
    },
    imageAlt: {
      type: type.STRING
    }
  },
  {
    paranoid: true
  });
}