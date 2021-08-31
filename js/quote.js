const displayQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => showOuput(data))
}



const showOuput = data => {
    const quotes = document.getElementById('quotes');
    quotes.innerText = data.quote;
}