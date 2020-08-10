const dotenv = require('dotenv');
dotenv.config();
var client = require('../../services/elasticsearch.js');

module.exports = function() {
    this.createIndex = function(callback) {
        console.log("Create Index");
        client.indices.create({  
            index: 'chunks'
        },function(err,resp,status) {
            if(err) {
                console.log(err);
            }
            else {
                console.log("create",resp);
                callback();
            }
        });
    }

    this.deleteIndex = function(callback) {
        console.log("Delete Index");
        client.indices.delete({  
            index: 'chunks'
            },function(err,resp,status) {
            if(err) {
                console.log(err);
            }
            callback();
        });
    }

    this.populateIndex = function(callback) {
        console.log("Populate Index");
        var chunks = require("../../chunks.json");
        var bulk = [];

        for(var i = 0; i < chunks.length; i++) {
            bulk.push({"index":{"_id":i}});
            bulk.push(chunks[0]);
        }

        console.log(bulk);
        client.bulk({
            index: 'chunks',
            body: bulk
        }, function(err,resp,status) {
            const util = require('util');
            if (err) {
                console.log(util.inspect(err, {showHidden: false, depth: null}))
            }
            else {
                callback(resp.items);
            }
        });
    }
}