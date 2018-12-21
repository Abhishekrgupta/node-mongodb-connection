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

    // db.collection('Todos').findOneAndUpdate(
    //                         {_id: new ObjectID('5c1cb7738343427e8d7063c5') },
    //                         { $set: {completed: false} },
    //                         {
    //                             returnOriginal: false
    //                         }
    //                         ).then((result) => {

    //                             console.log(result);
                                
    //                         });
    

    db.collection('Users').findOneAndUpdate(
                                {_id: new ObjectID('5c1c90ea6e5e68217409330f') },
                                { 
                                $set: {name: 'Abhishek'} ,
                                $inc: {age: 1} 
                                },
                                {
                                    returnOriginal: false
                                }).then((result) => {
    
                                    console.log(result);
                                    
                                });                        
    client.close();   

});