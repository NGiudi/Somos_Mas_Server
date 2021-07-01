const router = require('express').Router();

// import model:
const User = require('../models/modelsConnections');

// imports query.
const createQuery = require('../queries/createQuery');
const updateQuery = require('../queries/updateQuery');
const deleteQuery = require('../queries/deleteQuery');
const getOneQuery = require('../queries/getOneQuery');
const getQuery = require('../queries/getQuery');

const { encryptToken, decryptToken} = require('../services/tokenService/tokenService');

const verifyUserLogin = require('../middleware/verifyUserLogin');

router.get('/testGetOne', async (req, res) => {
  const users = await getOneQuery(User, 2);
  res.json({
    status: users.status,
    message: users.message,
    data: users.data
  });
});

router.get('/testGet', verifyUserLogin, async (req, res) => {
  const users = await getQuery (User);
  res.json({
    status: users.status,
    message: users.message,
    data: users.data
  });
});

router.get('/testCreate', async (req, res) => {
  const users = await createQuery(User, {name: "Agustina"});
  res.json({
    status: users.status,
    message: users.message
  });
});

router.get('/testUpdate', async (req, res) => {
  const users = await updateQuery(User, 1, {name: "Nicola"});
  res.json({
    status: users.status,
    message: users.message
  });
});

router.get('/testDelete', async (req, res) => {
  const users = await deleteQuery(User, 1);
  res.json({
    status: users.status,
    message: users.message
  });
});

router.get('/encryptData', (req, res) => {
  const token = encryptToken(req.body);
  res.json(token);
});

router.get('/decryptData', (req, res) => {
  const user = decryptToken(req.headers.authorization);
  res.json(user);
});


module.exports = router;