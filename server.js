
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 2000
// const { connectToDb, getDb } = require('./db');
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes")
const schoolRoutes = require("./routes/schoolRoutes")

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(authRoutes)
// app.use("/schools", schoolRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to EasyDb')
})

const dbUri = 'mongodb://localhost:27017/EasyDB';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then((result)=> app.listen(port, () => {
         console.log(`EasyDb server listening on port http://localhost:${port}`)
      }))
.catch(err => console.log(err))

// let db;
// connectToDb((err)=>{
//   if(!err){
//     app.listen(port, async () => {
//       console.log(`EasyDb server listening on port http://localhost:${port}`)
//     })
//     db = getDb();
//   }
// })



// app.post("/registerUser", async (req, res)=>{
//  try{

//   let body = req.body;
//   console.log("body", body)
//    let emailCheck = await emailCanBeUsed(body.email);
//    console.log(emailCheck)
//  }catch(err){
//   console.log('failed to run test route', err)
//  }
 
// })

// const emailCanBeUsed = async (email)=>{
//   const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//   const emailIsFound = await db.collection('Users')
//   .findOne({email})
  
//   if(isValidEmail && !emailIsFound) return true;
//   return false;
// }

  

// app.post("/addSchool/:userId", async (req, res)=>{
  
//   try{
//   const params = req.params;
//   const userId = params.userId;
//   console.log('params, userId', params, userId);
//   }catch(err){
//     console.log("failed to run addSchool get request", err);
//   }
// })


