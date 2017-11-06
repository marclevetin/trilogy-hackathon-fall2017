var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource'); 

  res.json([ 
    { id: 1, name: 'Mickey Mouse', email: 'mickey@mouse.com', slack: '@mickey' }, 
    { id: 2, name: 'Minnie Mouse', email: 'minnie@mouse.com', slack: '@minnie'},
    { id: 3, name: 'Pluto Dog', email: 'pluto@dog.com', slack: '@pluto'},
    { id: 4, name: 'Donald Duck', email: 'donald@duck.com', slack: '@donald'}
  ]);
});

module.exports = router;