const mongoose = require("mongoose")


// const Set07 = "mongodb://localhost/Set07Database"
const Set071 = "mongodb://0.0.0.0:27017/Set07Database"
// const Set072 = "mongodb://127.0.0.0:27017/Set07Database"

const database =async()=>{

    try {
       const DbConnect= await mongoose.connect(Set071)
       console.log("")
       console.log(`Database is connected ${DbConnect.connect.host}` )
        
    } catch (error) {
        console.log("Error don happened ooo", error)
        
    }
}

// mongoose.connect(Set071).then(()=>{
//     console.log(`db is connected`)
// }).catch((err)=>{
//     console.log(err)
// })

module.exports = database