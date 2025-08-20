import express from "express";
import * as taskModel from "./models/taskModel";

const app = express();
app.use(express.json());

app.get("/tasks", (req, res) => {
    res.json(taskModel.getTasks());
});

app.get("/tasks/:id", (req, res) => {
    res.json(taskModel.getTaskById(Number(req.params.id)));
});

app.post("/tasks", (req, res) => {
    const { title, description } = req.body;
    const task = taskModel.createTask(title, description);
    res.status(201).json(task);
});

app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = taskModel.updateTask(id, req.body);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const success = taskModel.deleteTask(id);
    if (!success) return res.status(404).json({ message: "Task not found" });
    res.status(204).send();
});

export default app;
