var express = require('express');
var router = express.Router();
var client = require('../services/elasticsearch.js');

/* GET populate page */
router.get('/', function(req, res, next) {
  res.render('populate.html');
 });


/* POST chunks */
router.post('/', function(req, res, next) {
  var chunk = req.body;

  console.log(chunk);
  
  client.index({
    index: 'chunks',
    body: chunk
  }, function(err, resp, status) {
     console.log(resp);
     res.render('populate.html');
  } )
});

module.exports = router;
