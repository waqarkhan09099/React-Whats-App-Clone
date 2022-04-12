import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Messages from './model/MessageModel.js'
import Pusher from 'pusher'

const app=express()
const PORT=process.env.PORT||3003
// app configuration
dotenv.config();
app.use(express())
app.use(express.json())

const pusher = new Pusher({
    appId: "1364501",
    key: "6df78a108bf88ab91a19",
    secret: "547b66ad641219128548",
    cluster: "ap2",
    useTLS: true
  });
  
  


// app middel wares


// DB configuration and connection
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true})

const db= mongoose.connection
db.once("open",()=>{
    console.log("DataBase Connected.....")
    const msgCollection= db.collection("whatsAppMessages")
    // console.log(msgCollection)
    const changeStream=msgCollection.watch();
    // console.log(changeStream)    

    changeStream.on("change",(change)=>{
        console.log("A Change occured ",change)
        if(change.operationType==="insert"){
            const messageDetails=change.fullDocument
            pusher.trigger('messages','inserted',{name:messageDetails.user,message:messageDetails.message})
        }else{
            console.log("Error Pusher Triggering")
        }
    })
    
})

// app routes

app.get('/',(req,res)=>{
    res.status(200).send("Your server is running on port 3003")
})


app.post("/messages/new",async (req,res)=>{
    const dbMessages=req.body
    const message=new Messages({
        message:req.body.message,
        name:req.body.name,
        timeStamp:req.body.timeStamp,
        recieved:req.body.recieved,
        
    })
    try {
        const savedMessages=await message.save()
        res.status(200).send(savedMessages)
    } catch (error) {
        res.status(500).send(error)
    }
    
    
    app.get("/messages/sync",(req,res)=>{
        const getMessages= Messages.find((err,data)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    })
    
})


// App port on running


app.listen(PORT,()=>{
    console.log(`Port:- http://localhost:${PORT}`)
})