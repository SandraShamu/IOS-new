/*
			var bookingDateArray = bookingDate.split("-");
				var correctDateFormat = bookingDateArray[2] + "/" + bookingDateArray[1] + "/" + bookingDateArray[0];
				
				//This will be deleted because it should be dynamic with the time taken to perform a service
				
				var proposedServiceDuration = bookingServiceDuration;
				var proposedServiceDurationArray = proposedServiceDuration.split(":");
				
				var proposedHoursInMinutes = proposedServiceDurationArray[0] * 60;
				var proposedMinutes = proposedServiceDurationArray[1];
				var proposedSlots = noOfSlotsRequired(proposedHoursInMinutes, proposedMinutes);
				
				function noOfSlotsRequired(hoursInMinutes, minutes){
					var slotsRequired = '';
					slotsRequired = hoursInMinutes/15;
					slotsRequired += minutes/15;
					return slotsRequired;
				}
				
			$(function(){
				
				$.ajax
				({
				   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeeBookings.php?chosenDate=' + correctDateFormat + "&bookingEmployeeId=" + bookingEmployeeId,
				   dataType: 'jsonp',
				   jsonp: 'jsoncallback',
				   timeout: 10000,
				   success: function(data, status)
				   {
						$.each( data, function( key, val ) {
							var tempArray = [];
							
							tempArray.push(val.booking_time);
							tempArray.push(val.time_to_complete_service);
							
							bookingsArray.push(tempArray);
						});
						
						if(data[0] != ''){
							afunc();
						}
						
				   },
				   error: function()
				   {	
						failure('Could not connect. Please try again.');
				   }
				});
				
				function afunc(){
				
					jQuery.each(bookingsArray, function(index, item) {
						
						var bookingStartTime = item[0];
						var serviceDuration = item[1];
						var serviceDurationArray = serviceDuration.split(":");
						
						var hoursInMinutes = serviceDurationArray[0] * 60;
						var minutes = serviceDurationArray[1];
						var slots = noOfSlotsRequired(hoursInMinutes, minutes);
						
						$(".slot").each(function( key, val ) {
									var slotStartTime = '';
									slotStartTime = $(this).attr("data-start-time");
									slotIsFreeStatus = $(this).attr("data-slot-status");
									slotID = $(this).attr("id");
									
									if(slotStartTime == bookingStartTime){

											var init = slotID;
											var arr = $.makeArray(slots);

											jQuery.each(arr, function(index, item) {
												var start = init;
												
												$.each(new Array(item),
													   function(n){
													   	   
														   $("#"+ start).css("background","#e0e0eb");
														   $("#"+ start).attr("data-slot-status","isBooked");	
														   start++;
													   }
													
												);
												
											});

									}		
						});
					});
				}
				
			});
			
			/*
				
				In order for a slot to be reserved as abooking, three tests need to each be passed sequentially:
				Test 1: The proposed start time should be an open slot.
				Test 2: The duration of the service should be able to take up the relevant number of slots.
				
				*/
				
				//This function checks if the proposed booking is possible.
				$(document).on('click', ".slot", function() {
				
					var thisSlotStartTime = $(this).attr("data-start-time");
					var thisSlotID = $(this).attr("id");
					var thisSlotStatus = $(this).attr("data-slot-status");
					var makeBooking = true;
					
					//Test 1: The proposed start time should be an open slot.
					if(thisSlotStatus == "isOpen"){
						//console.log("This slot is open");
							
						//Test 2: The duration of the service should be able to take up the relevant number of slots.
						var proposedEnd = parseInt(thisSlotID) + parseInt(proposedSlots);
						var actualEnd = parseInt(proposedEnd) - 1;
						var idOfLastSlot = $(".slot").last().attr("id");
						
						for(i = thisSlotID; i < proposedEnd; i++) { 
							var status = $("#" + i).attr("data-slot-status");
							
							if(status == "isBooked" || i > idOfLastSlot){
								makeBooking = false;
							}else{
								makeBooking = true;
							}
						}
						
						if(makeBooking == true){
							//Tests 1 and 2 were passed, make the booking.
							
							$(".slot").each(function(key, val){
								var isReserved = $(this).attr("data-reserved");
								
								if(isReserved == "yes"){
									var thisID = $(this).attr("id");
									console.log(thisID);
									$(this).attr("data-slot-status","isOpen");
									$(this).attr("data-reserved", "no");
									$("#" + thisID).css("background","rgb(153, 230, 153)");
								}
								
							});
								
							
							for(i = thisSlotID; i < proposedEnd; i++) { 
								$("#"+ i).css("background","rgb(255, 153, 102)");
								$("#"+ i).attr("data-slot-status","isReserved");
								var attr = 'data-reserved';
								var rsv = 'yes';
								$("#"+ i).attr(attr,rsv);
								
							}
							
							_("timeOfBooking").val(thisSlotStartTime);
							var dateSet = _("dateOfBooking").val();
							failure('You have set a booking time of ' + thisSlotStartTime + ' on ' + dateSet);
						}else{
							//failure("You can't make a booking here.");
						}
						
					}else{
						//failure("This time slot is already booked.");	
					}
				});
				
			function runThis(date,employeeId){
			
				var bookingsArray = [];

				if(employeeId > 0){
					var _employeeId = String(employeeId);
				}else{
					var _employeeId = bookingEmployeeId;
				}
				
				var dateBDW = String(date);
				var bookingDateArray = dateBDW.split("/");
				var correctDateFormat = bookingDateArray[0] + "/" + bookingDateArray[1] + "/" + bookingDateArray[2];
				
				$.ajax
				({
				   url: 'https://lollipopbeauty.co.za/api/getEmployeeBookings.php?chosenDate=' + correctDateFormat + "&bookingEmployeeId=" + _employeeId,
				   dataType: 'jsonp',
				   jsonp: 'jsoncallback',
				   timeout: 10000,
				   success: function(data, status)
				   {

						$.each( data, function( key, val ) {
							var tempArray = [];
							
							tempArray.push(val.booking_time);
							tempArray.push(val.time_to_complete_service);
							
							bookingsArray.push(tempArray);
						});
						
						if(data[0] != ''){
							afunc();
						}
						
				   },
				   error: function()
				   {	
						failure('Could not connect. Please try again.');
				   }
				});
				
				function afunc(){
					
					$(".slot").each(function( key, val ) {
						$(this).css("background","rgb(153, 230, 153)");
						$(this).attr("data-slot-status","isOpen");						
					});
						
					jQuery.each(bookingsArray, function(index, item) {
						
						var bookingStartTime = item[0];
						var serviceDuration = item[1];
						var serviceDurationArray = serviceDuration.split(":");
						
						var hoursInMinutes = serviceDurationArray[0] * 60;
						var minutes = serviceDurationArray[1];
						var slots = noOfSlotsRequired(hoursInMinutes, minutes);
						
						$(".slot").each(function( key, val ) {
									var slotStartTime = '';
									slotStartTime = $(this).attr("data-start-time");
									slotIsFreeStatus = $(this).attr("data-slot-status");
									slotID = $(this).attr("id");
									
									if(slotStartTime == bookingStartTime){

											var init = slotID;
											var arr = $.makeArray(slots);

											jQuery.each(arr, function(index, item) {
												var start = init;
												
												$.each(new Array(item),
													   function(n){
													   	   
														   $("#"+ start).css("background","#e0e0eb");
														   $("#"+ start).attr("data-slot-status","isBooked");	
														   start++;
													   }
													
												);
												
											});

									}		
						});
					});
				}
			}
			
			$(document).on('click', ".confirmService", function() {
				$(".radio").each(function( index ) {
					var isChecked = $(this).is(':checked'); 
					var selectedService = '';
					if(isChecked == true){
						selectedService = $(this).attr("data-service-name");
						selectedServiceID = $(this).attr("data-service-id");
						serviceId = selectedServiceID;
						selectedServiceDuration = $(this).attr("data-service-duration");
						selectedServiceCost = $(this).attr("data-service-cost");
						_("service").val(selectedService);
						_("serviceID").val(selectedServiceID);
						_("timeToCompleteService").empty();
						_("timeToCompleteService").append(selectedServiceDuration);
						_("serviceCost").empty();
						_("serviceCost").append("R " + selectedServiceCost);
					}
				});
			});
			
			$('#timeOfBooking').click(function(){	
				$('#modal2').openModal();
			});
			*/