// learning mongodb find and delete docs

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
MongoClient.connect('mongodb://localhost:27017/Employee', (err,client) => {
    if(err)
    {
        return console.log('err:' + err);
    }
    const db = client.db('Employee');
    // db.collection('EmpDetails').find().toArray().then( (resDoc)=> {
    //     console.log(resDoc);
    // } );

    // db.collection('EmpDetails').find({EmpName : "twin"}).count().then( (count)=> {
    //         console.log(`starts twin count is : ${count}` );

    // } );
    
    // db.collection('EmpDetails').find({EmpName : "Harry"}).count().then ( (count) => {
    //     console.log(`Harry count is bef  del1 is : ${count}` );
    // });

    // //FINDONE AND DELETE
    // db.collection('EmpDetails').findOneAndDelete({EmpName : "Harry"}, (res)=> {
    //     return console.log('res of find one and del:' + res);

    // });
     
    // db.collection('EmpDetails').find({EmpName : "Harry"}).count().then ( (count) => {
    //     console.log(`Harry count is aft del1 is : ${count}` );
    // });

    // db.collection('EmpDetails').find({EmpName : "twin"}).count().then( (count)=> {
    //     console.log(`aft del1 twin count is : ${count}` );

    // } );
    // //this woudl work without callback too
    //FIND ONE AND DELTEE
    // db.collection('EmpDetails').findOneAndDelete({EmpName : "twin"});
    
    // db.collection('EmpDetails').find({EmpName : "twin"}).count().then( (count)=> {
    //     console.log(`aft del2 twin count is : ${count}` );

    // } );

    //DELTE MANY
    // db.collection('EmpDetails').find({EmpName : "poison"}).count().then ( (count) => {
    //     console.log(`before deletea all count is : ${count}` );
    // });
    // db.collection('EmpDetails').deleteMany( {EmpName : "poison"});
    
    // db.collection('EmpDetails').find({EmpName : "poison"}).count().then ( (count) => {
    //     console.log(`Afer  deletea all count is : ${count}` );
    // });
    
    //DELTE ONE
    // db.collection('EmpDetails').deleteOne({ EmpName : "Harry" }).then( (result ) => {
    //     console.log(result + 'res of deleteone');
    // });
    // db.collection('EmpDetails').find({EmpName : "Harry"}).count().then ( (count) => {
    //     console.log(`Harry count is aft del2 is : ${count}` );
    // });
    //findby ojb id and delete

    db.collection('EmpDetails').find({EmpName : "Harry"}).count().then ( (count) => {
        console.log(`twin count is bef  del1 is : ${count}` );
    });
    
    // "_id" : ObjectId("5b97556a207f301910f1b29f"),

    //FINDONE AND DELETE BY OBJECT ID
    db.collection('EmpDetails').findOneAndDelete({_id : new ObjectId("5b9766cd93cd330394494911")},
     (res)=> {
        return console.log('res of find one and del:' + JSON.stringify(res));

    });

    // db.collection('EmpDetails').find({EmpName : "Harry"}).count().then ( (count) => {
        // console.log(`twin count is aft  del1 is : ${count}` );
    // });

    // db.collection('EmpDetails').find({_id : "5b9766d72910d60de848928f"}).count().then ( (count) => {
    //     console.log(`twin count is aft  del1 is : ${count}` );
    // });
    client.close();
});
