const { IMAGES_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(IMAGES_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: type.STRING
    },
    description: {
      type: type.STRING
    },
    imageURL: {
      type: type.STRING
    }    
  },
  {
    paranoid: true
  });
}