const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    
    email:{
        type:String,
        required:[true,"Language is required"]
    },

    firstName:{
        type:String,
        required:[true,"main Hedding is required"],

    },

    aboutUs:{
        type:String,
        

    },
    service:{
        type:String,
        required:[true,"service is required"],

    },
    budget:{
        type:String,
        required:[true,"Budget is required"]
    },
    date:Date

})

const Contact = mongoose.model("Contact", contactSchema)
module.exports = Contact