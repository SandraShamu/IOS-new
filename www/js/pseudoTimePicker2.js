$(function(){
			var currentServiceDuration = '';
			var currentServiceDurationArray = '';
			var current_hour = '';
			var current_minutes = '';
			var display_hour = '';
			var display_minutes = '';
			var company_close_hour = 20;
			var company_openning_hour = 0;
			
			if(current_hour < 10){
				display_hour = "0" + current_hour;
			}else{
				display_hour = current_hour;
			}
			
			if(current_minutes == 0){
				display_minutes = "0" + current_minutes;
			}else{
				display_minutes = current_minutes;
			}
			
			$("#hourHand").text(display_hour);
			$("#minuteHand").text(display_minutes);
			
			//Increase Hours
			$('.left_up').click(function(){
				
				if(current_hour >= company_close_hour){
					
				}else{
					current_hour++;
				}
				
				if(current_hour < 10){
					display_hour = "0" + current_hour;
				}else{
					display_hour = current_hour;
				}
				
				$("#hourHand").text(display_hour);
			});
			
			//Increase Minutes
			$('.right_up').click(function(){
			
				if(current_minutes >= 45){
					
				}else{
					current_minutes = current_minutes + 15;
				}
				
				if(current_minutes == 0){
					display_minutes = "0" + current_minutes;
				}else{
					display_minutes = current_minutes;
				}
				
				$("#minuteHand").text(display_minutes);
			});
			
			//Decrease Hours
			$('.left_down').click(function(){
				if(current_hour <= company_openning_hour){
					
				}else{
					current_hour--;
				}
				
				if(current_hour < 10){
					display_hour = "0" + current_hour;
				}else{
					display_hour = current_hour;
				}
				
				$("#hourHand").text(display_hour);
			});
			
			//Decrease Minutes
			$('.right_down').click(function(){
				if(current_minutes == 0){
					
				}else{
					current_minutes = current_minutes - 15;
				}
				
				if(current_minutes == 0){
					display_minutes = "0" + current_minutes;
				}else{
					display_minutes = current_minutes;
				}
				
				$("#minuteHand").text(display_minutes);
			});
			
			/*:::::::::::::::::::::SET TIME::::::::::::::::::::*/
			
			$('#serviceDuration').click(function(){
				
				currentServiceDuration = $('#serviceDuration').val();
				currentServiceDurationArray = currentServiceDuration.split(':');
				current_hour = currentServiceDurationArray[0];
				current_minutes = currentServiceDurationArray[1];
				
				if(current_hour < 10){
					display_hour = current_hour;
				}else{
					display_hour = current_hour;
				}
				
				if(current_minutes == 0){
					display_minutes = current_minutes;
				}else{
					display_minutes = current_minutes;
				}
				
				$("#hourHand").text(display_hour);
				$("#minuteHand").text(display_minutes);
				
				 $('#modal2').openModal();
			});
			/*::::::::::::::::::::CONFIRM TIME:::::::::::::::::::*/
			$('.confirmTime').click(function(){
				var hourHand = $("#hourHand").text();
				var minuteHand = $("#minuteHand").text();
				var new_booking_time = hourHand + ":" + minuteHand + ":00";
				$("#serviceDuration").val(new_booking_time);
			});
			
});