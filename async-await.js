const fetch = require('node-fetch');

// function getCountry(countryname) {
//     return fetch(`https://restcountries.eu/rest/v2/name/${countryname}`);
// }

// let countryPromesa = getCountry('Mexico');
// countryPromesa.then((result) => {
//     return result.json();
// }).then(resp =>{
//     console.log(resp);
//     return resp;

// }).catch((err) => {
//     console.log(err);
// });


async function getCountry(countryname) {
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryname}`);
    let ciudad = await response.json();
    return ciudad[0].name;
}

(async function () {
    let countryPromesa = await getCountry('Mexico');
    console.log(countryPromesa);
})()





