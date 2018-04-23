$(document).ready(function(){   
	window.setTimeout('fadeout();', 4000);
});

function fadeout(){
	$('#loading-overlay').fadeOut('slow', function() {
	});
}