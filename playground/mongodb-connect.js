const MongoClient = require('mongodb').MongoClient; //to include the mongo client

//to connect
//  URL where the db connection with server is hosted followed by the db name
//default is test created by mongo db
//we can pass ours -- no need to create TodoApp before hand
//we can just pass the name and work on the fly. in this case, it will be connected to TodoApp but
//unless there is some data, the db wont get created at all

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err)
    {
        //if not return, we should have used else clause
        return console.log('Failed to connect to Mongo DB' + err);

    }
    console.log('Mongo DB connected');
    const db = client.db('TodoApp'); // to set up a db conn with client
    //A colleciton woudl be created and a doc would be created inside
    db.collection('ToDoCollection').insertOne({ Todo : "My first todo", status : "false"},
            (err,res)=>
        {
            if(err)
            {
                return console.log('An err has occured while creating the collection and doc');
            }
            console.log('COll and Doc created' + res)
        });
    client.close(); //to end connection and send the control back
});