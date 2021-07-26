require('dotenv').config();

/* import queries. */
const getOneUserByEmailQuery = require('../queries/getOneUserByEmail');
const { User } = require('../models/connectionsModel');
const createQuery = require('../queries/createQuery');

/*import services */
const { passwordEncrypt } = require('../services/passwordService/passwordService');
const { encryptToken } = require('../services/tokenService/tokenService');

/*import constants*/
const { DB_REQUEST_COMPLETED, USER_EXIST } = require('../const/responses');
const { USER_ID } = require('../const/numbers');

const registerService = async (req, res) => {
  const { body } = req;
  
  const existUser = await getOneUserByEmailQuery(body.email);

  if (existUser.status === 204) {
    const encrypt = await passwordEncrypt(body.password);
    body.password = encrypt.data;
    body.roleId = USER_ID;

    const data = await createQuery(User, body);
    
    if (data.status === 200){
      const token = await encryptToken(body.email, process.env.TOKEN_KEY);
      return res.json({
        status: 200,
        message: DB_REQUEST_COMPLETED,
        data: token.data
      });
    }
    return res.json(data);
  }
  else if (existUser.status === 200) {
    return res.json({
      status: 400,
      message: USER_EXIST
    });
  }
  return res.json(existUser);
}

module.exports = { registerService };