const multer = require('multer')
const LandingPage = require('../db/landingPageModel')

exports.createLandingPage = async(req,res,next)=>{
    try {
        console.log(req.body)
        const newLandingPage = await LandingPage.create({
            language:req.body.language,
            mainHedding:req.body.mainHedding,
            secondaryHedding:req.body.secondaryHedding,
            sectionTwoHedding:req.body.sectionTwoHedding,
            sectionTwoSecondaryHedding:req.body.sectionTwoSecondaryHedding,
            sectionTwoP1:req.body.sectionTwoP1,
            sectionTwoP2:req.body.sectionTwoP2,
        })
        res.status(200).json({
            msg: "Landing page created!",
            newLandingPage
            
        })
    } catch (error) {
        res.status(201).json({
            msg:error
        })
    }
}
exports.getLandingPages = async(req,res,next)=>{
    try {
        const landingPages = await LandingPage.find()
        res.status(200).json({
            page:"found",
            landingPages
        })
    } catch (error) {
        res.status(201).json({
            msg:error
        })
    }
}
exports.updateLandingPage = async(req,res,next)=>{
    try {
        const updatedPage = await LandingPage.findByIdAndUpdate({_id:req.body._id},{
            language:req.body.data.language,
            mainHedding:req.body.data.mainHedding,
            secondaryHedding:req.body.data.secondaryHedding,
            sectionTwoHedding:req.body.data.sectionTwoHedding,
            sectionTwoSecondaryHedding:req.body.data.sectionTwoSecondaryHedding,
            sectionTwoP1:req.body.data.sectionTwoP1,
            sectionTwoP2:req.body.data.sectionTwoP2,
        },{
            new:true
        })
        res.status(200).json({
            msg:"Updated",
            updatedPage
        })
    } catch (error) {
        res.status(201).json({
            msg:error
        })
    }
}
exports.deleteLandingPage = async(req,res,next)=>{
try {
    const deletedPage = await LandingPage.findByIdAndDelete({_id:req.body._id})
    res.status(200).json({
        msg:`Page ${req.body._id} deleted!`
    })
} catch (error) {
    res.status(201).json({
        msg:error
    })
}
}