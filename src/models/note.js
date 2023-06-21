//steps:
//1.define Schema ->note:id,user id ,title,date
//2 create model -> <model name><schema> note

const mongoose=require("mongoose");

const noteSchema=mongoose.Schema({
    id:{
        type:String,
        iniqid:true,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    dateAdded:{
        type:Date,
        default:Date.now,
    }
});
module.exports=mongoose.model("note",noteSchema);