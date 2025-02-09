import dotenv from 'dotenv'


import connectDB from './db/index.js'
dotenv.config()
import express from 'express'
const app = express()
const port = process.env.PORT || 5000
    

connectDB()
.then(() => {
    app.listen(port , () => {
        console.log(`server is running at port : ${port}`)
    });
    app.on("error" , (error) => {
        console.log("error : " , error);
    })
    
})
.catch((err) => {
    console.log("mongoDB connection failed" , err)
})