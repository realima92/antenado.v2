module.exports = function(){
    console.log("Servidor sendo carregado...")
    var app = require('express')();
    app.set('view engine', 'ejs');
    app.set('views','./app/views');
    return app;
}