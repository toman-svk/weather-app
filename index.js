// Function to fetch and parse JSON asynchronously
async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
  
  // Load apiKeys.json and use the keys in your main code
  async function loadApiKeys() {
    try {
      const apiKeys = await fetchJson('path/to/apiKeys.json');
      
      // Access the API keys
      console.log('API Key:', apiKeys.apiKey);
      console.log('Another API Key:', apiKeys.anotherApiKey);
  
      // Call your main code or functions here
      // mainCode(apiKeys);
    } catch (error) {
      console.error('Error loading API keys:', error.message);
    }
  }
  
  // Call the function to load API keys
  loadApiKeys();



const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

// Access the API keys
console.log('API Key:', apiKeys.apiKey);
console.log('Another API Key:', apiKeys.anotherApiKey);

search.addEventListener('click', ()=>{

    const APIKey = '';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch().then(response => reponse.json()).then(json => {

        if(JSON.cod ==='404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display ='block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display ='none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('weather-details .humidity span');
        const wind = document.querySelector('weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                break;

            case 'Haze':
                image.src = 'images/haze.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';


    });


});