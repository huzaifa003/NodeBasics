const mongoose = require('mongoose')

const employeeSchema= new mongoose.Schema({ //id is automatically created as ObjectID 
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Employee',employeeSchema) //NOTE THAT Employee will automatically be saved as employees as it automatically detects plural the Employee is same as filename tho

