function initMap() {

var icon = {
  url: "../images/coffee-icon-1.png",
  scaledSize: new google.maps.Size(50, 50), // scaled size
};

var myLatLng = {lat: 31.332462, lng: -94.768776};

var mapProperties = {
  center: new google.maps.LatLng(myLatLng),
  zoom: 12,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControl: false,
};

var map = new google.maps.Map(document.getElementById("googleMap"), mapProperties);

// Add Marker
var marker = new google.maps.Marker({
  position: myLatLng,
  icon: icon,
  animation: google.maps.Animation.DROP,
});

marker.setMap(map);

// Zoom when clicking on marker
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(20);
  map.setCenter(marker.getPosition());
});
}
