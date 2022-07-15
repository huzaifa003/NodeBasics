const bcrypt = require('bcrypt')

const userData = {
    users: require('../data/user.json')
}

const checkUser = async (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const person = userData.users.find(person=> person.username === username)
    if (!person){
        return res.status(404).json({
            "message" : "Person Not Found"
        })
    }

    const compare = await bcrypt.compare(password, person.password)
    if (compare){
        res.status(200).json({
            "message": "Successfully Log In"
        })
    }
    else{
        res.status(401).json({
            "message" : "Unauthorized Login"
        })
    }
}

module.exports = {
    checkUser
}