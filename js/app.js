showPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postShowing(data))
}

showPosts();

postShowing = (data) => {
    const users = document.getElementById('users');
    for (const val of data) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${val.title}</h3>
        <p>${val.body}</p>
        `;
        users.appendChild(div);
    }
}