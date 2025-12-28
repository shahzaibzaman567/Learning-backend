 
let express = require("express");

let server = express()


//Tpical Todo data 

server.use(express.json())

let Todos = [
    {
        name:"shah",
        task:"frontend"

    },
    {
        name:"zaib",
        task:"backend"
    }
]


server.post("/users" ,(req,res)=>{
 
    const  newTodo = req.body;
    Todos.push(newTodo) 
    res.status(201).json(newTodo)   


})











server.listen(5173,()=>{
console.log("server started")
})

// let http = require("http");
// let server = http.createServer((req,res)=>{

//     res.end("<h1>Hello Hay </h1>")
// })

// server.listen(5173,()=>{
//     console.log("server started")
// })