const { ORGANIZATION_TABLE } = require('../const/tableNames');

module.exports = (Sequelize, type) => {
  return Sequelize.define(ORGANIZATION_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING
    },
    logoURL: {
      type: type.STRING
    },
    phone: {
      type: type.STRING
    },
    adress: {
      type: type.STRING
    },
    facebookURL: {
      type: type.STRING
    },
    instagramURL: {
      type: type.STRING
    },
    linkedinURL: {
      type: type.STRING
    },
  },
  {
    paranoid: true
  });
}