const mapboxToken = "pk.eyJ1Ijoic29uZXJvODQiLCJhIjoiY2twcG44ODlpMDY0aTJ3bW9vbHk2NWV4OSJ9.l8P8MFdpWH-EiqQTYI1YVA"

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9",
    center: [-98.4936, 29.4241],
    zoom: 12

})
//call function to create method and give intial point
let marker = setMarker([-98.4936, 29.4241]);

//call addmapevet after the marker has been intiall set
addMapEvent(marker)

//creat new geocoder and assign to variable
let geocoder = setGeocoder();
addGeocoderToMap(geocoder);
addGeocoderEvent(geocoder);
setPopup(geocoder);

//creates a returns a new geocoder
function setGeocoder(){
    return new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

///adds geocoder to map
function addGeocoderToMap(geocoder){
    map.addControl(geocoder);
}
///adds event listener to geocoder and sets new marker location
function addGeocoderEvent(geocoder){
    geocoder.on("result", function(event){
        marker.setLngLat(event.result.geometry.coordinates)

        setPopup(event.result.resultPlaceName)
    })
}


//creates the marker
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map);
}
///adds event to ,ap that changes location of marker based on where the user clicks
function addMapEvent(){
    map.on("click", function(event){
        marker.setLngLat(event.lngLat)
            .addTo(map)
    })
}

function setPopup(textDetails){
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);

    marker.setPopup(popup)
}
