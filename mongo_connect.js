var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports = function connect(callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbName = "Obu_cl"
    var dbo = db.db(dbName);
    console.log(`Database created by ${dbName}`);
    callback(db, dbo)
  });
}