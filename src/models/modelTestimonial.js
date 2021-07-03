const { TESTIMONIALS_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(TESTIMONIALS_TABLE, {
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    /* post data */
    title: {
      type: type.STRING
    },
    content: {
      type: type.TEXT
    },
    ranking: {
      type: type.INTEGER
    },
    /* the user data is obtained from the association. */
  },
  {
    paranoid: true
  })
}  