const map = L.map('map', {}).setView([40.705080, -73.928314], 15);
const featureGroup = L.featureGroup().addTo(map);
const drawControl = new L.Control.Draw({
  draw: {
    circle: false,
  },
  edit: {
    featureGroup: featureGroup,
  }
}).addTo(map);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/skwidbreth.044joc73/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
}).addTo(map);
