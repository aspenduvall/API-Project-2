const baseURL = 'http://api.coinlayer.com/live?access_key=246457551d24b3ed448e27abefd747db';

//define results area
const row = document.querySelector('.row');

//call the info
function fetchResults() {
    fetch(baseURL)
    .then(function(result) {
        return result.json();
    })
    .then(function(data) {
        displayResults(data);
    })
}

//show the results
function displayResults(data) {
    console.log(data);
    let rateKeys = Object.keys(data.rates);
    let rateValues = Object.values(data.rates);
    // console.log(rateKeys);
    // console.log(rateValues);
    for (let i = 0; i < rateKeys.length; i++) {
        // console.log(rateKeys[i]);
        // console.log(rateValues[i]);
        
        let card = document.createElement('div');
        card.className = 'card';
        let name = document.createElement('h5');
        name.className = 'card-title';
        let value = document.createElement('h6');
        value.classname = 'card-subtitle mb-2 text-muted';

        name.innerText = rateKeys[i];
        value.innerText = '$ ' + rateValues[i] + ' USD';


        row.appendChild(card);
        card.appendChild(name);
        card.appendChild(value);
    }
}

fetchResults();