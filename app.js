var app = require('./config/express')();
var rotas = require('./app/routes')(app);

app.listen(3000, function(){
    console.log("servidor iniciado");
});