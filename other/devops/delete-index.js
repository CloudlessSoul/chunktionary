const dotenv = require('dotenv');
dotenv.config();
var client = require('../../services/elasticsearch.js');

console.log("Deleting index");

client.indices.delete({  
  index: 'chunks'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
});