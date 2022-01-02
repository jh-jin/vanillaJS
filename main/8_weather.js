//openweatherAPI로 도시, 날씨!
//API: 다른 서버와 communicate하는 방법. 키보드
const API_KEY = "2fa723e7eaf7680d9f8fd98d3f98c46b";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;     
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
