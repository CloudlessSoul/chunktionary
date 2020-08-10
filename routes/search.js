var express = require('express');
var router = express.Router();
var client = require('../services/elasticsearch.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var de = req.query.de;
  if(!de) de = "";
  client.search({
    index: 'chunks',
    body: {
      query: {
        match: { 'de' : { query: de, operator: "and"} }
      }
    }
  }, function(err, result) {
    if (err) console.log(err);
    var hits = result.body.hits.hits;

    const util = require('util');
    console.log(util.inspect(hits, {showHidden: false, depth: null}))
    
    res.render('search.html', { results: hits });
  });
});

module.exports = router;
