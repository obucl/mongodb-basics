var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports = function connect(callback) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    let dbName = 'Obu_cl'
    var dbo = db.db(dbName);
    callback(db, dbo)
  });
}