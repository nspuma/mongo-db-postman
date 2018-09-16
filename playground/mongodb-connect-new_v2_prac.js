// The 2 require stmts can be combined and writted as below if same vars are gonna be used
const {ObjectId,MongoClient} = require("mongodb");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectId;



//to learn obj id
//var ObjectId1 = new ObjectId(); //use the require above
// console.log(ObjectId1);

MongoClient.connect('mongodb://localhost:27017/Emp', (err,client)=> {
    if(err)
    {
        return console.log('an err occurred' + err);
    }
    const db = client.db('Employee');
    db.collection('EmpDetails').insertOne({        
        EmpName: "Harry",
        EmpId : 10,
        EmpLocn: "London"
    });
    //without toArray,we would not be view the cursor
    // db.collection('EmpDetails').find( ).toArray().then( (doc) =>
    // {
    //     console.log(doc);
    // });

    db.collection('EmpDetails').find( { EmpName : "Harry"}).toArray().then( (doc) =>
    {
        console.log(JSON.stringify(doc,undefined,2));
    });

    db.collection('EmpDetails').find().count().then( (count) => {
        console.log('count is:' + count);

    } );

    client.close();


});



