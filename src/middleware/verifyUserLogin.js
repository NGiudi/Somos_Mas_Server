const { NO_TOKEN_ERROR, USER_LOGIN_ERROR } = require('../const/responses');

const verifyUserLogin = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    res.json({
      status: 400,
      message: NO_TOKEN_ERROR
    });
  }
  else if (token === "user") {
    next();
  } else {
    res.json({
      status: 401,
      message: USER_LOGIN_ERROR
    });
  }
}

module.exports = verifyUserLogin;