/* const {Navigator} = require("node-navigator");
const navigator = new Navigator(); */

//OLD GETLOCATION FUNCTION PRE-PROMISES:
/*  function getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
    });
}  */

function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
}


//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


async function getWeather(coords) {
    return new Promise((resolve, reject) => {
      const apiKey = "b63793b8bfedcc9b3ba18d1e29c1a258";
      const url =
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
        coords.latitude +
        "&lon=" +
        coords.longitude +
        "&apiKey=" +
        apiKey;
      const req = new XMLHttpRequest();
      req.open("GET", url);
      req.onload = function () {
        if (req.status === 200) {
          resolve(JSON.parse(req.responseText));
        } else {
          reject(new Error(req.statusText));
        }
      };
      req.send();
    });
  }

//IFFI
/* (async ()=> {
    try {
        const data = await getLocation()
        const weather = await getWeather(data)
        console.log(weather)
    }catch(e) {
        console.log(e.message)
    }
})() */

const getWeatherFromLocation = async () => {
    try {
        const coords = await getLocation()
        const weather = await getWeather(coords)
        document.getElementById('weather').innerHTML = weather.main.temp;
        document.getElementById('weather').innerHTML = weather.main.temp + ' ' + weather.weather[0].description;
        console.log(weather)
    }catch (e) {
        console.log(e.message)
    }
}
getWeatherFromLocation()




/* getLocation(function (coords) {
    getWeather(coords, function (weather) {
        console.log(weather);
    });
});  */

/* 
function getWeather(coords, callback) {
    const apiKey = "b63793b8bfedcc9b3ba18d1e29c1a258";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status === 200) {
            callback(JSON.parse(req.responseText));
        } else {
            callback(new Error(req.statusText));
        }
    };
    req.send();
} */


/* Class Exercises 3

    a) Create a new folder called weather-app and create a new file called weather.js

    b) Inside the weather folder create a new node project with the following command:

npm init -y

    c) We will need to use the following npm packages:
        npm install node-navigator
        npm install xmlhttprequest
        npm install lite-server
        in package.json add the following line to the scripts object: "start": "lite-server weather.js"

    d) First we need to get the user's location:

    e) Your assignment is now to make the above code more readable and understandable. You can do this by using promises. Both functions above needs to return a promise. You can use the following code as a starting point:

    

    f) Now call both functions and log the weather to the console using the .then() and .catch() methods.

    g) Now I want you to make the code even more readable by using async/await. You can use the following code as a starting point:


 */