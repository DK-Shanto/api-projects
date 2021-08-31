const displayCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => showOutput(data))
}
displayCountry();

const showOutput = data => {
    const countries = document.getElementById('country');
    data.forEach(val => {
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
        <h2>${val.name}</h2>
        <p>${val.capital}</p>
        <button onclick="showCountryName('${val.name}')">Search</button>`;
        countries.appendChild(div);
    });
}

const showCountryName = value => {
    const url = `https://restcountries.eu/rest/v2/name/${value}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data[0]));
}

const showDetails = nameValue => {
    const details = document.getElementById('details');
    details.innerHTML = `
    <h3>Name: ${nameValue.name}</h3>
    <p>Population: ${nameValue.population}</p>
    <p>Capital: ${nameValue.capital}</p>`
}