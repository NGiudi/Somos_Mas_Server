const { ORGANIZATION_TABLE } = require('../const/tableNames');

module.exports = (Sequelize, type) => {
  return Sequelize.define(ORGANIZATION_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    phone: {
      type: type.STRING
    },
    adress: {
      type: type.STRING
    },
    city: {
      type: type.STRING
    },
    email: {
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