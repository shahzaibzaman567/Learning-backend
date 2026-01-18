import express from "express";
// import jsonwebtoken from "jsonwebtoken";
import dotenv, { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

let server = express();
server.use(express.json());

const posts = [
  {
    username: "shah",
    title: "post 1",
  },
  {
    username: "zaib",
    title: "post 2",
  },
  {
    username: "afridi",
    title: "post 3",
  },
];


function AuthenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log(user)
    req.user = user;
    next();
  });

}
server.get("/posts", AuthenticateToken ,(req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});

// server.post("/login", (req,res) => {
//   // Authentication User

//   const username = req.body.username;
//   const user = { name: username };
//   const accessToKen =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
// console.log("Decoded JWT:", user);

//   res.json({ accessToKen: accessToKen });
// });



server.listen(5173, () => {
  console.log("server started...");
});
