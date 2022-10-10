const { Aluno } = require('../models');

module.exports = {
    createAluno: async(req, res) =>{
        try{
            await Aluno.create(req.body);
        }catch(error){
            console.log("ERRO: ", JSON.stringify(error?.parent?.sqlMessage));
        }
    res.redirect("/")
    },
    listarAluno: async (req, res, next) =>{
        let { id_aluno } = req.params;
        let alunos = await Aluno.findOne({
            where: {
                id_aluno: id_aluno
            }
        })
        return res.render('user-perfil', { alunos })
    }
}

