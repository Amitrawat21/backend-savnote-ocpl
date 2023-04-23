import mongoose from "mongoose";

const Notes_schema = new mongoose.Schema({

    firstName:{
        type:String,
        require:true
    }
   ,
 
   title : {
    require :true, 
    type : String
   }, 


   Description : {
    require : true,
    type : String
   }
})


const NoteModel = mongoose.model("note" , Notes_schema)

export default NoteModel