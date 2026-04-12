import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

export let AuthenticateToken = (req, res, next) => {
  
    let header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  let secret = process.env.ACCESS_SECRET_TOKEN;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret, (err, user) => {

    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });

};
