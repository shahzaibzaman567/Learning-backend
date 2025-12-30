let express = require("express");

let server = express();

//Typical Todo data

server.use(express.json());

let Users = [
  {
    id: 1,
    name: "shah",
    task: "frontend",
  },
  {
    id: 2,
    name: "zaib",
    task: "backend",
  },
];

server.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(Users.lastIndexOf());
  Users.push(newUser);
  res.status(201).json(Users);
});

server.get("/users", (req, res) => {
  res.json(Users);
});

server.get("/users/:id", (req, res) => {
  const user = Users.find((U) => U.id == req.params.id);
  console.log(req.params.id);
  if (user) {
    return res.json(user);
  } else {
    res.status(404).json({ message: "node found" });
  }
});

server.put("/users/:id", (req, res) => {
  let user = Users.find((u) => u.id == req.params.id);

  if (user) {
    res.json({
      message: `yar ${user.name}tom ${user.task} developer ho mara liya ak web bana do `,
      ...user,
    });
  } else {
    res.json({ Message: "koch to masla ha shah" });
  }
});

server.delete("/users/:id", (req, res) => {
  let index = Users.findIndex((u) => u.id == req.params.id);

  if (index !== -1) {
    Users.splice(index, 1);
    res.json({ message: `squid game ha ak gaya `, ...Users });
  } else {
    res.json({ Message: "koch to masla ha shah" });
  }
});

server.listen(5173, () => {
  console.log("server started");
});

// server.put("/users/:id",(req,res)=>{
//     res.json({Message:"I am pust request"})
// })

// let http = require("http");
// let server = http.createServer((req,res)=>{

//     res.end("<h1>Hello Hay </h1>")
// })

// server.listen(5173,()=>{
//     console.log("server started")
// })

// {message:`yar ${user.name} tom  ${task}  ho mara liya a kweb bana do `,
