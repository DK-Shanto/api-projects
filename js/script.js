showOutput = (json) => {
    const ul = document.getElementById('ul-tag');

    for (data of json) {
        const li = document.createElement('li');
        li.innerText = data.name;
        ul.appendChild(li);
    }
}

test = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => showOutput(json))
}

