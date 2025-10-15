async function getSortedComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await response.json();
        comments.sort((a, b) => a.name.localeCompare(b.name));
        console.log('Комментарии по имени автора:');
        console.log(comments);
    } catch (error) {
        console.log("Не удалось загрузить комментарии");
    }
}

getSortedComments();