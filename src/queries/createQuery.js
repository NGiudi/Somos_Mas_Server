const { DB_REQUEST_COMPLETED, DB_REQUEST_ERROR } = require('../const/responses')

const createQuery = async (model, payload) => {
	try{
		await model.create(payload);
		/* success create */
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

module.exports = createQuery;