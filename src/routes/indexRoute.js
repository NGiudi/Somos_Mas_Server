const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send ("Welcome to Somos Más Server");
});

module.exports = router;