require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/Todo.js');
var { Users } = require('./models/Users.js');
var { Exam } = require('./models/exam.js');


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/todos', (req, res) => {

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs)
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/users', (req, res) => {

    var user = new Users({
        email: req.body.email
    });

    user.save().then((docs) => {
        res.send(docs)
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/exams', (req, res) => {

    var exam = new Exam({
        sem: req.body.sem
    });

    exam.save().then((docs) => {
        res.send(docs)
    }, (e) => {
        res.status(400).send(e);
    });
});



app.get('/todos', (req, res) => {

    Todo.find().then((todos) => {
        // {text: 'breakfast'}
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {

    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id not valid');
    }

    Todo.findById(id).then((todo) => {
        if (todo) {
            res.send({ todo });
        } else {
            res.send('Todo not found');
        }
    }).catch((e) => {
        res.status(404).send();
    });
});


app.get('/users', (req, res) => {

    Users.find().then((users) => {
        // {text: 'breakfast'}
        res.send({ users });
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/exams', (req, res) => {

    Exam.find().then((sem) => {
        
        res.send({ sem });
    }, (e) => {
        res.status(400).send(e);
    });
});


app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id not valid');
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.send(todo);
    }).catch((e) => {
        res.status.send();
    });
}); 

    
app.patch('/todos/:id', (req, res) => {

    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id not valid');
    }

    if(_.isBoolean(body.completed) && body.completed ){

        body.completedAt = new Date().getTime(); 
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
            res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });

});


app.listen(port, () => {

    console.log(`Server up on port ${port}`);

});


module.exports = {
    app
}



























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

// var newUser = new Users({
//     email:'abc@abc.com  '
// });

// newUser.save().then((docs) => {

//     console.log('Saved User', docs);

// }, (e) => {
//     console.log('Unable to save User');
// });