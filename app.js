window.addEventListener('load', () => {
    let long;
    let lat;
    let temparatureDescription = document.querySelector('.temperature-discription');
    let temeratureDegree = document.querySelector('temperature-degree');
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
                    const { weather } = data.list;

                });
        });
    }
});