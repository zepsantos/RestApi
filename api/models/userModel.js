'use strict';
import mongoose from 'mongoose'
import bcrypt from 'bcrypt';
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        unique:true,
        trim:true,
        index:true,
        validate: value => {
            if(!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        },
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

userSchema.pre('save',async function(next)  {
    const user = this
    if (user.isModified('password') || user.isNew ) {
        user.password = await bcrypt.hash(user.password, 10)
    }
    next()
})



let userModel = mongoose.model("User",userSchema)


export default  userModel