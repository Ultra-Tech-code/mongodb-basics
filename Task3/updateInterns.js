const assert = require("assert");
const updatedInterns = function(db, callback){
    // getting the interns collection
    const collection = db.collection("myMovies");
    //updating a document in interns collection
    let newMovie = { $set: { movie: "Miracle In Cell No. 7", year: 2013, rating: 8.2} }
    collection.updateOne({ movie: "The Banker"}, newMovie, function(err,docs){
        if(err) throw err;
        console.log( " Miracle In Cell No. 7 updated");
        callback(docs);
    });

    collection.find({}).toArray(function(err, docs) {
        // assert.equal(err, null);
        console.log("Found records");
        console.log(docs);
        callback(docs);
    });
};

module.exports = updatedInterns;