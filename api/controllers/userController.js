'use strict';
import User from '../models/userModel'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



let signUp = async (req,res) => {
    
    try {
        const user = new User({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password
        })
        await user.save()
        res.status(201).json({
            success: true,
            message: "Account created"
          })
    } catch(err) {
        res.status(401).json({
            success: false,
            message: err
        });
    }
}

let login = async (req,res) => {
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user) {
            return res.status(401).send({error: 'User not found'})
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch) {
            return res.status(401).send({error: 'Invalid Password!'})
        }
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_TIMEOUT})
        res.status(200).send(
            {   
                token : token,
                id : user._id,
                email : user.email,
                name : user.name
            })
    } catch(error) {
        res.status(400).send(error)
    }
}

export default {signUp,login}