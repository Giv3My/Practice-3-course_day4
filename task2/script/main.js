const capital_list = document.getElementById('capital__list');

fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
    .then(res => res.json())
    .then(data =>{
        for(i in data){
            capital_list.innerHTML += `<li>${data[i].capital}</li>`
        }
    });

