const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connection = require("./database/connection")
const Vagas = require('./vagas/Vagas');
const Candidatos = require('./candidatos/Candidatos');
const vagasrouter = require('./vagas/controlervagas');
const candidatosrouter = require('./candidatos/controlercandidatos');
const Sequelize = require('sequelize')
var Op  = Sequelize.Op;


//view engine
app.set('view engine', 'ejs');

//static ==> arquivos estatico
app.use(express.static('public'));

//body-parser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection
.authenticate()
.then(() =>{
    console.log('conectou com o banco');
}) .catch((err) => {
    console.log(err);
})


//rotas de outros arquivos
app.use('/', vagasrouter);
app.use('/', candidatosrouter);

// Rota principal

app.get('/', (req, res) => {
    var buscaform = req.query.busca
    var busca = '%'+buscaform+'%'
    console.log(busca)
    

    if(!buscaform) {

    Vagas.findAll({order: [
        ['createdAt', 'DESC']
    ]}).then(vagas => {
        res.render("index", {vagas:vagas});
    })

   } else {
        Vagas.findAll({

            where: {
                [Op.or]: [
                    { descricao: {
                        [Op.like]: busca
                    }},
                    { empresa: {
                        [Op.like]: busca
                    }}
                  ]
            }}).then(vagas => {
            res.render("index", {vagas:vagas});
        })
   }
})


app.get('/teste', (req,res)=> {
    var buscaform = req.query.busca
    var busca = buscaform
    console.log(busca);
    res.send('eeeeeeeeeeeeeeeeeeeeeeee')
});

app.listen(5000, () => {
    console.log("Tô rodando aqui ó");
});