const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR } = require('../../const/responses');

const { Category, New } = require('../../models/connectionsModel');

const getOneQuery = async (id) => {
  try {
    const data = await New.findOne ({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: {model: Category, attributes: ['name']},
      where: { id }
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