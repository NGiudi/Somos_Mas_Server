const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR } = require('../../const/responses');

const { Category, New } = require('../../models/connectionsModel');

const getOnePageNews = async (page, rowsPerPage) => {
  const offset = (page - 1) * rowsPerPage;
  
  try {
    const data = await New.findAndCountAll ({
      attributes: { exclude: ['updatedAt', 'deletedAt'] },
      include: {model: Category, attributes: ['name']},
      offset: offset,
      limit: rowsPerPage
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

module.exports = getOnePageNews;