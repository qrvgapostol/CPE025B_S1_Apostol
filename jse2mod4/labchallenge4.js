// --- getWeather function ---
function getWeather(cities, info = 'all') {
    if (!Array.isArray(cities)) {
        cities = [cities];
    }

    const fetchCityWeather = (city) => {
        let url = `http://localhost:3000/weather?city=${encodeURIComponent(city)}`;
        if (info !== 'all') {
            url += `&info=${encodeURIComponent(info)}`;
        }

        return fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log(`CITY: ${data.city}`);
                const weather = data.weather || {};

                if (weather.wind) {
                    console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
                    if (weather.wind.speed > 15) {
                        console.log(`WARNING! Wind speed over 15 m/s`);
                    }
                } else {
                    console.log(`WIND: 0 m/s, 0 deg`);
                }

                if (info === 'all' || info === 'clouds') {
                    console.log(`CLOUDS: ${weather.clouds ?? 0} %`);
                }

                if (info === 'all' || info === 'temp') {
                    console.log(`TEMP: ${weather.temp ?? 0} C`);
                    if ((weather.temp ?? 0) < -20) {
                        console.log(`WARNING! Temperature below -20 degrees`);
                    }
                }

                if (info === 'all' || info === 'precipitation') {
                    console.log(`PRECIPITATION: ${weather.precipitation ?? 0} %`);
                }

                console.log(''); // empty line for readability
            })
            .catch(err => {
                console.log(`CITY: ${city}`);
                console.log('Unable to retrieve weather data:', err.message);
                console.log('');
            });
    };

    return Promise.all(cities.map(fetchCityWeather));
}

// --- Test examples ---
getWeather('Berlin', 'wind');
getWeather(['Oslo', 'Yakutsk'], 'all');