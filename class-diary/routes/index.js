const express = require('express');
const  router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res, next) => {
    res.render('login');
  });

  router.get('/painel', (req, res, next) => {
    res.render('painel');
  });

module.exports = router