
const express = require('express')
const router = express.Router()

const userController = require('../../controller/userController')



router.route('/|/register(.html)')
    .post(userController.addUser)


router.route('/login(.html)')
    .post(userController.checkUser)
module.exports = router