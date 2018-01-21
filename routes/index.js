import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });




});


/*router.get('/currency', (req, res, next) => {
  request("https://www.bitstamp.net/api/v2/ticker/btcusd/", function(err,res,body) {
    var coinList = JSON.parse(body);
    console.log(coinList);

  });
  res.render('currency',{coinList});
});

router.get('/test', (req, res, next) => {
  var coins = request({
    uri: 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
  }).pipe(res);
  console.log(coins)
}); */

router.get('/currency', (req, res, next) => {
  request("https://api.coinmarketcap.com/v1/ticker/?limit=10", function(err,res,body) {
    var coinList = JSON.parse(body);
    console.log(coinList);

  });
  res.render('currency',{coinList});
});

export default router;
