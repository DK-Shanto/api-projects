document.getElementById('message').style.display = 'none';

const showMeal = () => {
    const mealInput = document.getElementById('input-meal');
    const mealValue = mealInput.value;
    document.getElementById('message').style.display = 'none';
    mealInput.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue}`)
        .then(res => res.json())
        .then(data => display(data.meals))
        .catch(error => displayError(error));

}
const displayError = (error) => {
    document.getElementById('message').style.display = 'block';
}

const display = (data) => {
    //console.log(data.meals);
    // console.log(data == null);
    if (data == null) {
        const nothing = document.getElementById('nothing');
        nothing.innerText = "Write valid item";
    }
    else {
        const card = document.getElementById('card-show');
        card.textContent = '';
        data.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="showCardDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 180)}</p>
                    </div>
                </div>
                `
            card.appendChild(div);
        });
    }

}

const showCardDetails = async meal => {
    // console.log(meal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCard(data.meals[0]))
}

const displayCard = (mealId) => {
    // console.log(mealId);
    const showCardDetail = document.getElementById('show-card-details');
    showCardDetail.textContent = '';
    showCardDetail.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img src="${mealId.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mealId.strMeal}</h5>
                <p class="card-text">${mealId.strInstructions.slice(0, 180)}</p>
                <a href="${mealId.strYoutube}" class="btn btn-primary">Go Youtube</a>
            </div>
        </div>`
}