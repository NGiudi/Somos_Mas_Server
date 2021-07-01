const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR } = require('../const/responses');

const getQuery = async (model, id) => {
  try {
    const data = await model.destroy({
      where: { id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
    
    /* no content to delete. */
    if (data === 0) {
      return ({
        status: 204,
        message: DB_REQUEST_COMPLETED,
      });
    }

    /* delete success. */
    return ({
      status: 200,
      message: DB_REQUEST_COMPLETED,
    });

  } catch {
    /* comunication error */
    return ({
      status: 500,
      message: DB_REQUEST_ERROR
    });
  }
}

module.exports = getQuery;