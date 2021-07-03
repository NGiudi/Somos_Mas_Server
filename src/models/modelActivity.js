const { ACTIVITIES_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(ACTIVITIES_TABLE, {
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: type.STRING
    },
    content: {
      type: type.TEXT('long')
    },
    imageURL: {
      type: type.STRING
    }    
  },
  {
    paranoid: true
  });
}