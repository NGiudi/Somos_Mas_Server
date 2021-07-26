const router = require('express').Router();

const getHomeInfo = require('../apiServices/WebPages/getHomeInfo');

router.get('/', getHomeInfo);

module.exports = router; 