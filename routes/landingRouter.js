const express = require('express')
const { getLandingPage } = require('../controllers/landingPageController')

const router = express.Router()


router.route('/').get(getLandingPage)

module.exports = router