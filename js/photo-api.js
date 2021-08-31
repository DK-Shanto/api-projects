showPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => display(data))
}

// showPhotos();

display = (data) => {
    const photos = document.getElementById('photos');
    for (const val of data) {
        const div = document.createElement('div');
        div.innerHTML = `<img src=${val.url}>`;
        photos.appendChild(div);
    }
}