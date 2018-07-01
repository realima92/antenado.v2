module.exports = function(app){
    app.get("/", function(req,res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'antenadoDB'
        });
        //consulta
        
        connection.query('select * from livros', function(err, results){
            res.send(results);
        });

        connection.end();

        res.render("index");
    });
}