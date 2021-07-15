const router = require('express').Router();

const { loginService } = require('../apiServices/loginService');

router.post('/login', loginService);
module.exports = router;