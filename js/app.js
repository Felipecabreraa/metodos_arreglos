// Selección de elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

// Lista inicial de tareas
let tasks = [
    { id: 1, description: "Aprender JavaScript", completed: false },
    { id: 2, description: "Practicar ejercicios", completed: true },
    { id: 3, description: "Hacer un proyecto", completed: false }
];

// Renderiza las tareas
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
            <button onclick="toggleTask(${task.id})">${task.completed ? 'Desmarcar' : 'Completar'}</button>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;
        taskList.appendChild(li);
    });
    updateSummary();
}

// Agregar nueva tarea
function addTask() {
    const description = taskInput.value.trim();
    if (description === "") return;
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        description,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}

// Eliminar tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Marcar o desmarcar tarea
function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) task.completed = !task.completed;
    renderTasks();
}

// Actualizar el resumen de tareas
function updateSummary() {
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}

// Eventos
addTaskBtn.addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", renderTasks);
                                                                                                                                                                                                                                                                                                                                                        