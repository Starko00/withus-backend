const Contact = require("../db/contactFormModel")

exports.createContactEntry = async(req,res,next)=>{
    try {
        const newContact = await Contact.create({
            email:req.body.email,
            firstName:req.body.firstName,
            service:req.body.service,
            budget:req.body.budget,
            aboutUs:req.body.aboutUs,
            date: Date.now()
        })
        res.status(200).json({
            msg:'Contact sent',
            newContact
        })
    } catch (error) {
        res.status(201).json({
            msg:error
        })
    }
}
exports.getAllContacts = async(req,res,next)=>{
    try {
        const contacts =  await Contact.find()

        res.status(200).json({
            msg:'Contact sent',
           contacts
        })
    } catch (error) {
        res.status(201).json({
            msg:error
        })
    }
}
