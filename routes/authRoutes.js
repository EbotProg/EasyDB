const express = require("express");
const router = express.Router();
const { signUp } = require("../Controllers/authController")

router.post("/signUp", signUp)

module.exports = router;














// // const { checkUserInfo } = require("../Controllers/auth")
// // const { getDb } = require('../db');

// router.post("/register", async (req, res)=>{
//  try{

//     // let db = getDb()
//   let body = req.body;
//   console.log("body", body)
//   //  await checkUserInfo(body, db);
//  }catch(err){
//   console.log('failed to run test route', err)
//  }
 
// })


