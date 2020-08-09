var client = require('../backend/services/elasticsearch.js');

client.indices.delete({  
  index: 'chunks'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});