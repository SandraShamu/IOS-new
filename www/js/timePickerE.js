$(function(){
			var operatingHours = '';
			var operatingHoursArray = '';
			
			var openingHoursArray = '';
			var closingHoursArray = '';
			
			var _openHourArray = '';
			var _closingHourArray = '';
			
			var displayHour = '';
			var displayClosingHour = '';
			
			var currentOpeningHour = '';
			var currentClosingHour = '';
			
			$('#operatingHours').click(function(){
				operatingHours = $(this).val();
				operatingHoursArray = operatingHours.split(' - ');
				openingHoursArray = operatingHoursArray[0];
				closingHoursArray = operatingHoursArray[1];
				
				_openHourArray = openingHoursArray.split(':');
				_closingHourArray = closingHoursArray.split(':');
				
				displayHour = _openHourArray[0];
				displayClosingHour = _closingHourArray[0];
				
				$('#openingHour').empty();
				$('#openingHour').text(_openHourArray[0]);
				$('#closingHour').empty();
				$('#closingHour').text(_closingHourArray[0]);
				
				currentOpeningHour = _openHourArray[0];
				currentClosingHour = _closingHourArray[0];
				
				//$('.timePickerOverlay').fadeIn();
			});
			
			
			//Increase Opening Hours
			$('.OHU').click(function(){
				
				if(currentOpeningHour >= 17){
					
				}else{
					currentOpeningHour++;
					
				}
				
				
				if(currentOpeningHour < 10){
					displayHour = "0" + currentOpeningHour;
				}else{
					displayHour = currentOpeningHour;
				}
				
				$("#openingHour").text(displayHour);
				
				
			});
			
			//Decrease Opening Hours
			$('.OHD').click(function(){
				
				if(currentOpeningHour <= 8){
					
				}else{
					currentOpeningHour--;
				}
				
				if(currentOpeningHour < 10){
					displayHour = "0" + currentOpeningHour;
				}else{
					displayHour = currentOpeningHour;
				}
				
				$("#openingHour").text(displayHour);
				
			});
			
			//Increase Closing Hours
			$('.CHU').click(function(){
				
				if(currentClosingHour >= 17){
					
				}else{
					currentClosingHour++;
				}
				
				
				if(currentClosingHour < 10){
					displayClosingHour = "0" + currentClosingHour;
				}else{
					displayClosingHour = currentClosingHour;
				}
				
				$("#closingHour").text(displayClosingHour);
				
			});
			
			//Decrease Closing Hours
			$('.CHD').click(function(){
				
				if(currentClosingHour <= 8){
					
				}else{
					currentClosingHour--;
				}
				
				if(currentClosingHour < 10){
					displayClosingHour = "0" + currentClosingHour;
				}else{
					displayClosingHour = currentClosingHour;
				}
				
				$("#closingHour").text(displayClosingHour);
				
			});
			
			$('.m1').click(function(){
				
				$('#operatingHours').val(displayHour + ':00 - ' + displayClosingHour + ':00');
				
			});
			
			
});