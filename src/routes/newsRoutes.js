const router = require('express').Router();

const getNews = require('../apiServices/WebPages/getNews'); 
const getOneNew = require('../queries/news/getOneNew');

router.get('/:id', async (req, res) => {
  const data = await getOneNew(req.params.id);
  return res.json(data);
});

router.post('/', getNews);

module.exports = router;