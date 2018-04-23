$(function(){
			var operatingHours = '';
			var operatingHoursArray = '';
			
			var openingHoursArray = '';
			var closingHoursArray = '';
			
			var _openHourArray = '';
			var _closingHourArray = '';
			
			var displayHour = '';
			var displayClosingHour = '';
			
			var displayMinutes = '';
			var displayClosingMinutes = '';
			
			var currentOpeningHour = '';
			var currentClosingHour = '';
			
			var currentOpeningMinutes = '';
			var currentClosingMinutes = '';
			
			$('#operatingHours').click(function(){
				operatingHours = $(this).val();
				operatingHoursArray = operatingHours.split(' - ');
				openingHoursArray = operatingHoursArray[0];
				closingHoursArray = operatingHoursArray[1];
				
				_openHourArray = openingHoursArray.split(':');
				_closingHourArray = closingHoursArray.split(':');
				
				displayHour = _openHourArray[0];
				displayClosingHour = _closingHourArray[0];
				
				displayMinutes = _openHourArray[1];
				displayClosingMinutes = _closingHourArray[1];
				
				$('#openingHour').empty();
				$('#openingHour').text(_openHourArray[0]);
				$('#closingHour').empty();
				$('#closingHour').text(_closingHourArray[0]);
				
				$('#openingMinuteHand').empty();
				$('#openingMinuteHand').text(_openHourArray[1]);
				$('#closingMinuteHand').empty();
				$('#closingMinuteHand').text(_closingHourArray[1]);
				
				
				currentOpeningHour = _openHourArray[0];
				currentClosingHour = _closingHourArray[0];
				
				currentOpeningMinutes = _openHourArray[1];
				currentClosingMinutes = _closingHourArray[1];
				
				//$('.timePickerOverlay').fadeIn();
			});
			
			
			//Increase Opening Hours
			$('.OHU').click(function(){
				
				if(currentOpeningHour >= 23){
					
				}else{
					currentOpeningHour++;
					
				}
				
				
				if(currentOpeningHour < 10){
					//displayHour = "0" + currentOpeningHour;
					displayHour = zeroPad(currentOpeningHour, 2);
				}else{
					displayHour = currentOpeningHour;
				}
				
				$("#openingHour").text(displayHour);
				
				
			});
			
			//Decrease Opening Hours
			$('.OHD').click(function(){
				
				if(currentOpeningHour <= 0){
					
				}else{
					currentOpeningHour--;
				}
				
				if(currentOpeningHour < 10){
					//displayHour = "0" + currentOpeningHour;
					displayHour = zeroPad(currentOpeningHour, 2);
				}else{
					displayHour = currentOpeningHour;
				}
				
				$("#openingHour").text(displayHour);
				
			});
			
			//Increase Opening Minutes
			$('.OMU').click(function(){
				
				if(currentOpeningMinutes >= 45){
					
				}else{
					currentOpeningMinutes = parseInt(currentOpeningMinutes) + 15;
				}
				
				if(currentOpeningMinutes == 0){
					//displayMinutes = "0" + currentOpeningMinutes;
					displayMinutes = zeroPad(currentOpeningMinutes, 2);
				}else{
					displayMinutes = currentOpeningMinutes;
				}
				
				$("#openingMinuteHand").text(displayMinutes);
				
				
			});
			
			//Decrease Opening Minutes
			$('.OMD').click(function(){
				
				if(currentOpeningMinutes == 0){
					
				}else{
					currentOpeningMinutes = parseInt(currentOpeningMinutes) - 15;
				}
				
				if(currentOpeningMinutes == 0){
					//displayMinutes = "0" + currentOpeningMinutes;
					displayMinutes = zeroPad(currentOpeningMinutes, 2);
				}else{
					displayMinutes = currentOpeningMinutes;
				}
				
				
				$("#openingMinuteHand").text(displayMinutes);

			});
			
			
			//Increase Closing Hours
			$('.CHU').click(function(){
				
				if(currentClosingHour >= 23){
					
				}else{
					currentClosingHour++;
				}
				
				
				if(currentClosingHour < 10){
					//displayClosingHour = "0" + currentClosingHour;
					displayClosingHour = zeroPad(currentClosingHour, 2);
				}else{
					displayClosingHour = currentClosingHour;
				}
				
				$("#closingHour").text(displayClosingHour);
				
			});
			
			//Decrease Closing Hours
			$('.CHD').click(function(){
				
				if(currentClosingHour <= 0){
					
				}else{
					currentClosingHour--;
				}
				
				if(currentClosingHour < 10){
					//displayClosingHour = "0" + currentClosingHour;
					displayClosingHour = zeroPad(currentClosingHour, 2);
				}else{
					displayClosingHour = currentClosingHour;
				}
				
				$("#closingHour").text(displayClosingHour);
				
			});
			
			
			//Increase Closing Minutes
			$('.CMU').click(function(){
				
				if(currentClosingMinutes >= 45){
					
				}else{
					currentClosingMinutes = parseInt(currentClosingMinutes) + 15;
				}
				
				if(currentClosingMinutes == 0){
					//displayClosingMinutes = "0" + currentClosingMinutes;
					displayClosingMinutes = zeroPad(currentClosingMinutes, 2);
				}else{
					displayClosingMinutes = currentClosingMinutes;
				}
				
				$("#closingMinuteHand").text(displayClosingMinutes);
				
				
			});
			
			//Decrease Closing Minutes
			$('.CMD').click(function(){
				
				if(currentClosingMinutes == 0){
					
				}else{
					currentClosingMinutes = parseInt(currentClosingMinutes) - 15;
				}
				
				if(currentClosingMinutes == 0){
					//displayClosingMinutes = "0" + currentClosingMinutes;
					displayClosingMinutes = zeroPad(currentClosingMinutes, 2);
				}else{
					displayClosingMinutes = currentClosingMinutes;
				}
				
				
				$("#closingMinuteHand").text(displayClosingMinutes);

			});
			
			
			$('.m1').click(function(){
				
				var oh_openingHour = $('#openingHour').text();
				var oh_openingMinutes = $('#openingMinuteHand').text();
				var oh_closingHour = $('#closingHour').text();
				var oh_closingMinutes = $('#closingMinuteHand').text();
				$('#operatingHours').val(oh_openingHour + ":" + oh_openingMinutes + " - " + oh_closingHour + ":" + oh_closingMinutes);
				
			});
			
			
});