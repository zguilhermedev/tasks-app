const mongoose = require('mongoose');
const validator = require('validator');


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

module.exports = User;