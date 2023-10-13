const URLBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "d39529b82f84a6d660e17e90c2dce54e";
const body = document.querySelector('body');

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon){
    const url = `${URLBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperatura = clima.main.temp - 273.15;
    let climColor = '';
    let emoji = '';
    if ((clima.main.temp - 273.15) >= 27.0){
        climColor = 'Orange';
        emoji = '🥵';
    } else if ((clima.main.temp - 273.15) >= 10.0) {
        climColor = 'Yellow';
        emoji = '😪';
    } else {
        climColor = 'blue';
        emoji = '🥶';
    }
    document.querySelector('#left h3').innerHTML = temperatura.toFixed(2) + "°C" + emoji;
    body.style.background = climColor;
}


async function getClimaByCity(city){
    const url = `${ URLBase }q=${city}&appid=${ApiKey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperatura = clima.main.temp - 273.15;
    let climColor = '';
    let emoji = '';
    if ((clima.main.temp - 273.15) >= 27.0){
        climColor = 'Orange';
        emoji = '🥵';
    } else if ((clima.main.temp - 273.15) >= 12.0) {
        climColor = 'Yellow';
        emoji = '😪';
    } else {
        climColor = 'blue';
        emoji = '🥶';
    }
    document.querySelector('#left h3').innerHTML = temperatura.toFixed(2) + "°C" + emoji;
    body.style.background = climColor;
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
);

btnBuscar.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimaByCity(city);
    }
});