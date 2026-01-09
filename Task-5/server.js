import express from "express";
import bcrypt from "bcrypt";

let server = express();
server.use(express.json());
const users = [];

server.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);

  users.push({
    username,
    password: hash,
  });
  res.send("OK");
});

server.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) {
    res.send("worng username");
    return;
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    res.send("worng password");
    return;
  }
  //send a cookie
  //send a jwt
  res.send("OK");
});

server.listen(5173, () => {
  console.log("server started...");
});

// const Password = "Password1";
// console.time("hash")
// const salt = bcrypt.genSaltSync(10);
//const hash = await bcrypt.hash(password,10)
//const isMatch = await bcrypt.compare("Password1",hash)
// console.timeEnd("hash");
//console.log(hash,salt,isMatch)
// $2b$10$F6H4I8qFaR4jYSbrDHONaeFQP5YNVWCCt7.6Gymk0M0VnOAlqC0D.
// $2b$10$gPHR71fXc75mXCifLEGRF
