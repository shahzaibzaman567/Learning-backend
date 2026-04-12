import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express()
const server = http.createServer(app)
const io = new Server(server)

//Socket.io
io.on("connection",(socket) => { // socket means client 
 console.log("A user connected: ", socket.id);

 socket.on("User-message", (message) => {
    console.log("Message from client:", message);
    
    io.emit("message", message); 
  });
})


app.use(express.static(path.resolve("./public")))

app.get("/",(req,res) =>{
  return  res.sendFile("/public/index.html")
})

server.listen(4000,() => console.log("server is running on port 4000"))