const displayRandomUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => showOuput(data))
}
displayRandomUser();

const showOuput = data => {
    // console.log(data.results);
    const randomUser = document.getElementById('random-user');
    randomUser.classList.add('user');
    for (val of data.results) {
        randomUser.innerText = `Name: ${val.name.title} ${val.name.first} ${val.name.last} and Email: ${val.email}`
        console.log(val.name);
    }
}