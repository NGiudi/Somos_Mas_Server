const router = require('express').Router();
require('dotenv').config();

const { decryptToken } = require('../services/tokenService/tokenService');
const getOneUserByEmailQuery = require('../queries/getOneUserByEmail');
const { registerService } = require('../apiServices/registerService');
const { loginService } = require('../apiServices/loginService');

router.post('/login', loginService);

router.post('/register', registerService);

router.get('/me', async (req, res) => {
  const token = req.headers.authorization;
  const { data } = decryptToken (token, process.env.TOKEN_KEY);
  const user = await getOneUserByEmailQuery(data);
  res.json(user);
});

module.exports = router;