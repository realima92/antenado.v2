module.exports = function(app){
    app.get("/", function(req,res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            port: '3306',
            password: ''
        });
        //consulta
        connection.connect(function(err){
            if(err) throw err;
            console.log("Banco de dados conectado")
        });

        connection.query('SELECT * FROM nodeschema.livros', function(err, results){
            res.render('index', {lista:results});
        });

        connection.end();
    });
}