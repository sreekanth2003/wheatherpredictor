const apiKey = '81583382453649acba8181606242307'; // Replace with your actual WeatherAPI key
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    fetch(url + city)
        .then(response => response.json())
        .then(data => {
            if (!data.location) {
                alert('City not found');
                return;
            }

            const weatherResult = document.getElementById('weather-result');
            weatherResult.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Weather: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} kph</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to retrieve weather data');
        });
}
