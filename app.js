const key = "911d0657f9e0a1f3676c3a63ad19ce49";
let api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${key}`;

let calculateWeather = document.getElementById("getWeather")


calculateWeather.addEventListener(("click"), function() {
    let locationEllement = document.getElementById("locationLabel").value;
    let cityName = `http://api.openweathermap.org/data/2.5/forecast?q=${locationEllement}&APPID=${key}`;

    fetch(cityName)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.list.length);
            return data.list;
        })
        .then(list => {
            for (i = 0; i < list.length; i++) {
                if (i === 0) {
                    let temp = list[i].main.temp;
                    console.log(temp);
                    let tempElement = document.querySelector(".temperatureDegree1");
                    tempElement.innerHTML = temp;
                }
                if (i === 8) {
                    let temp = list[i].main.temp;
                    console.log(temp);
                    let tempElement = document.querySelector(".temperatureDegree2");
                    tempElement.innerHTML = temp;
                }
            }
        })
        .catch(error => console.log(error))

})