const router = require('express').Router();

const { Member } = require('../models/connectionsModel');
const getQuery = require('../queries/getQuery');

router.get('/', async (req, res) => {
  const members = await getQuery(Member);
  return res.json(members);
});

module.exports = router;