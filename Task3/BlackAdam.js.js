const mongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const createInterns = require('./interns')
const findfirstIntern = require("./findInterns");
const updatedInterns = require("./updateInterns");

//connection url
const url = "mongodb://localhost:27017"
//Database Name
const dbName = "BlackAdam";
//  Creating a new MongoClient
const client = new mongoClient(url);
client.connect(function(err){
    assert.equal(null, err);
    console.log("Database Coonected successfully");

    const db = client.db(dbName);

    updatedInterns(db, function(){
        client.close;
    });
});