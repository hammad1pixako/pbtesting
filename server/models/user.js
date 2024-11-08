const mongoose = require('mongoose');
const { Schema } = mongoose;


//the the separate schema for userTime session that could be easily stored in user model in the form of array
const userTimeSessionSchema = new Schema({
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
   },
   startTime: {
      type: String,
      required: true
   },
   endTime: {
      type: String,
      required: true
   },
   totalSeconds: {
      type: Number,
      required: true
   },
   sessionDate: {
      type: String,
      required: true
   }
},{timestamps: true});
   

const userSchema = new Schema({
 name: {
    type: String,
    trim: true,
    required: true,
 },
 email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
 },
 userTimeSession: [userTimeSessionSchema],  //now storing the userTimeSession in the form fo array
 password: {
    type: String,
    required: true,
    min: 6,
    max: 64,
 },
 userRole: {
   type: String,
   required: true,
   enum: ["User", "Admin"],
   default: "User"
 }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);