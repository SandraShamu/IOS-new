var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var bookingDate = '';

$(document).ready(function(){
			
				function getDaysInMonth(month, year) {
						 // Since no month has fewer than 28 days
						 var date = new Date(year, month, 1);
						 var days = [];
						 
						 while (date.getMonth() === month) {
							days.push(new Date(date));
							date.setDate(date.getDate() + 1);
						 }
						 return days;
				}
				
				var fullDate = new Date();
				var day = fullDate.getDay(); //Day
				var date = fullDate.getDate(); //Date
				var month = fullDate.getMonth(); //Month
				var year = fullDate.getFullYear(); //Year
				
				$(".leftPanel").attr("data-previous-month",months[month - 1]);
				$(".leftPanel").attr("data-previous-monthnumber",month - 1);
				$(".middlePanel h1").text(months[month] + " " + year);
				$(".rightPanel").attr("data-next-month",months[month + 1]);
				$(".rightPanel").attr("data-next-monthnumber",month + 1);
				
				var daysInThisMonth = getDaysInMonth(month, year);
				
				var startFrom = ''; //Variable that tells the array which day to start from
				var dateCounter = 1;
				var endAt = '';
				var daysInMonth = 0;
				
				$.each( daysInThisMonth, function( key, val ) {
					_day = val.getDay(); //Day
					_theDay = days[_day];
					_month = val.getMonth(); //Month				
					_date = val.getDate(); //Date
					if(_date == 1){
						startFrom = _day;
					}
					daysInMonth++;
				});
				
				endAt = daysInMonth;
				var counter = 0;
				var theCurrentMonth = 1 + parseInt(month);
				$('.dayCell').each(function (index, value){
					
					if(counter >= startFrom && dateCounter <= endAt){
						var dataDate = '';
						var dataMonth = '';
						
						if(dateCounter < 10){
							dataDate = '0' + dateCounter;
						}else{
							dataDate = dateCounter;
						}
						
						if(theCurrentMonth < 10){
							dataMonth = '0' + theCurrentMonth;
						}else{
							dataMonth = theCurrentMonth;
						}
						
						
						$(this).empty();
					$(this).append("<div onclick=\"checkEmployeesOnThisDate('" + year + theCurrentMonth + dataDate + "');\" id='" + year + theCurrentMonth + dataDate + "' data-actual-date='" + year + '' + theCurrentMonth + '' + dataDate + "' data-db-date='"+ dataDate + '/' + dataMonth + '/' + year + "'><span>"+ dateCounter + "</span></div>");
						
						dateCounter++;
					}else{
						$(this).css("background","#ffffff");
					}
					
					counter++;
					
				});
				
				$('.dayCell div').each(function (index, value){
					
					var thisDate = $(this).attr("data-actual-date");
					var now = new Date();
					var nowDay = now.getDay(); //Day
					var nowDate = now.getDate(); //Date
					var nowMonth = now.getMonth(); //Month
					var actualNowMonth = parseInt(nowMonth) + 1;
					var nowYear = now.getFullYear(); //Year
					
					if(nowDate < 10){
						dataDate = '0' + nowDate;
					}else{
						dataDate = nowDate;
					}
					
					var currentDateIs = nowYear + "" + actualNowMonth + "" + dataDate;
					var result = currentDateIs - thisDate;
					
					if(result > 0){
						$(this).css("opacity","0.5");
					}else{
						//$(this).css("font-weight","bold");
					}
					
				});
			
			
});

