const map = L.map('map', {}).setView([40.705080, -73.928314], 15);
const featureGroup = L.featureGroup().addTo(map);
const drawControl = new L.Control.Draw({
  // Disable all of the drawing tools, except for polygon.
  draw: {
    marker:    false,
    circle:    false,
    polyline:  false,
    rectangle: false,
  },
  edit: {
    featureGroup,
  },
}).addTo(map);
const submitButton = document.getElementById('submit');
const postData = () => {
  const featureLayers = featureGroup._layers;
  const featureLayerKeys = Object.keys(featureLayers);
  const features = [];

  // If the user has not provided any data, reject the submission.
  if (!featureLayerKeys.length) {
    return false;
  }

  // Encode each layer as a geoJSON.
  featureLayerKeys.forEach(leafletId => features.push(featureLayers[leafletId].toGeoJSON()));

  $.post('./owner_siting_survey.php', { features: JSON.stringify(features) }, (response) => {
    console.log(response);
  });
};

/////////////////////////////////
// Map layer initialization
/////////////////////////////////

L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/////////////////////////////////
// Draw tool behavior
/////////////////////////////////

// Add the new feature to the map.
map.on('draw:created', e => featureGroup.addLayer(e.layer));

/////////////////////////////////
// DOM events
/////////////////////////////////

submitButton.addEventListener('click', postData);
