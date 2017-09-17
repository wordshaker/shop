var express = require('express'),
http = require('http'),
port = process.env.PORT || 3000;

start();

function start(){
    var app = express();
    var server = http.Server(app);
    var products = [{
            name:"Isla Bra",
            sku:"LN332",
            price:29.00
        },{
            name:"Nordic Rose Bra",
            sku:"LN336",
            price:30.00
        },{
            name:"Zentangle Bra",
            sku:"FY240",
            price:34.00
        },{
            name:"Clara Bra",
            sku:"PN112",
            price:32.00
        },{
            name:"Deco Delight Bra",
            sku:"FY158",
            price:34.00
        },{
            name:"Sienna Bra",
            sku:"LN328",
            price:32.00
        }];

    app.use('/products', (req, res, next) => {
        res.status(200).send(products);
    })

    server.listen(port, process.env.IP, () => {
        console.log("RESTFUL API STARTED ON " + port);
    });
}