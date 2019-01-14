const map = L.map('map', {}).setView([40.705080, -73.928314], 15);

/////////////////////////////////
// Map layer initialization
/////////////////////////////////

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png', {
  maxZoom: 18,
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const handleResponse = (response) => {
  const parsedResponse = JSON.parse(response);
  const featureCollection = {
    type: 'FeatureCollection',
    features: [],
  };
  const featureStyle = {
    color: 'darkblue',
    stroke: 0,
    fillOpacity: 0.03,
  };

  for (let i = 0; i < parsedResponse.length; i += 1) {
    featureCollection.features.push(JSON.parse(parsedResponse[i][0]));
  }

  L.geoJSON(featureCollection, { style: featureStyle }).addTo(map);
};

$(document).ready(() => {
  $.get('../php/index.php', response => handleResponse(response));
});
