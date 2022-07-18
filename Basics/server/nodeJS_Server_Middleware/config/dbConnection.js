const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (err) {
        console.log(err,"Error coming from DB")
    }
}

module.exports = connectDB