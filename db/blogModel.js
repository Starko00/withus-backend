const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

    
    language:{
        type:String,
        required:[true,"Language is required"]
    },

    tittle:{
        type:String,
        required:[true,"main Hedding is required"],

    },

    text:{
        type:String,
        required:[true,"secondary Hedding is required"],

    },

    img:{
        type:String,
    },
   
    

})

const Blog = mongoose.model("BlogSchema", blogSchema)
module.exports = Blog