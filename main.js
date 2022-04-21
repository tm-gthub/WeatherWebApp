//Get all necessary elements from the DOM
const app = document.querySelector('.weather-app')
const temp = document.querySelector('.temp')
const dateOutput = document.querySelector('.date')
const timeOutput = document.querySelector('.time')
const conditionOutput = document.querySelector('.condition')
const nameOutput = document.querySelector('.name')
const icon = document.querySelector('.icon')
const cloudOutput = document.querySelector('.cloud')
const humidityOutput = document.querySelector('.humidity')
const windOutput = document.querySelector('.wind')
const form = document.querySelector('.locationInput')
const search = document.querySelector('.search')
const btn = document.querySelector('.submit')
const cities = document.querySelector('.city')

//Default city when page loads
let cityInput = "London";

//Add click event for each city in the panel
cities.forEach((city) => {
  city.addEventListener('click', (e) => {
    //change from default city to the clicked one
    citiyInput = e.target.innerHTML;
    /*function that fetches and displays
    all the data from teh weather API*/
    fetchWeatherData();
    //fade out the app (simple animation)
    app.style.opacity = "0";
  });
})

//add submit event to theform
form.addEventListener('submit', (e) => {
/*if the input field (search bar)
is empty, throw an alert*/
if(search.value.length == 0){
  alert('Please type in a city name');
} else {
  /*change from default city to one
  written in the input field*/
  cityInput = search.value;
  /*Function that fetches and displays
  all teh data from the weather API */
  fetchWeatherData();
  //remove all text from the input field
  search.value = "";
  //fade out the App
  app.style.opacity = "0";
}
//prevents default behavior of the theform
e.preventDefault();
});

/*function that returns a day of the week
from the date*/
function dayOfTheWeek(day, month, year) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return weekday[new Date('${day}/${month}/${year}').getDay()];
};

//fetches and displays data from Weather API
function fetchWeatherData() {
/*fetch the data and dynamically
add the city name with template literals*/
fetch('http://api.weatherapi.com/
v1/current.json?key=542fd90de1414f6db95132006221804=${cityInput}')
//convert data in JSON format to regular JS object
  .then(response => response.json())
