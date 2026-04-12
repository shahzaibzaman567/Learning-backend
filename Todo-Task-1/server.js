import express from "express";
import router from "./routes/route.js";



let server = express();
server.use(express.json());

server.use("/",router)

server.listen(5173, () => {
  console.log("server started...");
});
