var express = require('express'),
http = require('http'),
bodyParser = require('body-parser'),
port = process.env.PORT || 3000;

start();

function start(){
    var app = express();
    app.use(bodyParser.json());

    var server = http.Server(app);
    var router = express.Router();

    var products = [{
            name:'Isla Bra',
            sku:'LN332',
            price:29.00
        },{
            name:'Nordic Rose Bra',
            sku:'LN336',
            price:30.00
        },{
            name:'Zentangle Bra',
            sku:'FY240',
            price:34.00
        },{
            name:'Clara Bra',
            sku:'PN112',
            price:32.00
        },{
            name:'Deco Delight Bra',
            sku:'FY158',
            price:34.00
        },{
            name:'Sienna Bra',
            sku:'LN328',
            price:32.00
        }];
    router.get('/products', (req, res) => {
        res.json(products);
    });

    var bag = [];
    router.get('/bag', (req, res) => {
        res.json(bag);
    });

    router.post('/bag', (req, res) => {
        var item = bag.find((e) => productHasSku(e, req.body.sku));

        if (item){
            item.quantity += req.body.quantity;
        } else {
            bag.push(req.body);
        }
        
        res.send(bag);
    });

    app.use('/api', router);

    server.listen(port, process.env.IP, () => {
        console.log('RESTFUL API STARTED ON ' + port);
    });
}

function productHasSku(product, sku){
    return product.sku === sku;
}