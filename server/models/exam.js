const mongoose = require('mongoose');

var Exam = mongoose.model('Exams', {

    sem:{
        type: String,
        required: true,
        minlength: 1,
        trim: true

    }
});


module.exports ={
    Exam
}