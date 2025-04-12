import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String}
},{timestamps:true})

const userModel = mongoose.model.user || mongoose.model("user",userSchema)

export default userModel;