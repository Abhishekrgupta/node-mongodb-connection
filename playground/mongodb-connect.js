// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err){
        return console.log('Error connecting server.');
    }
    console.log('Connected to Mongodb Server');
    const db = client.db('TodosApp');

    // db.collection('Todos').insertOne({
    //     text: 'To do something',
    //     completed: false
    // }, (err, result) => {
        
    //         if(err){
    //             return console.log('Unable to insert', err);
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));       
    // });

    db.collection('Users').insertOne({
        name: 'Rohan',
        age: 23,
        location: 'PCMC'
    }, (err, result) => {
        
            if(err){
                return console.log('Unable to insert', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));       
    });

    client.close();   

});