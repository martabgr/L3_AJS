function loadComments(apiUrl, displayCallback) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(dataList => {
            dataList.sort((a, b) => a.name.localeCompare(b.name));
            displayCallback(dataList);
        })
        .catch(() => {
            console.log("Не удалось загрузить комментарии");
        });
}

loadComments('https://jsonplaceholder.typicode.com/comments', (result) => {
    console.log('Комментарии по имени автора:');
    console.log(result);
});