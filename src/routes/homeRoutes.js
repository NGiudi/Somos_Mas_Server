const router = require('express').Router();

const getHomeInfo = require('../apiServices/getHomeInfo');

router.get('/', getHomeInfo);

module.exports = router; 