import mongoose from "mongoose";

const user_schema = new mongoose.Schema({

    firstName:{
        type:String,
        require:true
    }
   ,
    email_id:{
        type:String,
        require:true,
        index: {
            unique: true
          }
    },
    password:{
        type:String,
        require:true,
    },
    confirmPassword:{
        type:String,
        require:true,
    }
})


const UserModel = mongoose.model("Users" , user_schema)

export default UserModel