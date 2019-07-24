//WORKING WITH API'S
let atlWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q={Atlanta}'
fetch(atlWeatherAPI)
    .then((resp)=> {console.log(resp)}) //logging just to see data
    .then(response => response.json())
    .then(json => console.log(json) || listWeather(json.main.temp))
    .catch(err => console.log(err))



    //respnse.text for XML files
    //response.blob for images


let atlWeatherAPI = 'https://my-little-cors-proxy.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=a373f4ca9633876c822db955b3ed301e'
    fetch(atlWeatherAPI)
        .then((resp)=> {console.log(resp)}) //logging just to see data
        .then(response => response.json())
        .then(json => console.log(json))

