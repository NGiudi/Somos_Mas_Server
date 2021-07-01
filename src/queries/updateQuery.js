const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR } = require('../const/responses');

const getQuery = async (model, id, payload) => {
  try {
    const data = await model.update(payload, { where: { id } });
    
    /* no content to update. */
    if (data[0] === 0){
      return ({
        status: 404,
        message: DB_REQUEST_COMPLETED
      });
    }

    /* update success. */
    return ({
      status: 200,
      message: DB_REQUEST_COMPLETED
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