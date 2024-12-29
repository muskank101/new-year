const express=require("express");
const app=express();
app.use(express.json());

// app.get('/',(req,res)=>{
//     console.log("hello from express");
//     res.send("BYE!");
// })

app.post("/todo",function(req,res){


})
app.get("/todos",function(req,res){

    
})
app.put("/completed",function(req,res){

    
})
// app.delete("/todos",function(req,res){

    
// })
app.listen(3000);