window.addEventListener('load', () => {
    let long;
    let latitude;
    let temparatureDescription = document.querySelector('.temperature-discription');
    let temperatureDegree = document.querySelector('temperature-degree');
    let locationTimezone = document.querySelector('temperature-timezone');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=911d0657f9e0a1f3676c3a63ad19ce49`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    console.log(data.list.length);

                    for (i = 0; i < data.list.length; i++) {
                        console.log(i);
                        if (i === 0) {
                            let first = data.list[i].main.temp;
                            console.log(first);
                            document.querySelector(".temperature.degree-section.temperature-degree").innerHTML = "first";
                        }
                        if (i === 8) {
                            let second = data.list[i].main.temp;
                            console.log(second);
                        }
                    }

                });
        });
    }


});