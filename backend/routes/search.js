var express = require('express');
var router = express.Router();
var client = require('../services/elasticsearch.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var de = req.query.de;
  console.log(de);
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
    console.log(result);
    var hits = result.body.hits.hits;

    console.log(hits);
    res.render('search.html', { results: hits });
  });
});

module.exports = router;
