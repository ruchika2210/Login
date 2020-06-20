const mongoose=require('mongoose')
const Schema=mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },

    LastName:{
        type:String,
        required:true
    },

    UserName:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model('Logindetails',Schema)