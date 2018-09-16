const request = require('supertest');
const expect = require('expect');

const app = require('./../server/server.js').app;
const ToDoModel = require('./../models/todo').ToDoModel;

//to do smoe prep work, we can use beforeEach which would run
//before every single tc inthis
beforeEach((done) => {
    // we can remove all todos if we want by using remove as below
    console.log('before each');
    ToDoModel.remove( {}).then( () =>
    {
        console.log('cnt' );
        // console.log(JSON.stringify(ToDoModel.find({}).count()),
        //      undefined,2);
        done();
    });
  // im just going to display the count
    // ToDoModel.find({}).count().then((count)=> {
    //     console.log('cnt is '+ count);
    //     done();
    // });
});

//describe works only when called from test script in pkg json
describe('To do post test', () => {
    it ('should send nad get teh same text', (done) => 
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
                    console.log ('got it back');
                    ToDoModel.find({}).count().then((count)=> {
                        console.log('cnt is '+ count);
                        done();
                    });
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
                expect(ToDoModel.length).toBe(0);
                done();
            })

           
            // );
        //.catch( (e) => done(e));
        });
    });
});
