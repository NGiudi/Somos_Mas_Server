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

/* assosiations  */


/* models connections exports */
exports.Organization = organizationModel(sequelize, Sequelize);
exports.Testimonial = testimonialModel(sequelize, Sequelize);
exports.Activity = activityModel(sequelize, Sequelize);
exports.Category = categoryModel(sequelize, Sequelize);
exports.Contact = contactModel(sequelize, Sequelize);
exports.Member = memberModel(sequelize, Sequelize);
exports.Image = imageModel(sequelize, Sequelize);
exports.Role = roleModel(sequelize, Sequelize);
exports.User = userModel(sequelize, Sequelize);
exports.New = newModel(sequelize, Sequelize);