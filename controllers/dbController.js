const mongoose = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL)
        console.log("Connected to database")

        if (process.env.seedAdmin == "true"){
            const Admin = require("../models/adminModel")
            const admin = new Admin({
                username: "admin",
                password: "admin"
            })
            await admin.save()
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectToDb