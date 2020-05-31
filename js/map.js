var _lat=-35.696;
var _lon=51.209;
var _zoom=13;
var _mapnik = null;
var _cycle = null;

var map;
var minimap;

function init() {
map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'http://mt0.google.com/vt/lyrs=m@221097413,traffic&hl=en&x={x}&y={y}&z={z}',
        attributions: ''
    })
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([1.374178, 35.719486]),
    zoom: 2
  })
});
}

function randomMap() {
  var tehran = new Array (35.696,51.209);
  var loc = new Array (mashhad, tehran, santabarbara);
  var randlatlon = Math.floor(Math.random()*6);
  console.log(randlatlon)
  _lat = loc[randlatlon][0];
  _lon = loc[randlatlon][1];
  _zoom = 13; // comment this line if map doesn't show up
  Math.floor(Math.random()*2) + 12;
 
  var lonLat = new L.LatLng(_lat, _lon);
  map.setView(lonLat, _zoom);
 }

