const router = require('express').Router();

const getNews = require('../apiServices/WebPages/getNews'); 

router.post('/', getNews);

module.exports = router;