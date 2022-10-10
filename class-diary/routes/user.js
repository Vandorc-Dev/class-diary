const express = require('express');
const  router = express.Router();
const UsuarioController = require('../Controllers/UsuarioController')

  
  //Cadastrar novo usuário
router.get('/cadastrar', (req, res) => {
    res.render('user-create')
})
router.post('/create', async (req, res, next) =>{
    await UsuarioController.create(req, res, next)
})

router.get('/perfil', async (req, res) =>{

})


//Exibir perfil do usuário
router.get('/perfil/:id_user', UsuarioController.perfil)

module.exports = router;