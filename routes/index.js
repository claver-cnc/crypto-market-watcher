import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });

});

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '460839',
  key: 'e4fd3d985f7dd377ac04',
  secret: '8d98d74f9ae363229a5e',
  cluster: 'eu'

});

pusher.trigger('live_trades ', 'trade', {"message": "Test Ok"});



/*router.get('/currency', (req, res, next) => {
  request("https://www.bitstamp.net/api/v2/ticker/btcusd/", function(err,res,body) {
    console.log();

  });
  res.render('',);
});


https://pusher.com/docs/javascript_quick_start

https://www.bitstamp.net/websocket/

*/

export default router;
