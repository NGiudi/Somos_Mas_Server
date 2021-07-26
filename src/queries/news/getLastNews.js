const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR } = require('../../const/responses');

const { Category, New } = require('../../models/connectionsModel');

const getLastNews = async () => {
  try {
    const data = await New.findAll({
      attributes: { exclude: ['updatedAt', 'deletedAt'] },
      include: {model: Category, attributes: ['name']},
      order: [['createdAt', 'DESC']],
      limit: 4
    });
    
    /* no content. */
    if (data.length === 0) {
      return ({ 
        status: 204,
        message: DB_REQUEST_COMPLETED
      });
    }

    /* get success. */
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

module.exports = getLastNews;