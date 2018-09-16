//this is my practice js for connecting to mongodb
// MongoClient is a constructor that creates a new MongoClient instance
const MongoClient = require('mongodb').MongoClient;

//to establish a connecttion to mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>
{
    if(err) 
    {
        return console.log('An err occurred while connecting to Mongo client ' + err);
    }
    console.log('cONNEction with client established');
    const db = client.db('TodoApp');
    db.collection('Users').insertOne({ UserName: "Uma", Company : "DTCC", Location : "Chennai" },
         (err,res) => {
            if(err) 
            {
                return console.log('An err occurred while creating the doc ' + err);
            }  
            console.log('Obj created');
            console.log(res.ops);

    });
    client.close();

});