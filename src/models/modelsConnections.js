const sequelize = require('../config/database');
const Sequelize = require('sequelize');

// import models.
const userModel = require('./userModel');

const User = userModel(sequelize, Sequelize);

module.exports = User;