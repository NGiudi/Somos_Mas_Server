const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR, INVALID_MAIL_OR_PASSWORD } = require('../const/responses');

const { Role, User } = require('../models/connectionsModel');

const getOneUserByEmailQuery = async (email) => {
  try {
    const data = await User.findOne ({
      where: { email },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: {model: Role, attributes: ['role']}
    });
    
    /* no content. */
    if (!data) {
      return ({
        status: 204,
        message: INVALID_MAIL_OR_PASSWORD 
      });
    }

    /* get success */
    return ({
      status: 200,
      message: DB_REQUEST_COMPLETED,
      data: data
    });
    
  } catch {
    /* comunication error */
    return ({
      status: 500,
      message: DB_REQUEST_ERROR
    });
  }
}

module.exports = getOneUserByEmailQuery; 