const MongoClient = require('mongodb').MongoClient;
//const MONGO_URL = 'mongodb://localhost:27017/testdb'
const MONGO_URL ='mongodb+srv://oktubre77:pochoclo@cluster0.jgskm.mongodb.net/TV?retryWrites=true&w=majority'

    MongoClient.connect(MONGO_URL,{ useUnifiedTopology: true }, (err, db) => {  
    const dbo = db.db("TV");  
    var r = "";
    dbo.collection("series").insertMany(
        [{
          id:123456,
          titulo: 'Stranger Things',
          year: 2016,
          protagosnistas:"Gaten Matarazzo",
          pais:"EEUU"
        },
        {
            id:123457,
            titulo: 'Black Mirror',
            year: 2011,
            protagosnistas:"Bryce Dallas Howard",
            pais:"EEUU"
        },
        {
            id:123458,
            titulo: '13 Reasons Why',
            year: 2017,
            protagosnistas:"Dylan Minnette",
            pais:"EEUU"
        },
        {
            id:123458,
            titulo: 'Vikingos',
            year: 2013,
            protagosnistas:"Katheryn }}winnick",
            pais:"EEUU"
        }
        ,
        {
            id:123459,
            titulo: 'Dark',
            year: 2017,
            protagosnistas:"Louis Hofman",
            pais:"EEUU"
        }
      ],
        function (err, res) {
          if (err) {
            db.close();
            return console.log(err);
          }
          else{
            console.log("Exitoso éxito múltiple")
          }
          
          db.close();
        }
      )
  });