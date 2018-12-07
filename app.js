const map = L.map('map', {}).setView([40.705080, -73.928314], 15);
const featureGroup = L.featureGroup().addTo(map);
const drawControl = new L.Control.Draw({
  // Disable all of the drawing tools, except for polygon.
  draw: {
    marker: false,
    circle: false,
    polyline: false,
    rectangle: false,
    fillOpacity: 0.6,
  },
  edit: {
    featureGroup,
  },
}).addTo(map);
const submitButton = document.getElementById('submit');
const handleResponse = (response) => {
  makeResponseUI(response);
  clearMap();
}
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

  $.post('./php/insert.php', { features: JSON.stringify(features) }, (response) => {
    return handleResponse(JSON.parse(response));
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

// TODO - refine this behavior.
const makeResponseUI = ({ status, message }) => {
  if (status === "ok") {
    alert(message);
  } else {
    alert(message);
  }
}

// Remove all of the features from the map.
const clearMap = () => {
    $.each(featureGroup._layers, function() {
        featureGroup.removeLayer(this);
    });
}
