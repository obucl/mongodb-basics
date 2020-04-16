const Connect = require('./mongo_connect')

Connect((db, dbo) => {
  dbo.collection("Obu_cl").findOne({}, (err, res) => {
    if (err) throw err;
    console.log('First document in the collection :')
    console.log(res);
    db.close();
  })
})

Connect((db, dbo) => {
  let query = { rating: 7 };
  dbo.collection("Obu_cl").find(query).toArray((err, res) => {
    if (err) throw err;
    console.log('Movies with a rating of 7 :')
    console.log(res);
    db.close();
  })
})

Connect((db, dbo) => {
  let query = { rating: 7 };
  dbo.collection("Obu_cl").find({}, { projection: { _id: 0, year: 0, rating: 0 } }).toArray((err, res) => {
    if (err) throw err;
    console.log('Movie titles :')
    console.log(res);
    db.close();
  })
})