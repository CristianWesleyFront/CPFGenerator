const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

const gCpf = require('./public/js/geraCpf.js');
const validCpf = require('./public/js/validaCpf.js');

const app = express();

app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(express.static(__dirname+'/public'));

app.post('/validaCPF',function(req,res){
    let cpf = req.body.cpf;
    let valido = validCpf.validarCpf(cpf);
    res.render('validaCpf',{
        valido: valido
    }) 
});

app.post('/geraCPF',function(req,res){
    let newCpf = gCpf.cpf();
    res.render('geraCpf',{
        cpf: newCpf
    });
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
});


app.listen(3000,function(){
    console.log('Server stated!');
});