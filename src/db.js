const mongoose = require("mongoose");

const connetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    }
    catch (error) {
        console.log("not db connectd", error)
    }
}

module.exports = connetDB;