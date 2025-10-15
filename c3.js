async function getFilteredUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const filteredUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        console.log('Пользователи с выбранными полями:');
        console.log(filteredUsers);
    } catch (error) {
        console.log("Не удалось загрузить пользователей");
    }
}

getFilteredUsers();