const router = require('express').Router();

/* import model. */
const { Activity } = require('../models/connectionsModel');

/* import queries. */
const createQuery = require('../queries/createQuery');
const updateQuery = require('../queries/updateQuery');
const deleteQuery = require('../queries/deleteQuery');
const getOneQuery = require('../queries/getOneQuery');
const getQuery = require('../queries/getQuery');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getOneQuery(Activity, id);
  return res.json(data);
});

router.get('/', async (req, res) => {
  const data = await getQuery(Activity);
  return res.json(data);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const status = await createQuery(Activity, body);
  return res.json(status);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const status = await updateQuery(Activity, id, req.body);
  return res.json(status);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const status = await deleteQuery(Activity, id);
  return res.json(status);
});

module.exports = router;