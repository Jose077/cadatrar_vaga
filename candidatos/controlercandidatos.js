const express = require('express');
const router = express.Router();
const Vagas= require('../vagas/Vagas');
const Candidatos = require('./Candidatos')


router.get('/view/candidatos/:id', (req,res) => {
    var id = req.params.id;
    Vagas.findOne( {
        where: {
            id: id
        }
    }).then(vaga => {
        res.render('editcandidatos', {vaga:vaga});
    })
    
}); 


router.post('/cadastroCandidatos/:id', (req,res) => {
    var nome = req.body.nome
    var email = req.body.email;
    var id = req.params.id


     Candidatos.create({
        nome: nome,
        email: email,
        vagaId: id
    });
    res.redirect('/')
})

router.get('/cadastrados/:id', (req,res) => {
    var id = req.params.id;
    Candidatos.findAll({
        where: {
            vagaId: id
        }
    }).then(cadastrados => {

        res.render('cadastrados', {cadastrados:cadastrados});
    })
})
    


module.exports = router;