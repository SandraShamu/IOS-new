$(function(){
			
			var current_hour = 8;
			var current_minutes = 0;
			var display_hour = '';
			var display_minutes = '';
			var company_close_hour = 17;
			var company_openning_hour = 7;
			
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
			
			$('#timeOfBooking').click(function(){
				 $('#modal2').openModal();
			});
			/*::::::::::::::::::::CONFIRM TIME:::::::::::::::::::*/
			$('.confirmTime').click(function(){
				var hourHand = $("#hourHand").text();
				var minuteHand = $("#minuteHand").text();
				var new_booking_time = hourHand + ":" + minuteHand;
				$("#timeOfBooking").val(new_booking_time);
			});
			
});