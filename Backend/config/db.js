const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL).then(data => {
        console.log(`Mongodb connected with server ${data.connection.host}`);
    }).catch(e => {
        console.log(e.message);
    }) 
}

module.exports = connectDB;