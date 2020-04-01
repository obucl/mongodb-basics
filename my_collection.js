const Connect = require('./mongo_connect')
Connect((db, dbo) => {
  let colName = 'interns'
  dbo.createCollection(colName, function(err, res) {
    if (err) throw err;
    console.log(`${colName} collection created`);
    db.close();
  });
})