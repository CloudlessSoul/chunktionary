var client = require('../../services/elasticsearch.js');

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