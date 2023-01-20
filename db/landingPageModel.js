const mongoose = require('mongoose');

const landingPageSchema = new mongoose.Schema({

    
    language:{
        type:String,
        required:[true,"Language is required"]
    },

    mainHedding:{
        type:String,
        required:[true,"main Hedding is required"],

    },

    secondaryHedding:{
        type:String,
        required:[true,"secondary Hedding is required"],

    },

    sectionTwoHedding:{
        type:String,
        required:[true,"sectionTwoHedding Hedding is required"],

    },
    sectionTwoSecondaryHedding:{
        type:String,
        required:[true,"sectionTwoSecondaryHedding Hedding is required"],

    },
    sectionTwoP1:{
        type:String,
        required:[true,"sectionTwoP1 is required"],

    },
    sectionTwoP2:{
        type:String,
        required:[true," sectionTwoP2 is required"],

    }
    

})

const LandingPage = mongoose.model("LandingPageSchema",landingPageSchema)
module.exports = LandingPage