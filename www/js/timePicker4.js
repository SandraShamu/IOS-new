$(function(){
			var operatingHours4 = '';
			var operatingHoursArray4 = '';
			
			var openingHoursArray4 = '';
			var closingHoursArray4 = '';
			
			var _openHourArray4 = '';
			var _closingHourArray4 = '';
			
			var displayHour4 = '';
			var displayClosingHour4 = '';
			
			var displayMinutes4 = '';
			var displayClosingMinutes4 = '';
			
			var currentOpeningHour4 = '';
			var currentClosingHour4 = '';
			
			var currentOpeningMinutes4 = '';
			var currentClosingMinutes4 = '';
			
			var sundayHours = '';
			
			$('#sundayHours').click(function(){
				
				var sundayHours = $('#sundayHours').val();
				
				if(sundayHours == ''){
					sundayHours = '08:00 - 12:00';
				}
				
				operatingHours4 = sundayHours;
				operatingHoursArray4 = operatingHours4.split(' - ');
				openingHoursArray4 = operatingHoursArray4[0];
				closingHoursArray4 = operatingHoursArray4[1];
				
				_openHourArray4 = openingHoursArray4.split(':');
				_closingHourArray4 = closingHoursArray4.split(':');
				
				displayHour4 = _openHourArray4[0];
				displayClosingHour4 = _closingHourArray4[0];
				
				$('#openingHour4').empty();
				$('#openingHour4').text(_openHourArray4[0]);
				$('#closingHour4').empty();
				$('#closingHour4').text(_closingHourArray4[0]);
				$('#openingMinuteHand4').empty();
				$('#openingMinuteHand4').text(_openHourArray4[1]);
				$('#closingMinuteHand4').empty();
				$('#closingMinuteHand4').text(_closingHourArray4[1]);
				
				currentOpeningHour4 = _openHourArray4[0];
				currentClosingHour4 = _closingHourArray4[0];
				
				currentOpeningMinutes4 = _openHourArray4[1];
				currentClosingMinutes4 = _closingHourArray4[1];
				
				//$('.timePickerOverlay2').fadeIn();
			});
			
						
			//Increase Opening Hours
			$('.OHU').click(function(){
				
				if(currentOpeningHour4 >= 17){
					
				}else{
					currentOpeningHour4++;
					
				}
				
				
				if(currentOpeningHour4 < 10){
					//displayHour2 = "0" + currentOpeningHour2;
					displayHour4 = zeroPad(currentOpeningHour4, 2);
				}else{
					displayHour4 = currentOpeningHour4;
				}
				
				$("#openingHour4").text(displayHour4);
				
				
			});
			
			//Decrease Opening Hours
			$('.OHD').click(function(){
				
				if(currentOpeningHour4 <= 8){
					
				}else{
					currentOpeningHour4--;
				}
				
				if(currentOpeningHour4 < 10){
					//displayHour2 = "0" + currentOpeningHour2;
					displayHour4 = zeroPad(currentOpeningHour4, 2);
				}else{
					displayHour4 = currentOpeningHour4;
				}
				
				$("#openingHour4").text(displayHour4);
				
			});
			
			//Increase Opening Minutes
			$('.OMU').click(function(){
				
				if(currentOpeningMinutes4 >= 45){
					
				}else{
					currentOpeningMinutes4 = parseInt(currentOpeningMinutes4) + 15;
				}
				
				if(currentOpeningMinutes4 == 0){
					//displayMinutes2 = "0" + currentOpeningMinutes2;
					displayMinutes4 = zeroPad(currentOpeningMinutes4, 2);
				}else{
					displayMinutes4 = currentOpeningMinutes4;
				}
				
				$("#openingMinuteHand4").text(displayMinutes4);
				
				
			});
			
			//Decrease Opening Minutes
			$('.OMD').click(function(){
				
				if(currentOpeningMinutes4 == 0){
					
				}else{
					currentOpeningMinutes4 = parseInt(currentOpeningMinutes4) - 15;
				}
				
				if(currentOpeningMinutes4 == 0){
					//displayMinutes2 = "0" + currentOpeningMinutes2;
					displayMinutes4 = zeroPad(currentOpeningMinutes4, 2);
				}else{
					displayMinutes4 = currentOpeningMinutes4;
				}
				
				
				$("#openingMinuteHand4").text(displayMinutes4);

			});
			
			//Increase Closing Hours
			$('.CHU').click(function(){
				
				if(currentClosingHour4 >= 17){
					
				}else{
					currentClosingHour4++;
				}
				
				
				if(currentClosingHour4 < 10){
					//displayClosingHour2 = "0" + currentClosingHour2;
					displayClosingHour4 = zeroPad(currentClosingHour4, 2);
				}else{
					displayClosingHour4 = currentClosingHour4;
				}
				
				$("#closingHour4").text(displayClosingHour4);
				
			});
			
			//Decrease Closing Hours
			$('.CHD').click(function(){
				
				if(currentClosingHour4 <= 8){
					
				}else{
					currentClosingHour4--;
				}
				
				if(currentClosingHour4 < 10){
					//displayClosingHour2 = "0" + currentClosingHour2;
					displayClosingHour4 = zeroPad(currentClosingHour4, 2);
				}else{
					displayClosingHour4 = currentClosingHour4;
				}
				
				$("#closingHour4").text(displayClosingHour4);
				
			});
			
			//Increase Closing Minutes
			$('.CMU').click(function(){
				
				if(currentClosingMinutes4 >= 45){
					
				}else{
					currentClosingMinutes4 = parseInt(currentClosingMinutes4) + 15;
				}
				
				if(currentClosingMinutes4 == 0){
					//displayClosingMinutes2 = "0" + currentClosingMinutes2;
					displayClosingMinutes4 = zeroPad(currentClosingMinutes4, 2);
				}else{
					displayClosingMinutes4 = currentClosingMinutes4;
				}
				
				$("#closingMinuteHand4").text(displayClosingMinutes4);
				
				
			});
			
			//Decrease Closing Minutes
			$('.CMD').click(function(){
				
				if(currentClosingMinutes4 == 0){
					
				}else{
					currentClosingMinutes4 = parseInt(currentClosingMinutes4) - 15;
				}
				
				if(currentClosingMinutes4 == 0){
					//displayClosingMinutes2 = "0" + currentClosingMinutes2;
					displayClosingMinutes4 = zeroPad(currentClosingMinutes4, 2);
				}else{
					displayClosingMinutes4 = currentClosingMinutes4;
				}
				
				
				$("#closingMinuteHand4").text(displayClosingMinutes4);

			});
			
			$('.m4').click(function(){
				
				var sh_openingHour = $('#openingHour4').text();
				var sh_openingMinutes = $('#openingMinuteHand4').text();
				var sh_closingHour = $('#closingHour4').text();
				var sh_closingMinutes = $('#closingMinuteHand4').text();
				$('#sundayHours').val(sh_openingHour + ":" + sh_openingMinutes + " - " + sh_closingHour + ":" + sh_closingMinutes);

			});
			
			
});