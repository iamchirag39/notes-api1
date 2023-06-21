const express=require('express');
const mongoose=require('mongoose');
const app=express();
const Note=require("./models/note");
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const mongodbpath="mongodb+srv://chiragjadav3843:A9JmWboutAixL5cz@cluster0.eihzb6v.mongodb.net/notesdb";
mongoose.connect(mongodbpath).then(
    function(){
        app.get("/",function(req,res){
            const response={messge: "API works!"};
            res.json(response);
        });
        const noteRouter=require("./routes/note");
        app.use("/notes",noteRouter);
    }
);


const PORT=process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log("server run properly"+PORT);
})