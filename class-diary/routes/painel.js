let express = require('express');
let router = express.Router();

/* GET Dashboard. */
router.get('/', (req, res, next) => {
  res.render('painel');
});

module.exports = router;
