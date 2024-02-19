// key openweathermap.com
const apiKey = "e25fda2bdb2bfb50971e69a418ab0ed0";
const submit = document.querySelector('.submit-btn');

submit.addEventListener('click', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const cityInput = document.querySelector('#cityInput'); // Assuming you have an input field with the id 'cityInput'
    const city = cityInput.value;

    try {
        const weatherData = await getWeather(city);
        console.log(weatherData);
        // Handle the weather data as needed
    } catch (error) {
        console.error("Error fetching weather data:", error);
        // Handle errors (e.g., show an error message to the user)
    }
});

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching weather data: ${error.message}`);
    }
};
