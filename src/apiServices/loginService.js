require('dotenv').config();

/* import model. */
const { User } = require('../models/connectionsModel');

/* imports queries. */
const getOneByEmailQuery = require('../queries/getOneByEmail');

/*imports services */
const { passwordCompare } = require('../services/passwordService/passwordService');
const { encryptToken } = require('../services/tokenService/tokenService');

/*imports constants*/
const { DB_REQUEST_COMPLETED, INVALID_MAIL_OR_PASSWORD } = require('../const/responses');

const loginService = async (req, res) => {
  const { email, password } = req.body;
  
  // no data received.
  if (!email || !password) {
    return res.json({
      status: 204,
      message: INVALID_MAIL_OR_PASSWORD
    });
  }
    
  const user = await getOneByEmailQuery(User, email);
  
  if (user.status === 200) {
    const compare = await passwordCompare(password, user.data.password);
    
    // success login.
    if (compare.status === 200){
      delete user.data.dataValues.password;
      
      const token = await encryptToken(user.data.dataValues, process.env.TOKEN_KEY);
      
      return res.json({
        status: 200,
        message: DB_REQUEST_COMPLETED,
        data: token.data
      });
    } else {
      return res.json(compare);
    }
  }
  return res.json(user);
}

module.exports = { loginService }