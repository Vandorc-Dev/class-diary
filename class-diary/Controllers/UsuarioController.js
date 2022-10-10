const { Usuario } = require('../models');

module.exports = {
    create: async (req, res,next) => {
        try {
            await Usuario.create(req.body)
        }catch(error){
            console.log("ERRO: ", JSON.stringify(error?.parent?.sqlMessage));
        }
        res.redirect("/")
    },
    perfil: async (req, res, next) =>{
        let { id_user } = req.params;
        let userPerfil = await Usuario.findOne({
            where: {
                id: id_user
            }
        })
        return res.render('user-perfil', { userPerfil })
    }
}

