const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'purrget';
const collection = 'search';

const client = new MongoClient(url);

client.connect((error) => {
  assert.equal(null, error);
  console.log('Connected to mongo db');
});

client.getCat = (catName) => {
  const db = client.db(dbName);
  const collecName = db.collection(collection);
  return new Promise((resolve, reject) => {
    collecName.findOne({ catName: catName}, ((error, doc) => {
      if (error) {
        reject(error);
      } else {
        resolve(res);
      }
    }));
  });
};



module.exports = client;