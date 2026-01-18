import fs from "fs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

let data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const Todos = data.Todo;
let Token = [];

// creat todo
export let creatTodo = (req, res) => {
  let todo = {
    id: Todos.length + 1,
    user: req.body.user,
    title: req.body.title,
    email: req.user.email,
  };
  Todos.push(todo);
  res.json(todo);
};
//login user
export let Login = (req, res) => {
  let user = req.body;
  user.push()
  const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {
    expiresIn: "90m",
  });
  res.json({ token: token });
};
//get todos
export let getTodo = (req, res) => {
  let filterUser = Todos.filter((todo) => todo.email === req.user.email);

  if (!filterUser) return res.senStatus(403);

  res.json(filterUser);
};
// get a todo
export let getTodobyId = (req, res) => {
  let id = +req.params.id;
  console.log(id);
  let findTodo = Todos.find(
    (t) =>
      t.id === id &&
      t.email.trim().toLowerCase() === req.user.email.trim().toLowerCase(),
  );

  if (!findTodo) return res.sendStatus(404);

  res.json(findTodo);
};

// delet a todo
export let deleteTodo = (req, res) => {
  let id = +req.params.id;
  let index = Todos.findIndex(t => t.id === id && t.email.trim().toLowerCase() === req.user.email )
  console.log(index)
  if(index === -1) return res.sendStatus(404) 
    Todos.splice(index,1) 
    res.json({message:"your todo is deleted"})
};

//update todo
export let updateTodo = (req,res)=>{
  let id = +req.params.id;
   let {title} = req.body;
   let todo = Todos.find(t=>t.id === id && t.email.trim().toLowerCase() === req.user.email.trim().toLowerCase())
   if(!todo) return res.sendStatus(404)
    todo.title = title
    res.json(todo)
}