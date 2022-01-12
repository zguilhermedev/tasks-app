const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://localhost:27017/task-app-api');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: [6, 'Password must have more than 6 chars'],
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    email: {
        type: String,
        required: true,
        trime: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) throw new Error('Email is invalid.')
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) throw new Error('Age must be a positive number.')
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'Learn A lot',
})

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})

// const me = new User({
//     name: 'Zé',
//     password: '123456',
//     email: 'zeJose@gmail.com',
//     age: 17
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// })
