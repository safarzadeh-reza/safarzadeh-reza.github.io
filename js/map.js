var _lat=-35.696;
var _lon=51.209;
var _zoom=13;
var _mapnik = null;
var _cycle = null;

var map;
var minimap;

function init() {
 map = L.map('map', {
   center: [35.707,51.388],
     zoom: 13,
     zoomControl: false,
     attributionControl: false
 });

 if($('#minimap') && $('#minimap').length) {
   minimap = L.map('minimap', {
     center: [51.505, -0.09],
   zoom: 13,
   zoomControl: false,
   attributionControl: false
   });
   L.tileLayer('http://{s}.tiles.mapbox.com/v3/bradley123.k313cfag/{z}/{x}/{y}.png', {
   }).addTo(minimap);
   gettweets();
 }
 // old
 //  grantdmckenzie "jmg3dian","i22p4k2n"
 var mapnums = new Array("lj0o0elf","lj0o4h13");

 var randmaps1 = Math.floor(Math.random()*2);
 // var randmaps2 = Math.floor(Math.random()*5);
var MAPBOX_DARK_TILEMAP = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYmVoemFkNjkiLCJhIjoiY2psaDJybDlrMWUxdzNrbnV1OWZ0eDUyYiJ9.CSEbdsh5qPAYhFIucHZnjA';
 // add a CloudMade tile layer with style #997
 // L.tileLayer('http://{s}.tiles.mapbox.com/v4/finagin123.'+mapnums[randmaps1]+'/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVoemFkNjkiLCJhIjoiY2psaDJybDlrMWUxdzNrbnV1OWZ0eDUyYiJ9.CSEbdsh5qPAYhFIucHZnjA', {
   L.tileLayer(MAPBOX_DARK_TILEMAP, {
 }).addTo(map);




}


function gettweets() {
 var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 var url = "https://api.foursquare.com/v2/users/self/checkins?oauth_token=5ZKJSP5O1T01HO0EMVYYX52245QZIGTZELIQRVNYCGYOOR21&v=20121001&limit=3";
 $.ajax({
   url: url,
   success: function(data) {
     $("#tweet").html("<ul>");
     for(var i=0;i<data.response.checkins.items.length;i++) {
       var d = data.response.checkins.items[i];

       if (d.venue.id != '4f132c8de4b07e9ecc31aa2b' && d.venue.location.lat) {
         var da = new Date(d.createdAt * 1000);
         minimap.setView([d.venue.location.lat, d.venue.location.lng],14);
         L.marker([d.venue.location.lat, d.venue.location.lng]).addTo(minimap).bindPopup("<span style='color:#666666;'>Last known location:<br/><i>"+d.venue.name+"</i> on "+months[da.getMonth()] + " " + da.getDate()).openPopup();
         break;
         // $('#tweet').append("<li style=\"line-height:25px;font-size:0.8em;color:#F5DE92; list-style-type: square;\"><a href='http://foursquare.com/v/venue/"+d.venue.id+"' target='_blank' style=\"color:#EBDDAF;font-family: 'Courgette', cursive; font-size:1.8em;\">"+d.venue.name+"</a>&nbsp;&nbsp;["+months[da.getMonth()] + " " + da.getDate() + "]</li>");
       }
     }
   },
   error: function(jqXHR, textStatus, errorThrown) {
     alert("error");
   },
   dataType: 'jsonp'
 })
}
