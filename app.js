//Carregando os módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
//const mongoose = require('mongoose');

//Configurações
    //body parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //handlebar
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');

    //mongoose
        //depois

     //public
     
     app.use(express.static(path.join(__dirname, 'public')));//encontra a pasta public sem erro


//Rotas
    app.use('/admin', admin)//o primeiro paramtro é só a rota que vai mostrar o grupo de rotas, como /admin/posts

    //usando get para uma rota principal
        // app.get('/', (req, res) => {
        //     res.send("main")
        // })
//outros

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log('servidor rodando porta 3000')
})