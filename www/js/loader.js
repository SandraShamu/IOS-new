/*
$(document).ready(function(){   
	$("#loading-overlay").velocity("fadeOut", {
		duration: 1000
	});
});
*/

$(document).ready(function(){   
	window.setTimeout('fadeout();', 4000);
});

function fadeout(){
	$('#loading-overlay').fadeOut('slow', function() {
	});
}