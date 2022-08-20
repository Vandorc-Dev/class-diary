let express = require('express');
let router = express.Router();

router.get('/cadastrar', (req, res) => {
    res.render('user-create')
})

module.exports = router;