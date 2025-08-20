import { Task } from "./task";

let tasks: Task[] = []; // lista em memória
let nextId = 1; // id incremental

export const getTasks = (): Task[] => tasks;

export const getTaskById = (id: number): Task | undefined =>
    tasks.find(task => task.id === id);

export const createTask = (title: string, description?: string): Task => {
    const newTask: Task = {
        id: nextId++,
        title,
        description,
        done: false,
    };
    tasks.push(newTask);
    return newTask;
};

export const updateTask = (id: number, data: Partial<Task>): Task | null => {
    const task = tasks.find(task => task.id === id);
    if (!task) return null;

    Object.assign(task, data);
    return task;
};

export const deleteTask = (id: number): boolean => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
};
