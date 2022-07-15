
const express = require('express')
const router = express.Router()
const path = require('path')

const userController = require('../../controller/userController')

const userData = {
    users: require('../../data/user.json')
}

router.route('/|/register(.html)')
    .get((req,res)=>{
        res.json(userData.users)
    })

module.exports = router