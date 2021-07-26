require('dotenv').config();

/* import queries. */
const getOneUserByEmailQuery = require('../queries/getOneUserByEmail');

/*import services */
const { passwordCompare } = require('../services/passwordService/passwordService');
const { encryptToken } = require('../services/tokenService/tokenService');

/*import constants */
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
    
  const user = await getOneUserByEmailQuery(email);
  
  if (user.status === 200) {
    const compare = await passwordCompare(password, user.data.password);
    
    // success login.
    if (compare.status === 200){
      const token = await encryptToken(user.data.dataValues.email, process.env.TOKEN_KEY);
      
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

module.exports = { loginService };