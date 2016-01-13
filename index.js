var BitfinexWS = require ('bitfinex-api-node').WS;
var influx = require('influx');

var client = influx({

    host : 'localhost',
    port : 8086,
    protocol : 'http',
    username : 'dbuser',
    password : 'my_password',
    database : 'bitfinex_trade_btcusd'

});

var bws = new BitfinexWS();

bws.on('open', function() {
    bws.subscribeTrades('BTCUSD');
});

bws.on('trade', function (pair, trade) {
    console.log('Trade:', trade);
});

bws.on('orderbook', function (pair, book) {
    console.log('Order book:', book);
});

bws.on('ticker', function (pair, ticker) {
    console.log('Ticker:', ticker);
});

bws.on('subscribed', function (data) {
    console.log('New subscription', data);
});

bws.on('error', console.error);
