const express = require('express')
const { createLandingPage, getLandingPages, updateLandingPage, deleteLandingPage } = require('../controllers/landingPageController')

const router = express.Router()


router.route('/').get(getLandingPages)
router.route('/admin/createLandingPage').post(createLandingPage)
router.route('/admin/landingPage/update').patch(updateLandingPage).delete(deleteLandingPage)
module.exports = router