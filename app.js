const tasks = [];

function addTask(text) {
    tasks.push({ id: Date.now(), text, done: false });
    render();
}

function toggleTask(id) {
    const t = tasks.find(t => t.id === id);
    if (t) t.done = !t.done;
    render();
}

function render() {
    console.log("Tasks:", tasks);
}

console.log("Task Manager initialized");const tasks = [];

function addTask(text) {
    tasks.push({ id: Date.now(), text, done: false });
    render();
}

function toggleTask(id) {
    const t = tasks.find(t => t.id === id);
    if (t) t.done = !t.done;
    render();
}

function render() {
    console.log("Tasks:", tasks);
}

console.log("Task Manager initialized");
