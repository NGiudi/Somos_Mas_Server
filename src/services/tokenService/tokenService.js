const jwt = require('jsonwebtoken');

const { NO_DATA_ENCRYPT_ERROR, CREATE_TOKEN_SUCCESS, INVALID_TOKEN_ERROR, DECRYPT_TOKEN_SUCCESS } = require('../../const/responses');

const encryptToken = (payload, key) => {
  if (Object.keys(payload).length === 0) {
    /* no data received.*/
    return ({
      status: 204,
      message: NO_DATA_ENCRYPT_ERROR              
    });
  }

  const token = jwt.sign(payload, key);
  /* success token create*/
  return({
    status: 200,
    message: CREATE_TOKEN_SUCCESS,
    data: token
  });
}

const decryptToken = (token) => {
  return jwt.verify (token, key , (err, decoded) => {
    if (err) {
      /* decrypt error. */
      return ({
        status: 400,
        message: INVALID_TOKEN_ERROR
      });
    }
    
    if (decoded) {
      /* iat field deleted to the object. */
      delete decoded.iat;
      /* success decrypt. */
      return ({
        status: 200,
        message: DECRYPT_TOKEN_SUCCESS,
        data: decoded
      })
    }
  });
}

module.exports = { encryptToken, decryptToken };