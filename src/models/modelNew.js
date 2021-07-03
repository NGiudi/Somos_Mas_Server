const { NEWS_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(NEWS_TABLE, {
    id: {
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
    /* the category is obtained from the association. */
  },
  {
    paranoid: true
  });
}