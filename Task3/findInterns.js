const assert = require("assert");
const findfirstIntern = function(db, callback){
    // getting interns collection
    const collection = db.collection("myMovies");
    //find first documents in interns collection
    collection.findOne(function(err, docs){
        assert.equal(err, null);
        console.log("Found the the first document in interns collection");
        console.log(docs);
        callback(docs);
    });


    //find all movies with a rating of 7
    collection.find({rating: 7}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("Found the movies with a rating of 7");
        console.log(docs);
        callback(docs);
    });


    //find only movie titles
    collection.find({},
        { projection: {_id: 0, movie:1} }).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("Found only movie titles");
        console.log(docs);
        callback(docs);
    });

};

module.exports = findfirstIntern;