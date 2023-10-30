const express=require("express");
const app=express();
const port=8000;

app.get('/',require('./routes'));
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port:${port}`);
})