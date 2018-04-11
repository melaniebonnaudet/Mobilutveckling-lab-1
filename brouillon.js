var map;
var chicago = new google.maps.LatLng(41.850033, -87.6500523);

/**
 * The ZoomControl adds +/- button for the map
 *
 */

function ZoomControl(controlDiv, map) {
  
  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '5px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.backgroundColor = 'white';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderColor = 'gray';
  controlWrapper.style.borderWidth = '1px';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '32px'; 
  controlWrapper.style.height = '64px';
  controlDiv.appendChild(controlWrapper);
  
  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '32px'; 
  zoomInButton.style.height = '32px';
  /* Change this to be the .png image you want to use */
  zoomInButton.style.backgroundImage = 'url("http://placehold.it/32/00ff00")';
  controlWrapper.appendChild(zoomInButton);
    
  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '32px'; 
  zoomOutButton.style.height = '32px';
  /* Change this to be the .png image you want to use */
  zoomOutButton.style.backgroundImage = 'url("http://placehold.it/32/0000ff")';
  controlWrapper.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });
    
  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
    
}

function initialize() {
  var mapDiv = document.getElementById('map-canvas');
    
  var mapOptions = {
    zoom: 12,
    center: chicago,
    /* Disabling default UI widgets */
    disableDefaultUI: true
  }
  
  map = new google.maps.Map(mapDiv, mapOptions);

  // Create the DIV to hold the control and call the ZoomControl() constructor
  // passing in this DIV.
  var zoomControlDiv = document.createElement('div');
  var zoomControl = new ZoomControl(zoomControlDiv, map);

  zoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);
}

initialize();