function changeMonth(newMonth){
				
		function getDaysInMonth(month, year) {
			// Since no month has fewer than 28 days
			var date = new Date(year, month, 1);
			var days = [];
						 
			while (date.getMonth() === month) {
			days.push(new Date(date));
				date.setDate(date.getDate() + 1);
			}
			
			return days;
		
		}
				
		var newDateObject = new Date();
		var year = newDateObject.getFullYear(); //Year
				
		if(newMonth == 0){
				
			$(".leftPanel").attr("data-previous-month",months[11]);				
			var prevValue = 11;
			$(".leftPanel").attr("data-previous-monthnumber",prevValue);
					
		}else{
			$(".leftPanel").attr("data-previous-month",months[newMonth - 1]);				
			var prevValue = parseInt(newMonth) - 1;
			$(".leftPanel").attr("data-previous-monthnumber",prevValue);
		}
				
		$(".middlePanel").attr("data-current-monthnumber",newMonth);
		$(".middlePanel").attr("data-current-year",year);
		$(".middlePanel h1").text(months[newMonth] + " " + year);

				
		if(newMonth == 11){
				
					$(".rightPanel").attr("data-next-month",months[0]);
					var nextValue = 0;
					$(".rightPanel").attr("data-next-monthnumber",nextValue);
					
		}else{
					$(".rightPanel").attr("data-next-month",months[newMonth + 1]);
					var nextValue = parseInt(newMonth) + 1;
					$(".rightPanel").attr("data-next-monthnumber",nextValue);
		}
				
		var valueOfMonth = parseInt(newMonth);
				
		var daysInThisMonth2 = getDaysInMonth(valueOfMonth, year);
				
		var startFrom2 = ''; //Variable that tells the array which day to start from
		var dateCounter2 = 1;
		var endAt2 = '';
		var daysInMonth2 = 0;
				
		$.each( daysInThisMonth2, function( key, val ) {
					_day = val.getDay(); //Day
					_theDay = days[_day];
					_month = val.getMonth(); //Month				
					_date = val.getDate(); //Date
					
					if(_date == 1){
						startFrom2 = _day;
					}
					daysInMonth2++;
		});
				
		endAt2 = daysInMonth2;
		var counter2 = 0;
		var theCurrentMonth = 1 + parseInt(newMonth);
		
		$('.dayCell').each(function (index, value){
					
			$(this).empty();
			$(this).css("background","#ffffff");
					
			if(counter2 >= startFrom2 && dateCounter2 <= endAt2){						
				var dataDate = '';
				var dataMonth = '';
				if(dateCounter2 < 10){
					dataDate = '0' + dateCounter2;
				}else{
					dataDate = dateCounter2;
				}
				
				if(theCurrentMonth < 10){
					dataMonth = '0' + theCurrentMonth;
				}else{
					dataMonth = theCurrentMonth;
				}
						
				$(this).append("<div onclick=\"checkEmployeesOnThisDate('" + year + theCurrentMonth + dataDate + "');\" id='" + year + theCurrentMonth + dataDate + "' data-actual-date='" + year + '' + theCurrentMonth + '' + dataDate + "' data-db-date='"+ dataDate + '/' + dataMonth + '/' + year + "'><span>"+ dateCounter2 + "</span></div>");
						
				dateCounter2++;
			}else{
				$(this).css("background","#ffffff");
			}
					
			counter2++;
					
		});
		
		$('.dayCell div').each(function (index, value){
					
					var thisDate = $(this).attr("data-actual-date");
					var now = new Date();
					var nowDay = now.getDay(); //Day
					var nowDate = now.getDate(); //Date
					var nowMonth = now.getMonth(); //Month
					var actualNowMonth = parseInt(nowMonth) + 1;
					var nowYear = now.getFullYear(); //Year
					
					if(nowDate < 10){
						dataDate = '0' + nowDate;
					}else{
						dataDate = nowDate;
					}
					
					var currentDateIs = nowYear + "" + actualNowMonth + "" + dataDate;
					var result = currentDateIs - thisDate;
					
					if(result > 0){
						$(this).css("opacity","0.7");
					}else{
						$(this).css("font-weight","bold");
					}
					
		});
			
}
			
function checkEmployeesOnThisDate(item)
{
				
				$('.dayCell div').each(function (index, value){
					
					$(this).parent().css({"background":"#fff"});
					$(this).css("background","#fff");
					$(this).css("color","#666");

				});
			
				$('#' + item).parent().css({"background":"#26a69a"});
				$('#' + item).css("background","#26a69a");
				$('#' + item).css("color","#ffffff");
				var opacity = $('#' + item).css("opacity");

				if(opacity == 1){
					//3 parameters are needed: Company ID (The salon performing the service), the Service ID (the service being requested) and the date.
					var serviceID = chosenServiceId;
					
					var databaseDate = $('#' + item).attr("data-db-date");
					bookingDate = databaseDate;
					var salonID = salonId;
					var count = 0;


					$.ajax
					({
					   url: 'https://lollipopbeauty.co.za/Website_1/api/getAvailableSlots.php?databaseDate=' + databaseDate + '&serviceID=' + serviceID + '&salonID=' + salonID,
					   dataType: 'jsonp',
					   jsonp: 'jsoncallback',
					   timeout: 10000,
					   success: function(data, status)
					   {
						   $(".employeesForThisService").empty();
						   $(".employeesForThisService").append('<h4 class="listHeading">Available Service Providers</h4>');
						   
						   if(data != 'noMatch'){
							   
							   $.each( data, function( key, val ) {
									var _employeeID = val.employee_id;
								
									$(".employeesForThisService").append('<div  onclick="selectThisEmployee(\'employee'+ _employeeID +'\');"  id="employee'+ _employeeID +'" class="row listedEmployee" data-employee-name="'+ val.employee_name +'" data-employee-id="' + _employeeID + '"><div class="col s12"><div class="col s4"><div class="circleProfilePic" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_picture +'\');"></div><div></div></div><div class="col s6"><span class="title">'+ val.employee_name +'</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');
								});
							   
						   }else{
								$(".employeesForThisService").append('<div class="row center-align">Sorry, there are no available service providers for this service.</div><div class="row center-align"><button class="btn-large waves-effect waves-light backToServices myBtn" >Back To Services</button></div>');
						   }
						   
						   
						  
					   },
					   error: function()
					   {	
							failure('Could not connect. Please try again.');
					   }
					   
					});
					
				}else{
					 $(".employeesForThisService").empty();
					failure("Sorry, but you can't make a booking on this day.");
				}
				
}
			
$('.leftPanel').click(function(){
	var newMonth = $(this).attr("data-previous-monthnumber");
	changeMonth(newMonth);
});
			
$('.rightPanel').click(function(){
	var newMonth = $(this).attr("data-next-monthnumber");
	changeMonth(newMonth);
});