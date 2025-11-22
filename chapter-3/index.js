const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const morgan = require("morgan");

//Creat a server with expressjs
const express = require("express");
const server = express();

//-------------------------------- API - Endpoint - Route -----------------------------------//

// middleWere is a squance
//jab ak kam ham check kara jasa country of user to wo match na kara to middleWare is return karta ha or agar
//match ho jaya to dosra middle ware ko pohoncha data ha
//Execut any code
//Make change to the reques and the response object
//modify and static hosting

//bodyParer
server.use(express.json()); //example of middlewere use for understanding of data to conver string in obj
// server.use(express.urlencoded());               // ---------------- use with form submiting

server.use(morgan("default")); //Give a long data like ip adress// ::1 - GET /home HTTP/1.1 200 134 - 10.453 ms
// server.use(morgan("dev"));                //Give // status / url / response
server.use(express.static("public"));

// my middlewere

// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

const auth = (req, res, next) => {
  // console.log(req.query);
  // if (req.query.Password == "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next();
};

//Data  Get
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});
//Data  Put
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
//Data  POST

server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
//Data  PATCH

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
//Data  DELET

server.delete("/", (req, res) => {
  res.json({ type: "DELET" });
});

//Demon
// server.get("/", (req, res) => {
//   // res.send("<h1>Hello<h1>")
//   res.status(201).send("<h1>Hello<h1>");
//   // res.sendFile("/(SMIT)-course/Learning-backend/chapter-3/index.html")
//   // res.json(products);
//   // res.sendStatus(404)
// });

server.listen(5173, () => {
  console.log("Srever Started");
});
