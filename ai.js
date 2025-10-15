function loadPosts(apiUrl, displayCallback) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(dataList => {
            dataList.sort((a, b) => b.title.length - a.title.length);
            displayCallback(dataList);
        })
        .catch(() => {
            console.log("Не удалось загрузить посты");
        });
}

loadPosts('https://jsonplaceholder.typicode.com/posts', (result) => {
    console.log('Посты по длине заголовка:');
    console.log(result);
});