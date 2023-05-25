const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/gymapp`,{useNewUrlParser: true, useFindAndModify: false})
const db = mongoose.connection;
db.on("error", error => console.log("error", error))
db.on("open", () => console.log("Connection Established With DB"))

// const db =  mongoose.connect('mongodb://127.0.0.1:27017/myapp').
//   catch(error => handleError(error));

module.exports = db