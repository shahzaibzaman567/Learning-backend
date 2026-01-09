let express = require("express");
let server = express();



server.use(express.json())



let Auth= (req,res,next)=>{
   console.log(req.query);
   console.log(req.query.password);
   if(req.query.password == "shah-coder" ){
res.json("Autanticate")
   }else{
      res.status(401).json("Error")
   }
next()
}




server.get("/",Auth,(req,res)=>{
   
   res.json({type:"GET"})

})



server.listen(5173,()=>{
    console.log("server started")
 })


























 