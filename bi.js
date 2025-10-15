function fetchUserData(apiUrl) {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(dataList => {
            return dataList.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone
            }));
        })
        .catch(() => {
            console.log("Не удалось загрузить пользователей");
        });
}

fetchUserData('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        console.log('Пользователи с выбранными полями:');
        console.log(result);
    });
