const mongoose =require('mongoose')

const Schema =mongoose.Schema

const userSchema = new Schema({
    firstname: {type:String, unique:true, minlength:6},
    surname: {type:String, unique:true, minlength:6},
    username: {type:String, unique:true, minlength:6},
    email: {type:String, unique:true, minlength:6},
    password: {type:String, unique:true, minlength:6, maxlength:15}

})


const User = mongoose.model('users', userSchema)
module.exports = User  