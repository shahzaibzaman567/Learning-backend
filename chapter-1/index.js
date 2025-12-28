const lib = require("./lib.js");


// --------- express ---------//

// Server-side Framework: Express operates on the server-side, enabling you to handle HTTP requests from clients (like web browsers or mobile apps) and send back responses.
// Node.js Ecosystem: It is built on top of Node.js, leveraging its event-driven, non-blocking I/O model for efficient and scalable applications.
// Routing: Express offers a powerful routing system that allows you to define how your application responds to different HTTP methods (GET, POST, PUT, DELETE, etc.) and URL paths.
// Middleware: It utilizes middleware functions that can process requests before they reach the final route handler. This enables functionalities like authentication, logging, error handling, and more.
// Flexibility and Minimalism: Express is known for being unopinionated, meaning it doesn't impose a specific structure or set of tools, providing developers with the freedom to choose their preferred libraries and approaches.
// API Development: Its rich set of HTTP utility methods and middleware makes it a popular choice for building robust and efficient RESTful APIs.


//for import the express 
const express = require("express");
console.log("hello world from shahzaib");//simple console for checking 
//server banana ka liya koi bi number dal sakta ha 
const server = express();
server.listen(465);//server number 









// console.log("hello")
// let a = 5;

//use for simple js 
// console.log(lib.Add(2,3),libSub(4,5))
//use for ES Ecmascript
// import { Sub,Add } from "./lib.js";

// const fs = require("fs");
// const  t1=performance.now()

// const txt = fs.readFileSync("demo.txt","utf-8");
// console.log(txt)

// fs.readFile("demo.txt","utf-8",(err,txt)=>{
// console.log(txt)
// })

// const Number = 456 +555;
// const  t2=performance.now() //is ka performance dakna ka liya ka katna dar ma ata ha 

// console.log(Number);
// console.log(t1-t2);




