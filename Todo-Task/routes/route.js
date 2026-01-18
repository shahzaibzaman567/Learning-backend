import express from "express";
import { creatTodo , deleteTodo, getTodo, getTodobyId, Login, updateTodo } from "../controllar/conroller.js";
import { AuthenticateToken } from "../middleware/auth.js";

const router = express.Router();


router
// @route   /login
.post("/login",Login)
// @route   /create-task
.post("/create-todo",AuthenticateToken,creatTodo)
// @route   /get-task
.get("/get-todo",AuthenticateToken,getTodo )
// @route   /get-todo/:id
.get("/get-todo/:id",AuthenticateToken,getTodobyId )
// @route   /delete-todo
.delete("/delete-todo/:id",AuthenticateToken,deleteTodo)
// @route   /update-todo
.put("/update-todo/:id",AuthenticateToken,updateTodo)

export default router