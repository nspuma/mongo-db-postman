const request = require('supertest');
const expect = require('expect');

const app = require('./../server/server.js').app;
const ToDoModel = require('./../models/todo').ToDoModel;

//to do smoe prep work, we can use beforeEach which would run
//before every single tc inthis

// beforeEach((done) => {
//   Todo.remove({}).then(() => {
//     return Todo.insertMany(todos);
//   }).then(() => done());
// });

const todoArray = [ {"TodoName": "Todo1"}, {"TodoName" : "Todo2"}];
beforeEach((done) => {
    // we can remove all todos if we want by using remove as below
    console.log('before each');
    ToDoModel.remove( {}).then( () =>
    {
        
        //we can add an arry of docs by using insertMany
        //defined that arry above
        ToDoModel.insertMany(todoArray).then(
                (doc) =>
                {
                    console.log('inserted');
                    done();
                },
                (err) =>
                {
                    //console.log(err);
                    done(err);
                }
        );
        
    });
  // im just going to display the count
    // ToDoModel.find({}).count().then((count)=> {
    //     console.log('cnt is '+ count);
    //     done();
    // });
});

//describe works only when called from test script in pkg json
describe('To do post test', () => {
    it ('should send n get the same text', (done) => 
    {
        var text = 'Testing this todooooooo'
        request(app). //make a request 
        post('/todos'). //its a post not a get
        send({"TodoName" : text}). //post this text
        expect(200). //and expect this status for our test
        expect((res) => { //also expect this response as our sent text
            expect(res.body.TodoName).toBe(text)    ;
        }). 
        end( (err,res) =>         //at the end handle err n res again 
        //very imp to note first arg is err and then res in this case
        {   
            if (err)
            {
                return done(err);
            }
            //verify the db insert
            ToDoModel.find({TodoName: text}).then(
                (doc)=> {                   
                    
                    //ToDoModel.find({}).count().then((count)=> {
                    // });
                        // console.log('cnt is '+ count);
                        expect(ToDoModel.length).toBe(3);
                        done();
                    
                    // done(); //ths done gest executed sooner than the above
                    //vallback if put ooutside.so moved to callback
                },
                (err) => {
                    done(err);
                }
            ).catch((e) => done(e));            
        });       
    });

    it('should not create when pssed an empty text', (done) =>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end( (err,res) => {
            if(err)
            {
                //console.log(err);
                
                done(err);
            }
            // ToDoModel.find({}).count().then((count)=> {
            //     console.log('done done done');
            //     expect(count).toBe(0);
            //     done();
            // // },
            // (e) =>
            // {
            //     console.log('eee' + e);
            // }
            // );
            // //another way andrew
            ToDoModel.find().then( (ToDoModel) =>{
                expect(ToDoModel.length).toBe(2);
                done();
                },
                (err) => 
                {
                    done(err);
                }
            )
        });
    });
});

describe('testing GET method',() =>
{
    it ('should get the todos as expected', (done) => {
        request(app)
        .get('/todos')
        .expect(200)        
        .expect((res) => {
            console.log('hihello' + JSON.stringify(res.body,undefined,2));
            expect(res.body.doc.length).toBe(2);            
        })
        //the be.ow could jus be end(done());
        .end( (err,res) => {
            if (err){
              return done(err);
            }           
            done();
        });
    
    
    });
});