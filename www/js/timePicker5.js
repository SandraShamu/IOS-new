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
			var item_id = '';
			
			$('.editTime').click(function(){
				item_id = $(this).attr('id');
				console.log("ID"+item_id);
				// operatingHoursArray = operatingHours.split(' - ');
				openingHoursArray = '08:00';
				closingHoursArray = '17:00';
				
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
			currentOpeningHour_one = 0;
			$('.OHU').click(function(){
				
				if(currentOpeningHour_one >= 24){
					
				}else{
					currentOpeningHour_one++;
					
				}
				
				
				if(currentOpeningHour_one < 10){
					//displayHour = "0" + currentOpeningHour;
					displayHour = zeroPad(currentOpeningHour_one, 2);
				}else{
					displayHour = currentOpeningHour_one;
				}
				currentOpeningHour = currentOpeningHour_one;
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
				currentOpeningHour_one = currentOpeningHour;
				$("#openingHour").text(displayHour);
				
			});
			
			//Increase Opening Minutes
			currentOpeningMinutes_one = 0;
			$('.OMU').click(function(){
				if(currentOpeningMinutes_one >= 45){
					
				}else{
					currentOpeningMinutes_one = parseInt(currentOpeningMinutes_one) + 15;
				}
				
				if(currentOpeningMinutes_one == 0){
					//displayMinutes = "0" + currentOpeningMinutes;
					displayMinutes = zeroPad(currentOpeningMinutes_one, 2);
				}else{
					displayMinutes = currentOpeningMinutes_one;
				}
				currentOpeningMinutes = currentOpeningMinutes_one;
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
				
				currentOpeningMinutes_one = currentOpeningMinutes;
				$("#openingMinuteHand").text(displayMinutes);

			});
			
			
			//Increase Closing Hours
			currentClosingHour_one = 0;
			$('.CHU').click(function(){
				
				if(currentClosingHour_one >= 23){
					
				}else{
					currentClosingHour_one++;
				}
				
				
				if(currentClosingHour_one < 10){
					//displayClosingHour = "0" + currentClosingHour;
					displayClosingHour = zeroPad(currentClosingHour_one, 2);
				}else{
					displayClosingHour = currentClosingHour_one;
				}
				currentClosingHour = currentClosingHour_one ;
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
				currentClosingHour_one = currentClosingHour;
				$("#closingHour").text(displayClosingHour);
				
			});
			
			currentClosingMinutes_one = 0;
			//Increase Closing Minutes
			$('.CMU').click(function(){
				
				
				if(currentClosingMinutes_one >= 45){
					
				}else{
					currentClosingMinutes_one = parseInt(currentClosingMinutes_one) + 15;
				}
				
				if(currentClosingMinutes_one == 0){
					//displayClosingMinutes = "0" + currentClosingMinutes;
					displayClosingMinutes = zeroPad(currentClosingMinutes_one, 2);
				}else{
					currentClosingMinutes_one = currentClosingMinutes_one;
				}
				console.log('Value::'+currentClosingMinutes_one);
				currentClosingMinutes = currentClosingMinutes_one;
				$("#closingMinuteHand").text(currentClosingMinutes_one);
				
				
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
				console.log('Value::'+currentClosingMinutes);
				currentClosingMinutes_one = currentClosingMinutes;
				$("#closingMinuteHand").text(currentClosingMinutes);

			});
			
			
			$('.m1').click(function(){
				
				var oh_openingHour = $('#openingHour').text();
				var oh_openingMinutes = $('#openingMinuteHand').text();
				var oh_closingHour = $('#closingHour').text();
				var oh_closingMinutes = $('#closingMinuteHand').text();
				$('.test'+item_id+'_time').text(oh_openingHour + ":" + oh_openingMinutes + " - " + oh_closingHour + ":" + oh_closingMinutes);
				
			});
			
			
});
