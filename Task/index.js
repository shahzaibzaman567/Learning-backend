// --------------------------------------Task-----------------------------------
//My task is about to creat a server with node js

const Http = require("http");


const server=Http.createServer((req,res)=>{

    res.end("<h1> Hello Node js server is started </h1>")
})

server.listen(2222);









