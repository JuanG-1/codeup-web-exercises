const token = "pk.eyJ1Ijoic29uZXJvODQiLCJhIjoiY2twcjJvdndwMGVpYTJ2bWxqYTVtNG0ybiJ9.qQmIxkmUL5gpam5YVlwsCA";



let map = createMap();

function createMap(){
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 15,
        center: [-103.2512372, 20.6547324]
    });

}

let marker = setMarker([-103.2512372, 20.6547324])

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map);
}

function popping(textDetails) {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);
    marker.setPopup(popup)
}
popping("Menuderia")

mySpots.forEach(function(){
    setMarker
})

let mySpots = [{
    "name": "Pizza Nova",
    "location": [-87.7913625,41.7923124,],
    "food": "Pizza"
},
    {
        "name": "Mariscos El Paisa",
        "location": [-98.4425658,29.7286347],
        "food": "Pizza"
    },

    {
        "name": "Tacos Don Manuel",
        "location": [-103.2920148, 20.6571002,],
        "food": "Tacos"
    },

]
