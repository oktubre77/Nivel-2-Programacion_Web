// npm install --save express mongodb
const express = require('express');
const	app = express();
const MongoClient = require('mongodb').MongoClient;
//const MONGO_URL = 'mongodb://localhost:27017/testdb';
const MONGO_URL ='mongodb+srv://oktubre77:pochoclo@cluster0.jgskm.mongodb.net/TV?retryWrites=true&w=majority'

app.get('/', (req, res)=>{	  
    MongoClient.connect(MONGO_URL,{ useUnifiedTopology: true }, (err, db) => {  
    const dbo = db.db("TV");  
    var r = "";
     		
    dbo.collection("series").find().forEach((data) => {   		
            
            r += `<li><a href= series/${data.id}>${data.titulo}</a></li>`; 
            		
        }, ()=>{  	
          res.send("<header><h1>Titulo de Series</h1></header><ul>" + r + "</ul>");	
          		
      });
  });	
  });	

  app.get('/series/:id', (req, res)=>{	  
    MongoClient.connect(MONGO_URL,{ useUnifiedTopology: true }, (err, db) => {  
    const dbo = db.db("TV");  
    var r = "";
    var id = parseInt(req.params.id);
    dbo.collection("series").findOne({"id":id}, function(err, data) {
        if (err) throw err;
        if(data){
            r += `<li> ID: ${data.id}</li> <li>TITULO :${data.titulo}</li> <li>AÑO ESTRENO :${data.year}</li>
             <li>PROTAGONISTA :${data.protagosnistas}</li> <li>PAIS :${data.pais}</li>`; 
            res.send("<header><h1>Detalle de la Serie :</h1></header><ul>"+ r +"</ul>")
            
        }
        else{
            res.send("No encontrado");
        }
        
        db.close();
        });
      });
  });	
app.listen(8080);