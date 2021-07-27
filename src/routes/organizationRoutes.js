const router = require('express').Router();

const { Organization } = require('../models/connectionsModel');
const getOneQuery = require('../queries/getOneQuery');

router.get('/', async (req, res) => {
  const organization = await getOneQuery(Organization, 1);
  return res.json(organization);
});

module.exports = router;