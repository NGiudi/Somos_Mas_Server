const bcrypt = require('bcrypt');

const { NO_PASSWORD_ERROR, PASSWORD_ENCRYPT_SUCCESS, NO_PASSWORD_OR_HASH_ERROR, COMPARE_PASSWORD_SUCCESS, COMPARE_PASSWORD_ERROR } = require('../../const/responses');

const passwordEncrypt = async (password) => {
  if (!password) {
    return ({
      status: 204,
      message: NO_PASSWORD_ERROR
    });
  }

  const encrypt = await bcrypt.hash(password, 6);
  return ({
    status: 200,
    message: PASSWORD_ENCRYPT_SUCCESS,
    data: encrypt
  });
}

const passwordCompare = async( password, passwordEncrypt) => {
  if (!password || !passwordEncrypt) {
    return ({
      status: 204,
      message: NO_PASSWORD_OR_HASH_ERROR
    });
  }

  const passwordOk = await bcrypt.compare(password, passwordEncrypt);
  
  if (passwordOk) {
    return ({
      status: 200,
      message: COMPARE_PASSWORD_SUCCESS
    });
  } else {
    return ({
      status: 400,
      message: COMPARE_PASSWORD_ERROR
    });
  }
}

module.exports = { passwordEncrypt, passwordCompare };