const express = require('express')
const router = express.Router()

const userController = require('../../controller/authenticationController')

router.route('^/$|/login(.html)?')
    .post(userController.checkUser)
module.exports = router