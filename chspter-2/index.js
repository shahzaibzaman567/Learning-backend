const http=require("http") ;

//i creat a response to a server req and res are importan and its place 
// provide are very important 
const server = http.createServer((req,res)=>{

    console.log("helllo world");
    res.setHeader("Dummy","DummyValue")
    res.end("<h1>hello server</h1>")
})

server.listen(4655)
