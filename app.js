const express  = require("express")
const app = express()
// ALTERNATIVE
// const app = require("express")()


app.get("/",(req,res)=>{
   res.status(200).json({
    
    message : "Hello world"
   })
})

app.get("/blogs",(req,res)=>{
    res.status(200).json({
        hello : "This is blog page"
    })
})




app.listen(3000,()=>{
    console.log("NodeJs Server has started at port 3000")
})