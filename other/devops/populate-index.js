const dotenv = require('dotenv');
dotenv.config();
var client = require('../../services/elasticsearch.js');
var bulk = require("../../chunks.json");

console.log("Populating index");

client.bulk({
    maxRetries: 5,
    index: 'chunks',
    body: bulk
}, function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
    }
})