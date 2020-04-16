const Connect = require('./mongo_connect')

Connect((db, dbo) => {
  let queryToChange = { movie: "The Banker" };
  let newValues = { $set: {movie: "The Room", year: "2019", rating: 7.5 } };
  dbo.collection("Obu_cl").updateOne(queryToChange, newValues, (err, res) => {
    if (err) throw err;
    console.log('Updated Collection :')
    db.close();
  })
})

Connect((db, dbo) => {
  dbo.collection("Obu_cl").findOne({}, (err, res) => {
    if (err) throw err;
    console.log(res);
    db.close();
  })
})