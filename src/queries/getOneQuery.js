const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR } = require('../const/responses');

const getOneQuery = async (model, id) => {
  try {
    const data = await model.findOne ({
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
    
    /* no content. */
    if (!data) {
      return ({
        status: 204,
        message: DB_REQUEST_COMPLETED 
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

module.exports = getOneQuery; 