import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
  email :{
    type: String,
    required: true,
    unique: true,
  },
  name:{
    type: String,
    required: true,
    unique: true,
  },
  role:{
    type: String,
    required: true,
    default: "user",
  },
  picture:{
    type: String,
    required: true,
  },
  
},{timestamps: true})

export default mongoose.model('user',userSchema)