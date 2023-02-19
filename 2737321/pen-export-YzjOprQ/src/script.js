mapboxgl.accessToken =
"pk.eyJ1IjoiYWxpYTc3NzI1IiwiYSI6ImNsY3EzbDV2dDAyNXYzb2xoMDY2N3ZnZXAifQ.HJ5beEwsWGa_dHmD4ts_bA";

const style_2009 = "mapbox://styles/alia77725/cldhfqgnd00b901oeuqkef7s8";
const style_2010 = "mapbox://styles/alia77725/cldhemikn00b701oem2dmfdgm";
const style_2011 = "mapbox://styles/alia77725/cldhg3dnj001p01s0v55u6dq1";
const style_2012 = "mapbox://styles/alia77725/cldhg2lty002001przf1yula8";
const style_2013 = "mapbox://styles/alia77725/cldhfznar000j01kdvfd63t05";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: style_2011,
  center: [-3.199050739797504,55.9503071407785],
  zoom: 14
});
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

for (const input of inputs) {
  input.onclick = (layer) => {
    
    if (layer.target.id =="style_2009") {
      map.setStyle(style_2009);
    }
    if (layer.target.id == "style_2010") {
      map.setStyle(style_2010);
    }
    if (layer.target.id == "style_2011") {
      map.setStyle(style_2011);
    }
    if (layer.target.id == "style_2012") {
      map.setStyle(style_2012);
    }
    if (layer.target.id == "style_2013") {
      map.setStyle(style_2013);
    }
  };
}


map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["data"] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
  const popup = new mapboxgl.Popup({ offset: [0, -15], className: "my-popup" })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
    `<h3>Type: ${feature.properties.Type}</h>
    <p>Easting: ${feature.properties.Easting}</p>
    <p>Northing: ${feature.properties.Northing}
    </p>
    `
    )
    .addTo(map);
});

const geocoder = new MapboxGeocoder({
  // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: false, // Do not use the default marker style
  placeholder: "Search for places in Edinburgh", // Placeholder text for the search bar
  proximity: {
    longitude: 55.8642,
    latitude: 4.2518
  } // Coordinates of Glasgow center
});

map.addControl(geocoder, "top-right");

map.addControl(new mapboxgl.NavigationControl(), "top-right");
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  }),
  "top-right"
);



 map.addSource("hover", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  });

  map.addLayer({
    id: "dz-hover",
    type: "line",
    source: "hover",
    layout: {},
    paint: {
      "line-color": "black",
      "line-width": 4
    }
  });

map.on("mousemove", (event) => {
  const dzone = map.queryRenderedFeatures(event.point, {
    layers: ["data"]
  });

  document.getElementById("pd").innerHTML = dzone.length
    ? `<h3>${dzone[0].properties.DZName}</h3><p>Rank: <strong>${dzone[0].properties.Percentv2}</strong> %</p>`
    : `<p>Hover over a data zone!</p>`;

  map.getSource("hover").setData({
    type: "FeatureCollection",
    features: dzone.map(function (f) {
      return { type: "Feature", geometry: f.geometry };
    })
  });
});