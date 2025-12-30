let express = require("express");
let productRouter = require("./Router/routes.js")
let server = express();



server.use(express.json())

server.use("/products",productRouter.router)


 server.listen(5173,()=>{
    console.log("server started")
 })