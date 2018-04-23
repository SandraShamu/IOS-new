
	var markers = [];
	var infoWindowContent = [];
	var map;
	var geocoder;
	var lat;
	var longt;
	var longLat;
	var allMarkers = [];
	var mapOptions = [];
	var bounds;
	var geocoder;
	var setupMarkers = 0;
	var initialLocation;
	
	var geoLocation = [];
	
	var googleMapsLoaded = false;
	
	var onSuccess = function(position) 
	{			
		geoLocation[1] = position.coords.longitude;
		geoLocation[0] = position.coords.latitude;
		centerMap();
	};
	
	var moveSuccess = function(position) 
	{			
		geoLocation[1] = position.coords.longitude;
		geoLocation[0] = position.coords.latitude;
		centerMap();
	};
	
	function onError(error) 
	{		
		Materialize.toast('Cannot locate you. Check that your geolocation settings are enabled for Manuva.', 4000);
		
		$.get("http://ipinfo.io", function(response) 
		{ 
			geoLocation = response.loc;
			geoLocation = geoLocation.split(',');
		}, "jsonp");
		
		centerMap();		
		runLocation();
	}
	
	function runLocation()
	{
		navigator.geolocation.getCurrentPosition(moveSuccess, runLocation, {timeout: 10000, enableHighAccuracy: true});
	}
	
	$(document).ready(function() 
	{
	//document.addEventListener("deviceready", onDeviceReady, false);
	//function onDeviceReady() 
	//{
		//navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
	//}
	});
	
	//navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
	
	
	function centerMap()
	{		
		if(geoLocation[0] != '' && geoLocation[0] != null && geoLocation[1] != '' && geoLocation[1] != null)
		{
			var latLng = new google.maps.LatLng(geoLocation[0], geoLocation[1]);
			map.panTo(latLng);
			map.setZoom(17);
			google.maps.event.trigger(map, "resize");
		
			var icon = 
			{
				url: "img/mapIconGray.png",
				size: new google.maps.Size(35, 48),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 34),
				scaledSize: new google.maps.Size(35, 48)
			};
			
			var position = new google.maps.LatLng(geoLocation[0], geoLocation[1]);
			
			marker = new google.maps.Marker(
			{
				position: position,
				map: map,
				icon: icon
			});
		}
		else
		{
			setTimeout(function(){ centerMap(); }, 1000);
		}
	}
	
	function startMap()
	{
		jQuery(function($) 
		{
			// Asynchronously Load the map API 
			var script = document.createElement('script');
			script.src = "http://maps.googleapis.com/maps/api/js?sensor=true&callback=initialize&libraries=places";
			document.body.appendChild(script);
		});
	}

	function initialize() 
	{
		bounds = new google.maps.LatLngBounds();
		geocoder = new google.maps.Geocoder();
		
		mapOptions = 
		{
			zoom: 17,
			center: new google.maps.LatLng(-26.149047, 28.033915),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
		};
						
		// Display a map on the page
		map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		map.setTilt(45);

		// Create the search box and link it to the UI element.
		var input = document.getElementById('pac-input');
		var searchBox = new google.maps.places.SearchBox(input);
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

		// Bias the SearchBox results towards current map's viewport.
		map.addListener('bounds_changed', function() 
		{
			searchBox.setBounds(map.getBounds());
		});
		
		var icon = {
			url: "img/mapIcon.png",
			size: new google.maps.Size(35, 48),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 34),
			scaledSize: new google.maps.Size(35, 48)
		};
			
		// Display multiple markers on a map
		var infoWindow = new google.maps.InfoWindow(), marker, i;
		google.maps.event.addListener(infoWindow, 'domready', function() 
		{
			var iwOuter = $('.gm-style-iw');
			var iwBackground = iwOuter.prev();
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
			iwOuter.parent().parent().css({left: '115px'});
			iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 60px !important;'});
			iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 60px !important;'});
			iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': '0 1px 6px rgba(178, 178, 178, 0.6)', 'z-index' : '1', 'box-sizing': 'initial'});
			var iwCloseBtn = iwOuter.next();
			iwCloseBtn.css({opacity: '1', right: '140px', top: '10px', border: '5px solid #fff', 'border-radius': '13px', 'box-shadow': '0 0 5px #ccc', 'box-sizing': 'initial'});
			iwCloseBtn.mouseout(function(){
			$(this).css({opacity: '1'});
			});
			$('.gm-style').children(':nth-child(1)').children(':nth-child(4)').children(':nth-child(4)').children(':nth-child(1)').children(':nth-child(1)').hide();
		});
	  
		// Loop through our array of markers & place each one on the map  
		for( i = 0; i < markers.length; i++ ) 
		{		
			var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
			
			marker = new google.maps.Marker({
				position: position,
				map: map,
				icon: icon
			});
			
			allMarkers.push(marker);
			
			// Allow each marker to have an info window    
			google.maps.event.addListener(marker, 'click', (function(marker, i) 
			{
				return function() {
					infoWindow.setContent(markers[i][0]);
					infoWindow.open(map, marker);
					
					getTrainers(markers[i][3]);	
				}
			})(marker, i));			
		}	
		
		var icon = 
		{
			url: "img/mapIconGray.png",
			size: new google.maps.Size(35, 48),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 34),
			scaledSize: new google.maps.Size(35, 48)
		};
		
		var position = new google.maps.LatLng(geoLocation[0], geoLocation[1]);
		
		marker = new google.maps.Marker(
		{
			position: position,
			map: map,
			icon: icon
		});
		
		// on search box selection
        searchBox.addListener('places_changed', function() 
		{
			var places = searchBox.getPlaces();

			if (places.length == 0) 
			{
				return;
			}

			// For each place, get the icon, name and location.
			var bounds = new google.maps.LatLngBounds();
			places.forEach(function(place) 
			{
				if (!place.geometry) 
				{
					console.log("Returned place contains no geometry");
					return;
				}
				var icon = 
				{
					url: place.icon,
					size: new google.maps.Size(71, 71),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(17, 34),
					scaledSize: new google.maps.Size(25, 25)
				};

				if (place.geometry.viewport) 
				{
					bounds.union(place.geometry.viewport);
				} 
				else 
				{
					bounds.extend(place.geometry.location);
				}
			});
			
			map.fitBounds(bounds);
        });
		
		google.maps.event.addListener(map, 'tilesloaded', function() 
		{
			console.log('loaded');
			googleMapsLoaded = true;
			google.maps.event.clearListeners(map, 'tilesloaded');
			navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
		});
		
		//setTimeout(function(){ centerMap(); }, 3000);
		setTimeout(function(){ checkMapLoad(); }, 10000);
	}
	
	function checkMapLoad()
	{
		if(googleMapsLoaded == false)
		{
			initialize();
		}
	}
	
	function zoomMap(longitude, latitude)
	{
		var latLng = new google.maps.LatLng(longitude, latitude);
		map.panTo(latLng);
		map.setZoom(17);
		$('.pac-container').removeClass('pac-no-hide');
	}
	
	function zoomTrainer(longitude, latitude, trainerId, facility)
	{
		openTrainer(trainerId, facility);
		
		var latLng = new google.maps.LatLng(longitude, latitude);
		map.panTo(latLng);
		map.setZoom(17);
		$('.pac-container').removeClass('pac-no-hide');
	}
	
	$(document).on('click', '.gm-style-iw + div', function(e)
	{
		$(this).hide();
		$('.gm-style-iw').hide();
	});