const dotenv = require('dotenv');
dotenv.config();
var client = require('../../services/elasticsearch.js');

console.log("Creating index");

client.indices.create({  
  index: 'chunks'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});

