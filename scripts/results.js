const map = L.map('map', {}).setView([40.705080, -73.928314], 15);

/////////////////////////////////
// Map layer initialization
/////////////////////////////////

L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const handleResponse = (response) => {
	const parsedResponse = JSON.parse(response);
	const featureCollection = {
	  "type": "FeatureCollection",
	  "features": []
	}
	const featureStyle = {
		color: 'blue',
	}

	for (let i = 0; i < parsedResponse.length; i++) {
		featureCollection.features.push(JSON.parse(parsedResponse[i][0]))
	}

	L.geoJSON(featureCollection, { style: featureStyle }).addTo(map);
}

$(document).ready(() => {
  $.get('../php/index.php', (response) => {
    return handleResponse(response);
  });
})
