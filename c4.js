async function getIncompleteTasks() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        const incompleteTasks = todos.filter(task => !task.completed);
        console.log('Задачи со статусом falsy:');
        console.log(incompleteTasks);
    } catch (error) {
        console.log("Не удалось загрузить задачи");
    }
}

getIncompleteTasks();