const Connect = require('./mongo_connect')


Connect((db, dbo) => {
  dbo.createCollection('myMovies', function(err, res) {
    if (err) throw err;

    let myMovies = [
      {
        movie: "The Banker",
        year: "2020",
        rating: 8
      },
      {
        movie: "Bad Boys",
        year: "2020",
        rating: 7
      },
      {
        movie: "The Hunt",
        year: "2020",
        rating: 7
      },
      {
        movie: "BloodShot",
        year: "2020",
        rating: 7.5
      },
      {
        movie: "First Cow",
        year: "2020",
        rating: 6.5
      }
    ];
    dbo.collection("Obu_cl").insertMany(myMovies, (err, res) => {
      if (err) throw err;
      console.log(res)
      db.close();
    })
  });
})
