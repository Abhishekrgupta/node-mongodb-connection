var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    
    completed:{
        type: Boolean,
        default: false
    },
    
    completedAt:{
        type: Number,
        default: null
    }
});


var Users = mongoose.model('Users', {

    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true

    }
});


// var newTodo = new Todo({
//         text: 'Eat lunch',
//         completed: true,
//         completedAt: new Date()
//     });


// newTodo.save().then((docs) => {

//     console.log('Saved Todo ',docs);
    
// }, (e) => {
//     console.log('Unable to Save');
    
// });


// var otherTodo = new Todo({
//     text: 'visit home'
// });


// otherTodo.save().then((docs) => {

// console.log('Saved Todo ',docs);

// }, (e) => {
// console.log('Unable to Save');

// });



var newUser = new Users({
    email:'abc@abc.com  '
});

newUser.save().then((docs) => {

    console.log('Saved User', docs);
    
}, (e) => {
    console.log('Unable to save User');
});