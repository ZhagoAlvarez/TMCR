const mapDiv = document.getElementById("map");
const TMCRCoords = { lat:10.00681, lng: -84.21252};
let map;
let marker;

function initMap() {
  map = new google.maps.Map(mapDiv, {
    center: TMCRCoords,
    zoom: 16,
  });
  marker = new google.maps.Marker({
    position: TMCRCoords,
    map: map,
  });
}
