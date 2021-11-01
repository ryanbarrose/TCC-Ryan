const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Server rodando na porta: http://localhost:${port}');
});

//Criando o usuario
//const { Armas } = require('./app/models');
const Armas = require("./NodeSequelize/app/models/Armas.js")
//Armas.create({ nome: 'classic', valor: '0', municao_total: '12', municao_pente:12, sistema_funcionamento_pri:2,sistema_funcionamento_sec:3, rate:7, tiros_rajada:3, penetracao:1, dmax_cab:78, dmed_cab:null, dmin_cab:66, dmax_cop:26, dmed_cop:null, dmin_cop:22, dmax_per:22, dmed_per:null, dmin_per:18, distmax_dmax:30, distmax_dmed:null, distmax_dmin:50 });


//Criando o Crud
app.get('/armas', (req, res) => {
  const resultados = Armas.findAll({
    attributes: ['municao_to  tal']
  });
res.send(resultados)

}); //Listar todos
app.get('/armas/:id', (req, res) => {}); //Buscar
app.put('/armas/:id', (req, res) => {}); //Editar
app.delete('/armas/:id', (req, res) => {}); //Deletar

app.listen(4000);

