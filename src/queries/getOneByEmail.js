const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR, INVALID_MAIL_OR_PASSWORD } = require('../const/responses');

const getOneByEmailQuery = async (model, email) => {
  try {
    const data = await model.findOne ({
      where: { email },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
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

module.exports = getOneByEmailQuery; 