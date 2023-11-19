// const addSchool = async (body, db)=>{
   
//    console.log(body);
//     try{
    
//     let schoolName = body.name.split(" ");
//     schoolName = schoolName.join("_").toUpperCase();
//     let fullName = body.fullName.split(" ")
//     fullName = ToCamelCase({string: fullName.join(" "), remSpace: false})
//     let schoolExists = await db.collection('School').findOne(
//         {
//             $or: [
//                 {name: schoolName},
//                 {fullName: fullName}
//             ]
//         }
//         );
    
// console.log(schoolName, fullName)
//     if(schoolExists){
//         console.log("School already exists in db");
//         return;
//     }else if(schoolName.length < 5){
//         console.log("name of school is either too short or is empty");
//         return;
//     }else if(fullName.length < 15){
//         console.log("fullname field is either empty or is too short");
//         return;
//     }


//     body.name = schoolName
//     body.fullName = fullName;
//     let response = await db.collection('School').insertOne(body);
//     console.log(response)
//     }catch(err){
//         console.log("addSchool function failed to run: ", err);
//     }
// }

// const ToCamelCase = (data)=>{
//     const words = data['string'].toLowerCase().split(' ');
//     const uppercaseWords = words.map(word =>{
//         let splitWord = word.split('');
//         splitWord[0] = splitWord[0].toUpperCase();
//         return splitWord.join('');
//     })
//     return uppercaseWords.join(data['remSpace'] ? '': ' ')
// }

// module.exports = {
//     addSchool
// }