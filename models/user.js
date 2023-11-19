const mongoose = require("mongoose");
const { isEmail } = require("validator")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true, 
        minlength: [6, 'Minimum username length is 6 character']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: [true,  "Email must contain only lowercase letters"],
        validate: [ isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, "Minimum password length is 8 characters"]
    },
    verified: {
        type: String,
        default: false
    }
})


const User = mongoose.model('user', userSchema)

module.exports = User;