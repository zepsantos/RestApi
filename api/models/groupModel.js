import mongoose from 'mongoose'


const groupSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    owner: {
        type:String,
        required:true
    },
    subjects: {
        type:String
    },
    members: {
        type:[String]
    }
})


let groupModel = mongoose.model("Group",groupSchema)


export default  groupModel