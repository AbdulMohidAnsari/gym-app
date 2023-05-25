const mongoose = require("mongoose")
const sequencing = require("./sequencing");

const autoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
  _id:Number,
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  weight: {
    type: Number,
    required: true,
    trim: true
  },
  height: {
    type: Number,
    required: true,
    trim: true
  },
  bmi: {
    type: String,
    trim: true
  },
  bmiresult: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  requireTrainer: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  package: {
    type: String,
    enum: ["Monthly", "Quarterly", "Year"],
    required: true,
  },
  important: {
    type: [],
    required: true,
  },
  haveGYMBefore: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  enquiryDate: {
    type: Date,
    default: new Date(),
  },
  
},{ _id: false })

userSchema.plugin(autoIncrement);
// UserSchema.pre("save", function (next) {
//     let doc = this;
//     sequencing.getSequenceNextValue("user_id").
//     then(counter => {
//         console.log("asdasd", counter);
//         if(!counter) {
//             sequencing.insertCounter("user_id")
//             .then(counter => {
//                 doc._id = counter;
//                 console.log(doc)
//                 next();
//             })
//             .catch(error => next(error))
//         } else {
//             doc._id = counter;
//             next();
//         }
//     })
//     .catch(error => next(error))
// });


let usermodel = mongoose.model("users", userSchema)


module.exports = usermodel

