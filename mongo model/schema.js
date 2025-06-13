const mongoose=require("mongoose")
const Schema = mongoose.Schema;


const  UserSchema= new Schema({
  name:String,
  age:Number,
  city: String
});
const MyUser = mongoose.model('User', UserSchema);
module.exports=MyUser;