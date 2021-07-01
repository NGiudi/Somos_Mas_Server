const { USERS_TABLE } = require('../const/tableNames');

module.exports = (sequelize, type) => {
  return sequelize.define(USERS_TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    nickname: {
      type: type.STRING
    },
    name: {
      type: type.STRING,
      notNull: true,
    },
    lastname: {
      type: type.STRING
    },
    email: { 
      type: type.STRING
    },
    password: {
      type: type.STRING,
    }
  },
  {
    paranoid: true
  });
}
