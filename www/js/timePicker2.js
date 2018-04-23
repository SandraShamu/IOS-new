$(function(){
			var operatingHours2 = '';
			var operatingHoursArray2 = '';
			
			var openingHoursArray2 = '';
			var closingHoursArray2 = '';
			
			var _openHourArray2 = '';
			var _closingHourArray2 = '';
			
			var displayHour2 = '';
			var displayClosingHour2 = '';
			
			var displayMinutes2 = '';
			var displayClosingMinutes2 = '';
			
			var currentOpeningHour2 = '';
			var currentClosingHour2 = '';
			
			var currentOpeningMinutes2 = '';
			var currentClosingMinutes2 = '';
			
			$('#weekendHours').click(function(){
				operatingHours2 = $(this).val();
				operatingHoursArray2 = operatingHours2.split(' - ');
				openingHoursArray2 = operatingHoursArray2[0];
				closingHoursArray2 = operatingHoursArray2[1];
				
				_openHourArray2 = openingHoursArray2.split(':');
				_closingHourArray2 = closingHoursArray2.split(':');
				
				displayHour2 = _openHourArray2[0];
				displayClosingHour2 = _closingHourArray2[0];
				
				$('#openingHour2').empty();
				$('#openingHour2').text(_openHourArray2[0]);
				$('#closingHour2').empty();
				$('#closingHour2').text(_closingHourArray2[0]);
				
				$('#openingMinuteHand2').empty();
				$('#openingMinuteHand2').text(_openHourArray2[1]);
				$('#closingMinuteHand2').empty();
				$('#closingMinuteHand2').text(_closingHourArray2[1]);
				
				currentOpeningHour2 = _openHourArray2[0];
				currentClosingHour2 = _closingHourArray2[0];
				
				currentOpeningMinutes2 = _openHourArray2[1];
				currentClosingMinutes2 = _closingHourArray2[1];
				
				//$('.timePickerOverlay2').fadeIn();
			});
			
						
			//Increase Opening Hours
			$('.OHU').click(function(){
				
				if(currentOpeningHour2 >= 17){
					
				}else{
					currentOpeningHour2++;
					
				}
				
				
				if(currentOpeningHour2 < 10){
					//displayHour2 = "0" + currentOpeningHour2;
					displayHour2 = zeroPad(currentOpeningHour2, 2);
				}else{
					displayHour2 = currentOpeningHour2;
				}
				
				$("#openingHour2").text(displayHour2);
				
				
			});
			
			//Decrease Opening Hours
			$('.OHD').click(function(){
				
				if(currentOpeningHour2 <= 8){
					
				}else{
					currentOpeningHour2--;
				}
				
				if(currentOpeningHour2 < 10){
					//displayHour2 = "0" + currentOpeningHour2;
					displayHour2 = zeroPad(currentOpeningHour2, 2);
				}else{
					displayHour2 = currentOpeningHour2;
				}
				
				$("#openingHour2").text(displayHour2);
				
			});
			
			//Increase Opening Minutes
			$('.OMU').click(function(){
				
				if(currentOpeningMinutes2 >= 45){
					
				}else{
					currentOpeningMinutes2 = parseInt(currentOpeningMinutes2) + 15;
				}
				
				if(currentOpeningMinutes2 == 0){
					//displayMinutes2 = "0" + currentOpeningMinutes2;
					displayMinutes2 = zeroPad(currentOpeningMinutes2, 2);
				}else{
					displayMinutes2 = currentOpeningMinutes2;
				}
				
				$("#openingMinuteHand2").text(displayMinutes2);
				
				
			});
			
			//Decrease Opening Minutes
			$('.OMD').click(function(){
				
				if(currentOpeningMinutes2 == 0){
					
				}else{
					currentOpeningMinutes2 = parseInt(currentOpeningMinutes2) - 15;
				}
				
				if(currentOpeningMinutes2 == 0){
					//displayMinutes2 = "0" + currentOpeningMinutes2;
					displayMinutes2 = zeroPad(currentOpeningMinutes2, 2);
				}else{
					displayMinutes2 = currentOpeningMinutes2;
				}
				
				
				$("#openingMinuteHand2").text(displayMinutes2);

			});
			
			//Increase Closing Hours
			$('.CHU').click(function(){
				
				if(currentClosingHour2 >= 17){
					
				}else{
					currentClosingHour2++;
				}
				
				
				if(currentClosingHour2 < 10){
					//displayClosingHour2 = "0" + currentClosingHour2;
					displayClosingHour2 = zeroPad(currentClosingHour2, 2);
				}else{
					displayClosingHour2 = currentClosingHour2;
				}
				
				$("#closingHour2").text(displayClosingHour2);
				
			});
			
			//Decrease Closing Hours
			$('.CHD').click(function(){
				
				if(currentClosingHour2 <= 8){
					
				}else{
					currentClosingHour2--;
				}
				
				if(currentClosingHour2 < 10){
					//displayClosingHour2 = "0" + currentClosingHour2;
					displayClosingHour2 = zeroPad(currentClosingHour2, 2);
				}else{
					displayClosingHour2 = currentClosingHour2;
				}
				
				$("#closingHour2").text(displayClosingHour2);
				
			});
			
			//Increase Closing Minutes
			$('.CMU').click(function(){
				
				if(currentClosingMinutes2 >= 45){
					
				}else{
					currentClosingMinutes2 = parseInt(currentClosingMinutes2) + 15;
				}
				
				if(currentClosingMinutes2 == 0){
					//displayClosingMinutes2 = "0" + currentClosingMinutes2;
					displayClosingMinutes2 = zeroPad(currentClosingMinutes2, 2);
				}else{
					displayClosingMinutes2 = currentClosingMinutes2;
				}
				
				$("#closingMinuteHand2").text(displayClosingMinutes2);
				
				
			});
			
			//Decrease Closing Minutes
			$('.CMD').click(function(){
				
				if(currentClosingMinutes2 == 0){
					
				}else{
					currentClosingMinutes2 = parseInt(currentClosingMinutes2) - 15;
				}
				
				if(currentClosingMinutes2 == 0){
					//displayClosingMinutes2 = "0" + currentClosingMinutes2;
					displayClosingMinutes2 = zeroPad(currentClosingMinutes2, 2);
				}else{
					displayClosingMinutes2 = currentClosingMinutes2;
				}
				
				
				$("#closingMinuteHand2").text(displayClosingMinutes2);

			});
			
			$('.m2').click(function(){
				
				var sah_openingHour = $('#openingHour2').text();
				var sah_openingMinutes = $('#openingMinuteHand2').text();
				var sah_closingHour = $('#closingHour2').text();
				var sah_closingMinutes = $('#closingMinuteHand2').text();
				$('#weekendHours').val(sah_openingHour + ":" + sah_openingMinutes + " - " + sah_closingHour + ":" + sah_closingMinutes);
				
			});
			
			
});