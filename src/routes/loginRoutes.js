const router = require('express').Router();
require('dotenv').config();

const { decryptToken } = require('../services/tokenService/tokenService');
const { loginService } = require('../apiServices/loginService');

router.post('/login', loginService);

router.get('/me', (req, res) => {
  const token = req.headers.authorization;
  const decrypt = decryptToken (token, process.env.TOKEN_KEY);
  res.json(decrypt);
});

module.exports = router;