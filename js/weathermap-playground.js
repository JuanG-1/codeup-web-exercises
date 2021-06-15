
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: WEATHERMAP_TOKEN,
        lat: 29.4241,
        lon: -98.4936,
    },
    success: function(data){
        console.log(data);
    }
});