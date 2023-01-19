const multer = require('multer')

exports.getLandingPage = async(req,res,next)=>{
    try {
        res.status(200).json({
            res:"Welcome to the landing page"
        })
    } catch (error) {
        res.status(201).json({
            res:"Error accured on landing page"
        })
    }
}