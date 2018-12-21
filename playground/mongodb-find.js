const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err){
        console.log('Unable to connect to server', err);
    }
    console.log('Connected to server');
    const db = client.db('TodosApp');

    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
        
    // }, (err) => {

    //     console.log('Unable to fetch data');
        
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos: ${count}`);
    // }, (err) => {

    //     console.log('Unable to count data');
        
    // });


    db.collection('Users').find({name: 'Rohan'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) => {

        console.log('Unable to fetch data');
        
    });

    // client.close();
    
});