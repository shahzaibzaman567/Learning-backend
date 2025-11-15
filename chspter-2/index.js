const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.products[0];
//i creat a response to a server req and res are importan and its place
// provide are very important
const User = { age: 5 };
//HTTP :Hyper Text Transfer protocol
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      // res.setHeader("Dummy", "DummyValue");
      res.end(JSON.stringify(data));
      break;
          case "/product":
      res.setHeader("Content-Type", "text/html");
      let modifiedIndex = index.replace("**title**",product.title).replace("**price**",product.price)
      res.end(modifiedIndex);
      break;
      default:
        res.writeHead(404,"NT Found")
        res.end("404 Error")
  }

  //     res.end("<h1>hello</h1>");
  console.log(req.url);
  console.log("helllo world");
  // res.end(index)
});

server.listen(5173);

// ----------------------- incompmplete fake api fetching --------------------
// fetch("M0mtYHnwecQqwySNxBwb2A==XeXYn5BT8pg9AIHt")
// .then(res=>res.json())
// .then(ress=>console.log(ress))
