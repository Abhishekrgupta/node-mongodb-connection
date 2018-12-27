const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { Users } = require('./../server/models/Users');


var id = '5c1cdb667cb40c124886953e';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Todos not Found');   
//     }
//     console.log('Todo by id \n', todo);
// }).catch((e) => {
//     console.log(e);

// });

Users.findById(id).then((user) => {
    if (!user) {
        return console.log('User not Found');
    }
    console.log('User by id \n', JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e);

});