let express = require('express');
let router = express.Router();
let UsuarioController = require('../Controllers/UsuarioController');

router.get('/cadastrar', (req, res) => {
    res.render('user-create')
})
router.post('/create', async (req, res, next) =>{
    await UsuarioController.create(req, res, next)
})

module.exports = router;



