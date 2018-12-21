const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, client) => {
    if(err){
        console.log('Unable to connect');        
    }
        console.log('Connected to Server');
        const db = client.db('TodosApp');
        

        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
            
        //     console.log(result);
            
        // });

        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
            
        //     console.log(result);
            
        // });
        db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
            
            console.log(result);
            
        });


        // client.close();
});