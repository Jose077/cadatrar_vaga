var express = require('express');
var router = express.Router();
const Vagas = require('../vagas/Vagas');


router.get('/view/vagas', (req,res) => {
    res.render('editvagas');
}); 


router.post('/cadastroVagas', (req,res) => {
    var nome = req.body.nome
    var descricao = req.body.descricao;
    console.log(nome,descricao)

     Vagas.create({
        empresa: nome,
        descricao: descricao
    })
    

    res.redirect('/')
})


module.exports = router;