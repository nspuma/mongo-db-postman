const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
    if(err)
    {
        return console.log('Could not connect to mongo client' + err);
    }
    console.log('Connected to mongo client');
    
    const db = client.db('TodoApp');
    // db.collection('Emp').insertOne( {empno: 1, empname: "uma"},( err, res) =>{
    //     if(err)
    //     {
    //         return console.log('Could not create a coll and obj' + err);
    //     }
    //     console.log('created coll n obj');
    //     console.log(res.ops);
    // } );


    // client.close();

    //db.collection(.find --> Creates a cursor for a query that can be used to iterate over results from MongoDB
    //and toArray() returns promise if no callback

    //toArray is to convert into an arry for viewing
    //then ==> cos it is a promise

    //if not param, everything is fetched 
    // //find without params
    // db.collection('Users').find().toArray().then( (doc) => 
    // {
    //     console.log(doc);
    // });


    // //find with params
    // db.collection('Users').find({UserName : "Uma"}).toArray().then( (doc) => 
    // {
    //     console.log(JSON.stringify(doc,undefined,2));
    // });

    //find count
     db.collection('Users').find({UserName : "Uma"}).count().then( (count) => 
       {
           console.log(count + ' is the c ount');
       });

       db.collection('Users').find({UserName: "JeevaSathya"}).toArray().then((doc) =>
       {
            console.log(JSON.stringify(doc,undefined,2));
       });


});
