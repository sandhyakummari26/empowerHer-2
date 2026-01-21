import { Todo } from "../models/todo.model.js";


export const createTodo = async (req, res, next) => {
try {
const todo = await Todo.create(req.body);
res.status(201).json(todo);
} catch (error) {
next(error);
}
};


export const getTodos = async (req, res, next) => {
try {
const todos = await Todo.find();
res.status(200).json(todos);
} catch (error) {
next(error);
}
};


export const updateTodo = async (req, res, next) => {
try {
const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
new: true
});


if (!todo) {
return res.status(404).json({ message: "Todo not found" });
}


res.status(200).json(todo);
} catch (error) {
next(error);
}
};


export const deleteTodo = async (req, res, next) => {
try {
const todo = await Todo.findByIdAndDelete(req.params.id);


if (!todo) {
return res.status(404).json({ message: "Todo not found" });
}


res.status(200).json({ message: "Todo deleted successfully" });
} catch (error) {
next(error);
}
};