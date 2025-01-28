const mongoose = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL)
        console.log("Connected to database")
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectToDb