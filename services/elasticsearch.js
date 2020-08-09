const { Client } = require('@elastic/elasticsearch');
const client = new Client( { 
  cloud: {
    id: process.env.ELASTICSEARCH_CLOUD_ID,
  },
  auth: {
    username: process.env.ELASTICSEARCH_CLOUD_AUTH_USERNAME,
    password: process.env.ELASTICSEARCH_CLOUD_AUTH_PASSWORD
  }});

module.exports = client;