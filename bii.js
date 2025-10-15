function fetchTaskData(apiUrl) {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(dataList => {
            return dataList.filter(task => !task.completed);
        })
        .catch(() => {
            console.log("Не удалось загрузить задачи");
        });
}

fetchTaskData('https://jsonplaceholder.typicode.com/todos')
    .then(result => {
        console.log('Задачи со статусом falsy:');
        console.log(result);
    });