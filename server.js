var express = require('express'),
http = require('http'),
port = process.env.PORT || 3000;

start();

function start(){
    var app = express();
    var server = http.Server(app);

    app.use('/products', (req, res, next) => {
        res.status(200).send();
    })

    server.listen(port, process.env.IP, () => {
        console.log("RESTFUL API STARTED ON " + port);
    });
}