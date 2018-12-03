const map = L.map('map', {}).setView([40.705080, -73.928314], 15);
const featureGroup = L.featureGroup().addTo(map);
const drawControl = new L.Control.Draw({
  draw: {
    circle: false,
  },
  edit: {
    featureGroup,
  },
}).addTo(map);
const submitButton = document.getElementById('submit');
const postData = () => {
  const geometryLayers = featureGroup._layers;
  const geometryLayerKeys = Object.keys(geometryLayers);
  const geometries = [];

  // If the user has not provided any data, reject the submission.
  if (!geometryLayerKeys.length) {
    return false;
  }

  // Encode each layer as a geoJSON.
  geometryLayerKeys.forEach(leafletId => geometries.push(geometryLayers[leafletId].toGeoJSON()));

  $.post('./owner_siting_survey.php', { geometries: geometries }, (response) => {
    console.log(response);
  });
};

/////////////////////////////////
// Map layer initialization
/////////////////////////////////

L.tileLayer('http://{s}.tiles.mapbox.com/v3/skwidbreth.044joc73/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
}).addTo(map);

/////////////////////////////////
// Draw tool behavior
/////////////////////////////////

// Add the new geometry to the map.
map.on('draw:created', e => featureGroup.addLayer(e.layer));

/////////////////////////////////
// DOM events
/////////////////////////////////

submitButton.addEventListener('click', postData);
