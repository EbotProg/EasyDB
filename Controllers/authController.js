const User = require("../models/user")

const handleErrors = err =>{
  const errors = {
    email: '',
    password: '',
    username: ''
  }

  const messagesForUniqueField = {
    email: "Please enter another email",
    username: "Please enter another username"
  }
  if(err.code == 11000){
    errors[Object.keys(err.keyValue)[0]] = messagesForUniqueField[Object.keys(err.keyValue)[0]];
    return errors;
  }


  if(err.message.includes("user validation failed")){

    Object.values(err.errors).forEach(({properties})=>{
        errors[properties.path] = properties.message;
    })
    
  }
  return errors;
}
const signUp = async (req, res)=> {

  try{
    const user = await User.create(req.body);
    res.status(201).json(user)
  }catch(err){
    console.log("failed to run signUp function")
    const errors = handleErrors(err);
    res.status(400).json({errors})
  }
}

module.exports = {
  signUp
}
// const emailCheck = async (email, db)=>{
//     const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//     const emailIsFound = await db.collection('Users')
//     .findOne({email})
    
//     if(isValidEmail && !emailIsFound) return true;
//     return false;
//   }


//   const usernameCheck = async (username, db)=>{
//     const usernameIsInvalid = username.length < 8 || username.length > 30;
//     const usernameIsFound = await db.collection('Users')
//     .findOne({username})
    
//     if(!usernameIsInvalid && !usernameIsFound) return true;
//     return false;
//   }

//   const checkUserInfo = async (info, db)=>{
   
//     const { email, username, password} = info;
//     const emailCanBeUsed = await emailCheck(email, db);
//     const usernameCanBeUsed = await usernameCheck(username, db);
//     let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&^]{8,15}$/;

//     if(!usernameCanBeUsed){
//         console.log("name is either too short, long or it has been taken \n username must be between 8 to 15 letters long")
//     }
//     if(!regex.test(password)){
//       console.log("Your password must have one of the following\n at least one lowercase alphabet\n at least one uppercase alphabet\n at least one numeric digit\n at least one special character(@, $, ., #, !, %, *, ?, &, ^)\n It must be 8 to 15 characters long")
//     }
//     if(!emailCanBeUsed){
//         console.log("Your email is either taken or invalid")
//     }  

//   }
  
//   module.exports = {
//     checkUserInfo
//   }