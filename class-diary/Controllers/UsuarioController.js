const { Usuario } = require('../models');

module.exports = {
    create: async (req, res,next) => {
        try {
            await Usuario.create(req.body)
        }catch(error){
            console.log("ERRO: ", JSON.stringify(error?.parent?.sqlMessage));
        }
        res.redirect("/")
    }
}