const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcrypt')
const fs = require('fs').promises

const userData = {
    users: require('../data/user.json')
}

async function writeFile() {
    
}

const addUser = async (req,res) =>{
    
    const username = req.body.username
    const password = req.body.password
    console.log(userData.users)
    const duplicate = userData.users.find(person=> person.username === username)
    if (duplicate)
    {
        return res.status(409).send("This user already exists") //409 Represents conflict
    }    

    
    try {
        const hashedValue = await bcrypt.hash(password,10) //10 is salt for encryption standard is 10
        const newUser = {
            username : req.body.username,
            password : hashedValue
        }
        userData.users.push(newUser)

        await fs.writeFile(path.join(__dirname,'..','data','user.json'),JSON.stringify(userData.users), (err)=>{
            if (err)
            {
                return err.message
            }
        })
        res.status(201).json({
            "Success": `${newUser.username} Created`
        })
    } catch (error) {
        res.status(500).json({
            'message': error.message
        })
    }
}

const checkUser = (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const person = userData.users.find(person=> person.username === username)
    if (!person){
        return 
    }
}


module.exports = {
    addUser
}