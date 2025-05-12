const express = require('express')
const router = express.Router()

const aicontroller = require('../controller/aicontroller') // Corrected folder name to 'controllers' if it was a typo

router.post('/get-response', aicontroller.getreview)

module.exports = router
