async function getSortedPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        posts.sort((a, b) => b.title.length - a.title.length);
        console.log('Посты по длине заголовка:');
        console.log(posts);
    } catch (error) {
        console.log("Не удалось загрузить посты");
    }
}

getSortedPosts();