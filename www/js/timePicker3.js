$(function(){
			var operatingHours3 = '';
			var operatingHoursArray3 = '';
			
			var openingHoursArray3 = '';
			var closingHoursArray3 = '';
			
			var _openHourArray3 = '';
			var _closingHourArray3 = '';
			
			var displayHour3 = '';
			var displayClosingHour3 = '';
			
			var displayMinutes3 = '';
			var displayClosingMinutes3= '';
			
			var currentOpeningHour3 = '';
			var currentClosingHour3 = '';
			
			var currentOpeningMinutes3 = '';
			var currentClosingMinutes3 = '';
			
			$('#publicHolidaysHours').click(function(){
				operatingHours3 = $(this).val();
				
				if(operatingHours3 == 'Closed'){
					
					operatingHours3 = '08:00 - 14:00';
					
				}else{
					
					operatingHours3 = operatingHours3;
					
				}
				
				
				operatingHoursArray3 = operatingHours3.split(' - ');
				openingHoursArray3 = operatingHoursArray3[0];
				closingHoursArray3 = operatingHoursArray3[1];
				
				_openHourArray3 = openingHoursArray3.split(':');
				_closingHourArray3 = closingHoursArray3.split(':');
				
				displayHour3 = _openHourArray3[0];
				displayClosingHour3 = _closingHourArray3[0];
				
				$('#openingHour3').empty();
				$('#openingHour3').text(_openHourArray3[0]);
				$('#closingHour3').empty();
				$('#closingHour3').text(_closingHourArray3[0]);
				
				$('#openingMinuteHand3').empty();
				$('#openingMinuteHand3').text(_openHourArray3[1]);
				$('#closingMinuteHand3').empty();
				$('#closingMinuteHand3').text(_closingHourArray3[1]);
				
				currentOpeningHour3 = _openHourArray3[0];
				currentClosingHour3 = _closingHourArray3[0];
				
				currentOpeningMinutes3 = _openHourArray3[1];
				currentClosingMinutes3 = _closingHourArray3[1];
				
				//$('.timePickerOverlay2').fadeIn();
			});
			
			
			//Increase Opening Hours
			$('.OHU').click(function(){
				
				if(currentOpeningHour3 >= 17){
					
				}else{
					currentOpeningHour3++;
					
				}
				
				
				if(currentOpeningHour3 < 10){
					
					//displayHour3 = "0" + currentOpeningHour3;
					displayHour3 = zeroPad(currentOpeningHour3, 2); 
					
				}else{
					displayHour3 = currentOpeningHour3;
				}
				
				$("#openingHour3").text(displayHour3);
				
				
			});
			
			//Decrease Opening Hours
			$('.OHD').click(function(){
				
				if(currentOpeningHour3 <= 8){
					
				}else{
					currentOpeningHour3--;
				}
				
				if(currentOpeningHour3 < 10){
					
					//displayHour3 = "0" + currentOpeningHour3;
					displayHour3 = zeroPad(currentOpeningHour3, 2); 
					
				}else{
					displayHour3 = currentOpeningHour3;
				}
				
				$("#openingHour3").text(displayHour3);
				
			});
			
			//Increase Opening Minutes
			$('.OMU').click(function(){
				
				if(currentOpeningMinutes3 >= 45){
					
				}else{
					currentOpeningMinutes3 = parseInt(currentOpeningMinutes3) + 15;
					
				}
				
				if(currentOpeningMinutes3 == 0){
					//displayMinutes3 = "0" + currentOpeningMinutes3;
					displayMinutes3 = zeroPad(currentOpeningMinutes3, 2);
					
				}else{
					displayMinutes3 = currentOpeningMinutes3;
					
				}
				
				$("#openingMinuteHand3").text(displayMinutes3);
				
				
			});
			
			//Decrease Opening Minutes
			$('.OMD').click(function(){
				
				if(currentOpeningMinutes3 == 0){
					
				}else{
					currentOpeningMinutes3 = parseInt(currentOpeningMinutes3) - 15;
				}
				
				if(currentOpeningMinutes3 == 0){
					//displayMinutes3 = "0" + currentOpeningMinutes3;
					displayMinutes3 = zeroPad(currentOpeningMinutes3, 2);
				}else{
					displayMinutes3 = currentOpeningMinutes3;
				}
				
				
				$("#openingMinuteHand3").text(displayMinutes3);

			});
			
			//Increase Closing Hours
			$('.CHU').click(function(){
				
				if(currentClosingHour3 >= 17){
					
				}else{
					currentClosingHour3++;
				}
				
				
				if(currentClosingHour3 < 10){
					//displayClosingHour3 = "0" + currentClosingHour3;
					displayClosingHour3 = zeroPad(currentClosingHour3, 2);
				}else{
					displayClosingHour3 = currentClosingHour3;
				}
				
				$("#closingHour3").text(displayClosingHour3);
				
			});
			
			//Decrease Closing Hours
			$('.CHD').click(function(){
				
				if(currentClosingHour3 <= 8){
					
				}else{
					currentClosingHour3--;
				}
				
				if(currentClosingHour3 < 10){
					//displayClosingHour3 = "0" + currentClosingHour3;
					displayClosingHour3 = zeroPad(currentClosingHour3, 2);
				}else{
					displayClosingHour3 = currentClosingHour3;
				}
				
				$("#closingHour3").text(displayClosingHour3);
				
			});
			
			//Increase Closing Minutes
			$('.CMU').click(function(){
				
				if(currentClosingMinutes3 >= 45){
					
				}else{
					currentClosingMinutes3 = parseInt(currentClosingMinutes3) + 15;
				}
				
				if(currentClosingMinutes3 == 0){
					//displayClosingMinutes3 = "0" + currentClosingMinutes3;
					displayClosingMinutes3 = zeroPad(currentClosingMinutes3, 2);
				}else{
					displayClosingMinutes3 = currentClosingMinutes3;
				}
				
				$("#closingMinuteHand3").text(displayClosingMinutes3);
				
				
			});
			
			//Decrease Closing Minutes
			$('.CMD').click(function(){
				
				if(currentClosingMinutes3 == 0){
					
				}else{
					currentClosingMinutes3 = parseInt(currentClosingMinutes3) - 15;
				}
				
				if(currentClosingMinutes3 == 0){
					//displayClosingMinutes3 = "0" + currentClosingMinutes3;
					displayClosingMinutes3 = zeroPad(currentClosingMinutes3, 2);
				}else{
					displayClosingMinutes3 = currentClosingMinutes3;
				}
				
				
				$("#closingMinuteHand3").text(displayClosingMinutes3);

			});
			
			$('.m3').click(function(){
				var isTrue = $("#closedOnHolidays").is(':checked');
				if(isTrue == true){
					$('#publicHolidaysHours').val("Closed");
					
				}else{
					
					var ph_openingHour = $('#openingHour3').text();
					var ph_openingMinutes = $('#openingMinuteHand3').text();
					var ph_closingHour = $('#closingHour3').text();
					var ph_closingMinutes = $('#closingMinuteHand3').text();
					$('#publicHolidaysHours').val(ph_openingHour + ":" + ph_openingMinutes + " - " + ph_closingHour + ":" + ph_closingMinutes);

				}
				
			});
			
			
});