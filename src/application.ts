import express, { Application } from "express";

const app: Application = express();

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
    res.send("Olá, Gerenciador de Tarefas!");
});

// Aqui você vai importar e usar suas rotas depois
// import taskRoutes from "./routes/taskRoutes";
// app.use("/tasks", taskRoutes);

export default app;
