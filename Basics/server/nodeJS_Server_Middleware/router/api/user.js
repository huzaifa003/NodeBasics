
const express = require('express')
const router = express.Router()

const userController = require('../../controller/userController')



router.route('/|/register(.html)')
    .post(userController.addUser)

module.exports = router