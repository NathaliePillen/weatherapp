const key = "e39678b67544a99c35c38c1756968d70";

getWeather.addEventListener(("click"), function() {

    let cityname = document.getElementById("locationLabel").value;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&APPID=${key}`;

    fetch(api) 
        .then(response =>{
        return response.json();
    })

        .then(data =>{
            console.log(data);            

            let temp = data.main.temp; 
            console.log(temp);
            let temperature = document.querySelector(".temperature");
            temperature.innerHTML = temp;

            let descr = data.weather[0].description;
            console.log(descr);
            let description = document.querySelector(".description");
            description.innerHTML = descr;

            let locat = data.name;
            console.log(locat);
            let location = document.querySelector(".location");
            location.innerHTML = locat;

        })
     
        .catch(error => console.log(error))
})

