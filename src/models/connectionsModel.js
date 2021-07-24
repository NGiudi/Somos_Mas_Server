const sequelize = require('../config/database');
const Sequelize = require('sequelize');

/* import models. */
const organizationModel = require('./modelOrganization');
const testimonialModel = require('./modelTestimonial');
const activityModel = require('./modelActivity');
const categoryModel = require('./modelCategory');
const contactModel = require('./modelContacts');
const memberModel = require('./modelMember');
const imageModel = require('./modelImage');
const roleModel = require('./modelRole');
const userModel = require('./modelUser');
const newModel = require('./modelNew');

/* models connections */
const Organization = organizationModel(sequelize, Sequelize);
const Testimonial = testimonialModel(sequelize, Sequelize);
const Activity = activityModel(sequelize, Sequelize);
const Category = categoryModel(sequelize, Sequelize);
const Contact = contactModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const Image = imageModel(sequelize, Sequelize);
const Role = roleModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);
const New = newModel(sequelize, Sequelize);

/* assosiations  */
User.belongsTo(Role, {foreignKey: 'roleId'});
Role.hasMany(User);

New.belongsTo(Category, {foreignKey: 'categoryId'});
Category.hasMany(New);

/* models connections exports */
module.exports = {
  Organization,
  Testimonial,
  Activity,
  Category,
  Contact,
  Member,
  Image,
  User, 
  Role,
  New
};