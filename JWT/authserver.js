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

let refreshTokens = []


function AuthenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

server.get("/posts", AuthenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

server.post("/login", (req, res) => {
  // Authentication User

  const username = req.body.username;
  const user = { name: username };
  const accessToKen = generateAccesstoken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken)
  console.log("payload:", user);

  res.json({ accessToKen: accessToKen, refreshToken: refreshToken });
});

function generateAccesstoken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

server.post("/token",(req,res)=>{
  const refreshToken = req.body.token
  if(refreshToken == null) return res.sendStatus(401)
 
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
 
      if(err) return res.sendStatus(403)
    const accessToken = generateAccesstoken({name:user.name})
  res.json({accessToken : accessToken})
    })

})

server.delete("/logout",(req,res)=>{
 refreshTokens = refreshTokens.filter(token => token !== req.body.token)
 res.sendStatus(204)
}) 


server.listen(3000, () => {
  console.log("Authserver started...");
});
