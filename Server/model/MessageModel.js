import mongoose from 'mongoose'

const whatsApppSchema=new mongoose.Schema({
    message:String,
    name:String,
    timeStamp:String,
    recieved:Boolean
})

export default mongoose.model("whatsAppMessages",whatsApppSchema)
