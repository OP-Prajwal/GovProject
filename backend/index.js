const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const app=express()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

async function DBconnection() {
    mongoose.connect(process.env.mongoURL)
    .then(()=>{
        console.log("coonected to database")
    })
    .catch((err)=>{
        console.log("some error occured while connecting ",err)
    })
}
DBconnection()

