var userId = '';
var clientId = '';
var userEmail = '';
var type = '';
var accessKey = '';
var countries = [];
var version = '1.1.1';
var category_id = '';
var service_id = '';
var service_name = '';
var service_cost = '';
var service_duration = '';
var service_description = '';
var service_published = '';
var service_employees = '';
var service_employee = '';
var employees_for_a_service = '';
var chosenServiceId = '';
var myLatitude = '';
var myLongitude = '';
var salonResults = '';
var promoId = '';
var disabledDate = '';
var salonAccountActivated = '';
var _lat = '';
var _long = '';
var salonServiceName = '';
var salonRegionName = '';
var salonProductName = '';
var productId = '';
var myBookedServices = ''; 
var datesWithBookings = '';


//User Profile Attributes
var userProfileId = '';
var userFirstName = '';
var userLastName = '';
var userPhoneNumber = '';
var userPhysicalAddress = '';
var userProfilePicture = '';
var userName = '';
var package_id = '';
var opDays = '';
var userPicture = '';
var userContactNumber = '';
var normalUserId = '';


//Salon Profile Attributes
var salonProfileId = '';
var salonId = '';
var salonName = '';
var salonOperatingHours = '';
var salonEmail = '';
var salonPhoneNumber = '';
var salonStreetAddress = '';
var salonSuburb = '';
var salonCity = '';
var salonAboutUs = '';

//Employee Profile Attributes
var employeeProfileId = '';
var employeeId = '';
var employeeName = '';
var employeeServices = '';
var numberOfServices = '';

//Booking System
var bookingId = 0;
var bookingDate = '';
var _currentDate = '';
var dbDateFormat = '';
var bookingsCount_ForTheDay = '';
var todaysDatePickerFormat = '';
var bookingEmployeeId = '';
var bookingServiceDuration = '';
var todaysDateIs = '';
var scrollIndexValue = 0;
var proposedTime = '';
var chosenCustomer = '';
var viewCustomer = '';
var newMonth = '';

bookingId = localStorage.getItem('bookingId');
bookingEmployeeId = localStorage.getItem('bookingEmployeeId');
bookingDate = localStorage.getItem('bookingDate');
bookingServiceDuration = localStorage.getItem('bookingServiceDuration');
currentDate = localStorage.getItem('_currentDate');
dbDateFormat = localStorage.getItem('dbDateFormat');
bookingsCount_ForTheDay = localStorage.getItem('bookingsCount_ForTheDay');
todaysDatePickerFormat = localStorage.getItem('todaysDatePickerFormat');
todaysDateIs = localStorage.getItem('todaysDateIs');
chosenCustomer = localStorage.getItem('chosenCustomer');
viewCustomer = localStorage.getItem('viewCustomer');
salonResults = localStorage.getItem('salonResults');
promoId = localStorage.getItem('promoId');
disabledDate = localStorage.getItem('disabledDate');
salonAccountActivated = localStorage.getItem('salonAccountActivated');
_lat = localStorage.getItem('_lat');
_long = localStorage.getItem('_long');
salonServiceName = localStorage.getItem('salonServiceName');
salonRegionName = localStorage.getItem('salonRegionName');
salonProductName = localStorage.getItem('salonProductName');
productId = localStorage.getItem('productId');
myBookedServices = localStorage.getItem('myBookedServices');

proposedTime = localStorage.getItem('proposedTime');
proposedEmployee = localStorage.getItem('proposedEmployee');
proposedEmployeeID = localStorage.getItem('proposedEmployeeID');

employeeProfileId = localStorage.getItem('employeeProfileId');
employeeId = localStorage.getItem('employeeId');
employeeName = localStorage.getItem('employeeName');
employeeServices = localStorage.getItem('employeeServices');
numberOfServices = localStorage.getItem('numberOfServices');
datesWithBookings = localStorage.getItem('datesWithBookings');


accessKey = localStorage.getItem('accessKey');
userId = localStorage.getItem('userId');
clientId = localStorage.getItem('clientId');
normalUserId = localStorage.getItem('normalUserId');
type = localStorage.getItem('type');
userEmail = localStorage.getItem('userEmail');
userName = localStorage.getItem('userName');
package_id = localStorage.getItem('package_id');
opDays = localStorage.getItem('opDays');
userPicture = localStorage.getItem('userPicture');
category_id = localStorage.getItem('category_id');
service_id = localStorage.getItem('service_id');
service_name = localStorage.getItem('service_name');
service_cost = localStorage.getItem('service_cost');
service_duration = localStorage.getItem('service_duration');
service_description = localStorage.getItem('service_description');
service_published = localStorage.getItem('service_published');
service_employees = localStorage.getItem('service_employees');
service_employee = localStorage.getItem('service_employee');
employees_for_a_service = localStorage.getItem('employees_for_a_service');
chosenServiceId = localStorage.getItem('chosenServiceId');
userContactNumber = localStorage.getItem('userContactNumber');

//Current
userProfileId = localStorage.getItem('userProfileId');
userFirstName = localStorage.getItem('userFirstName');
userLastName = localStorage.getItem('userLastName');
userPhoneNumber = localStorage.getItem('userPhoneNumber');
userPhysicalAddress = localStorage.getItem('userPhysicalAddress');
userProfilePicture = localStorage.getItem('userProfilePicture');
myLatitude = localStorage.getItem('myLatitude');
myLongitude = localStorage.getItem('myLongitude');


salonProfileId = localStorage.getItem('salonProfileId');
salonId = localStorage.getItem('salonId');
salonName = localStorage.getItem('salonName');
salonOperatingHours = localStorage.getItem('salonOperatingHours');
salonEmail = localStorage.getItem('salonEmail');
salonPhoneNumber = localStorage.getItem('salonPhoneNumber');
salonStreetAddress = localStorage.getItem('salonStreetAddress');
salonSuburb = localStorage.getItem('salonSuburb');
salonCity = localStorage.getItem('salonCity');
salonAboutUs = localStorage.getItem('salonAboutUs');

//Document Ready
$(function(){
	
	//Slide In Menu
	$('.slideInMenuBtn').click(function(){
		$('.overlay-menu').fadeIn(350).css("display","block");
		var scroll_value = 0;
		$('.slideInMenu').animate({left : scroll_value});

	});
	
	//Close Slide In Menu
	$('.tapToClose').click(function(){
		var scroll_value = -350;
		$('.slideInMenu').animate({left : scroll_value});
		$('.overlay-menu').fadeOut(300).css("display","none");
	});
	
	//Close Modal
	$('.errorOverlay').click(function(){
		$('.errorOverlay').fadeOut(300).css("display","none");
	});
	
	//Search Button
	$('.search-icon').click(function(){
		$('.overlay-menu').fadeIn(350).css("display","block");
		var scroll_value = 0;
		$('.slideInSearch').fadeIn();
		$('.slideInSearch').animate({top : scroll_value});
		$('#result').fadeIn();
	});
	
	//Close Search	
	$('.close-search').click(function(){
		$('#search_text').val('');
		$('#result').empty();
		$('#result').fadeOut();
		var scroll_value = -300;
		$('.slideInSearch').animate({top : scroll_value});
		$('.overlay-menu').fadeOut(300).css("display","none");
		$('.slideInSearch').fadeOut();
	});
	
	$('.more-info').click(function(){
		modal();
	});
	
	$('.client_bookings').click(function(){
		modal();
	});
	
	$('.bookingOverlay .closeModal').click(function(){
		$('.bookingOverlay').fadeOut();
	});
	
	$('.toggleSalonInfo').click(function(){
		$('.profileInfo').toggle("slow");
		$('.profileServices').toggle("slow");
	});
	
	$('.changeStatus').click(function(){
		lollipop_updateAccountStatus();
	});
	
	$('.linkTo_userRegistration').click(function(){
		window.location.href = "registerUser.html";
	});
	
	$('.linkTo_salonRegistration').click(function(){
		window.location.href = "registerSalon.html";
	});
	
	$('.linkTo_freelanceRegistration').click(function(){
		window.location.href = "registerFreelancer.html";
	});
	
	$('#allocatedEmployee').click(function(){	
		getAllocatedEmployees();
		$('.employeesOverlay').fadeIn();
	});
	/*
	$('#service').click(function(){	
		getAllServices();
		$('.servicesOverlay').fadeIn();
	});
	*/
	//
	$('.login').click(function(){
		window.location.href = "login.html";
	});
	
	//Sign up
	$('.sign-up').click(function(){
		window.location.href = "registerAs.html";
	});
	
	//Sign up as a user
	$('.sign-up-user').click(function(){
		window.location.href = "registerUser.html";
	});
	
	//Sign up as a salon
	$('.sign-up-salon').click(function(){
		window.location.href = "registerSalon.html";
	});
	
	//Get Countries
	//getCountries();
});

//Get element ID
function _(x){
	id = '#' + x;
	return $(id);
}

//Open Error Modal
function failure(data)
{
	$('#modal1 p').text(data);
	$('#modal1').openModal();
}

//Open Error Modal
function paymentFailure(data)
{
	$('#paymentModal1 p').text(data);
	$('#paymentModal1').openModal();
}

//Open Modal
function modal()
{
	$('.bookingOverlay').fadeIn(500).css("display","block");
}

//Validate Email
function validateEmail(email) 
{
	if(email.indexOf('@') > -1 && email.indexOf('.') > -1 && email.length > 3)
	{
		return true;
	}
	else
	{
		return false;
	}
}

//Login
function login(page, email, password)
{		
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/' + page + '.php?email='+ email + '&password='+ password,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == 'noMatch')
			{
				$("#loading-overlay").fadeOut();
				failure('No account matches your information. Please try again.');
			}
			else
			{
				$("#loading-overlay").fadeOut();
				data = data.split('//');
				
				if(data[0] > 0 && data[1] != '' && data[2] != '')
				{
					localStorage.setItem('accessKey', data[1]);
					localStorage.setItem('userId', data[0]);
					localStorage.setItem('type', data[2]);
					localStorage.setItem('userEmail', data[3]);
					
					localStorage.setItem('userPicture', data[5]);
					localStorage.setItem('userContactNumber', data[6]);
					
					if(data[2] == 'normalUser' && data[8] =='complete')
					{
						localStorage.setItem('userName', data[4]);
                        localStorage.setItem('normalUserId', data[7]);
						window.location.href = "main.html";
					}
					else if(data[2] == 'normalUser' && data[8] =='incomplete'){
						localStorage.setItem('userName', data[4]);
						localStorage.setItem('normalUserId', data[7]);
						window.location.href = "updateUserProfile.html";
					}
					else if(data[2] == 'salonUser')
					{
						localStorage.setItem('salonId', data[7]);
						localStorage.setItem('salonName', data[4]);
						localStorage.setItem('salonAccountActivated', data[8]);
						
						if(salonId > 0){
							window.location.href = "salonDashboard.html";
						}
						
					}
					else if(data[2] == 'employeeUser' && data[8] =='incomplete'){
						localStorage.setItem('userName', data[4]);
						localStorage.setItem('salonId', data[9]);
						localStorage.setItem('employeeId', data[7]);					
						window.location.href = "updateEmployeeProfile.html";
					}
					else if(data[2] == 'employeeUser' && data[8] =='complete')
					{
						localStorage.setItem('userName', data[4]);
						localStorage.setItem('salonId', data[9]);
						localStorage.setItem('employeeId', data[7]);					
						window.location.href = "salonEmployeeDashboard.html";
					}
					window.location.href = "index.html";
				}
				else
				{
					$("#loading-overlay").fadeOut();
					failure('No account matches your information. Please try again.');
				}
				
			}
	   },
	   error: function()
	   {	
			$("#loading-overlay").fadeOut();
			failure('Could not connect. Please try again.');
	   }
	});
}

//Check if user is logged in
function checkLogin()
{
	if(userId == '' || accessKey == '' || type == '')
	{
		localStorage.setItem('accessKey', '');
		localStorage.setItem('userId', '');
		localStorage.setItem('type', '');
		localStorage.setItem('userEmail', '');
		window.location.href = "index.html";
	}
	else
	{
		if(type == 'normalUser')
		{
			verifyLogin('user_profile', 'email', userEmail);
			verifyLogin('user_profile', 'accessKey', accessKey);
		}
		else if(type == 'salonUser')
		{   
			verifyLogin('salon_profile', 'company_email_address', userEmail);
			verifyLogin('salon_profile', 'accessKey', accessKey);

		}
		else if(type == 'employeeUser')
		{
			verifyLogin('salon_employees', 'employee_email', userEmail);
			verifyLogin('salon_employees', 'accessKey', accessKey);
		}
	}
}
function checkPackageStatus(salonId){
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/checkPackageStatus.php?salonID=' + salonId,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

                if(data ==true){
                   localStorage.setItem('salonAccountActivated', '1');
                }else{
                   localStorage.setItem('salonAccountActivated', '0');
                }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });

}

function verifyLogin(base, dataName, data)
{	

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/checkData.php?base='+ base +'&dataName='+ dataName +'&data='+ data,
	   //url: 'http://localhost/Lollipop/Website_1/api/checkData.php?base='+ base +'&dataName='+ dataName +'&data='+ data,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			if(data !== true)
			{

				window.location.href = "logout.html";
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

//Check service information

//Validation Form Functions
var reg_fname, reg_lname, reg_dob, reg_phone_number, reg_email, reg_province, reg_country, reg_password, reg_password_reentry;

function processPhase1(){
	
	reg_fname = _("firstname").val();
	reg_lname = _("lastname").val();
	reg_dob = _("dob").val();
	
	if(reg_fname.length > 2 && reg_lname.length > 2 && reg_dob.length > 2){
		_("phase1").css("display","none");
		_("phase2").fadeIn(350).css("display","block");
	}else{
		failure('Please complete the fields with the correct information.');
	}
	
}

function processPhase2(){
	
	reg_phone_number = _("phone_number").val();
	reg_email = _("email").val();
	
	if(reg_phone_number.length > 2 && reg_email.length){
		
		if(validateEmail(reg_email)){
			
			_("phase2").css("display","none");
			_("phase3").fadeIn(350).css("display","block");
			
		}else{
			failure('Please enter a correct email address.');
		}
		
		
	}else{
		failure('Please complete the fields with the correct information.');
	}
	
}

function processPhase3(){
	
	reg_province = _("province").val();
	reg_country = _("country").val();
	
	if(reg_province.length > 2 && reg_country.length > 2){
		if(isRealCountry(reg_country)){
			_("phase3").css("display","none");
			_("phase4").fadeIn(350).css("display","block");
		}else{
			failure('Please enter a real country.');
		}
	}else{
		failure('Please complete the fields with the correct information.');
	}
	
}

function processPhase4(){
	
	reg_password = _("password").val();
	reg_password_reentry = _("password_reentry").val();
				
	if(reg_password.length > 3 && reg_password_reentry.length > 3){
		
		if(reg_password == reg_password_reentry){
			_("phase4").css("display","none");
			appendFormData();
			_("show_all_data").fadeIn(350).css("display","block");
		}else{
			failure('Passwords do not match.');
		}
			
	}else{
		failure('Please enter a valid password');
	}
				
}

function appendFormData(){
	_("display_fname").text(capitalize(reg_fname));
	_("display_lname").text(capitalize(reg_lname));
	_("display_dob").text(reg_dob);
	_("display_email").text(reg_email);
	_("display_phone_number").text(reg_phone_number);
	_("display_province").text(capitalize(reg_province));
	_("display_country").text(capitalize(reg_country));
}

function getCountries(){
	$.ajax({
	  type: 'GET',
	  url: 'js/countries.json',
	  async: false,
	  dataType: 'json',
	  success: function (data) {
		  
		$.each( data, function( key, val ) {
			countries.push(val.name);
		});
		  
	  }
	});
	
}

function isRealCountry(country){
	country = capitalize(country);

	if($.inArray(country, countries ) > -1){
		return true;
	}else{
		return false;
	}

}

function capitalize(x){
	
	x = x.toLowerCase();

	var string_array = x.split(' ');
	var capitalized_words = [];
	
	for(var x = 0; x < string_array.length; x++){
		var array_item = string_array[x];
		result = array_item.substring(0,1).toUpperCase();
		stringWithoutFirstLetter = array_item.substring(1,array_item.length);
		capitalized_word = result + stringWithoutFirstLetter;
		capitalized_words.push(capitalized_word);
	}
	
	var capitalisedString = capitalized_words.join(' ');
	
	return capitalisedString;
}

//Register Salon
var reg_company_name, reg_company_email, reg_company_phone_number, reg_owner_name, reg_owner_email, reg_owner_phone_number, reg_comapny_location, reg_company_vat_number, reg_salon_type;

function processSalonPhase1(){
	
	reg_company_name = _("company_name").val();
	reg_company_email = _("company_email").val();
	reg_company_phone_number = _("company_phone_number").val();
	
	if(reg_company_name.length > 2 && reg_company_email.length > 2 && reg_company_phone_number.length > 2){
		if(validateEmail(reg_company_email)){
			
			_("salonPhase1").css("display","none");
			_("salonPhase2").fadeIn(350).css("display","block");
			
		}else{
			failure('Please enter a correct email address.');
		}
		
	}else{
		failure('Please complete the fields with the correct information.');
	}
	
}

function processSalonPhase2(){
	
	reg_owner_name = _("owner_name").val();
	reg_owner_email = _("owner_email").val();
	reg_owner_phone_number = _("owner_phone_number").val();
	
	if(reg_owner_name.length > 2 && reg_owner_email.length > 2 && reg_owner_phone_number.length > 2){
		if(validateEmail(reg_owner_email)){
			
			_("salonPhase2").css("display","none");
			_("salonPhase3").fadeIn(350).css("display","block");
			
		}else{
			failure('Please enter a correct email address.');
		}
		
	}else{
		failure('Please complete the fields with the correct information.');
	}
	
}

function processSalonPhase3(){

	reg_company_street_address = _("street_address").val();
	reg_company_suburb = _("suburb").val();
	reg_company_city = _("city").val();
	reg_company_vat_number = _("vat_number").val();
	reg_salon_type = _("salon_type").val();
	
	if(reg_company_street_address.length > 2 && reg_company_suburb.length > 2 && reg_company_city.length > 2 && reg_company_vat_number.length > 2 && reg_salon_type.length > 2){
			
			_("salonPhase3").css("display","none");
			appendSalonFormData();
			_("show_all_salon_data").fadeIn(350).css("display","block");
		
	}else{
		failure('Please complete the fields with the correct information.');
	}
	
}


function appendSalonFormData(){
	
	_("display_company_name").text(capitalize(reg_company_name));
	_("display_company_email").text(reg_company_email);
	_("display_company_phone_number").text(reg_company_phone_number);
	
	_("display_owner_name").text(capitalize(reg_owner_name));
	_("display_owner_email").text(reg_owner_email);
	_("display_owner_phone_number").text(reg_owner_phone_number);
	
	_("display_street_address").text(capitalize(reg_company_street_address));
	_("display_suburb").text(capitalize(reg_company_suburb));
	_("display_city").text(capitalize(reg_company_city));
	
	
	_("display_vat_number").text(reg_company_vat_number);
	_("display_salon_type").text(reg_salon_type);
	
}

/* All variables and functions are exclusive to Lollipop Admin/Management Profile */
//Lollipop function: View Salon Account

var lollipop_salonID = '';
var lollipop_salonName = '';
var lollipop_salonEmail = '';
var lollipop_salonPhoneNumber = '';
var lollipop_ownersName = '';
var lollipop_ownersEmail = '';
var lollipop_ownersPhoneNumber = '';
var lollipop_location = '';
var lollipop_vatNumber = '';
var lollipop_salonType = '';
var lollipop_activated = '';

lollipop_salonID = localStorage.getItem('lollipop_salonID');
lollipop_salonName = localStorage.getItem('lollipop_salonName');
lollipop_salonEmail = localStorage.getItem('lollipop_salonEmail');
lollipop_salonPhoneNumber = localStorage.getItem('lollipop_salonPhoneNumber');
lollipop_ownersName = localStorage.getItem('lollipop_ownersName');
lollipop_ownersEmail = localStorage.getItem('lollipop_ownersEmail');
lollipop_ownersPhoneNumber = localStorage.getItem('lollipop_ownersPhoneNumber');
lollipop_location = localStorage.getItem('lollipop_location');
lollipop_vatNumber = localStorage.getItem('lollipop_vatNumber');
lollipop_salonType = localStorage.getItem('lollipop_salonType');
lollipop_activated = localStorage.getItem('lollipop_activated');

function lollipop_viewSalonAccount(id){
	
	$.ajax
	({
	   url: 'http://localhost/Lollipop/Website_1/api/getSalonAccount.php?salonID='+ id,
	   //url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonAccount.php?email='+ id,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == 'noMatch')
			{
				failure('This account does not exist.');
			}
			else
			{
				data = data.split('//');
				
				if(data[0] > 0 && data[1] != '' && data[2] != '')
				{
					localStorage.setItem('lollipop_salonID', data[0]);
					localStorage.setItem('lollipop_salonName', data[1]);
					localStorage.setItem('lollipop_salonEmail', data[2]);
					localStorage.setItem('lollipop_salonPhoneNumber', data[3]);
					localStorage.setItem('lollipop_ownersName', data[4]);
					localStorage.setItem('lollipop_ownersEmail', data[5]);
					localStorage.setItem('lollipop_ownersPhoneNumber', data[6]);
					localStorage.setItem('lollipop_location', data[7]);
					localStorage.setItem('lollipop_vatNumber', data[8]);
					localStorage.setItem('lollipop_salonType', data[9]);
					localStorage.setItem('lollipop_activated', data[10]);
					
					window.location.href = "lollipop_viewAccount.html";
					
				}
				else
				{
					failure('No account matches your information. Please try again.');
				}
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function viewSalonData(){
	_("lollipop_viewAccount_companyName").text(lollipop_salonName);
	_("lollipop_viewAccount_companyEmail").text(lollipop_salonEmail);
	_("lollipop_viewAccount_companyPhoneNumber").text(lollipop_salonPhoneNumber);
	
	_("lollipop_viewAccount_ownersName").text(lollipop_ownersName);
	_("lollipop_viewAccount_ownersEmail").text(lollipop_ownersEmail);
	_("lollipop_viewAccount_ownersPhoneNumber").text(lollipop_ownersPhoneNumber);
	
	_("lollipop_viewAccount_location").text(lollipop_location);
	_("lollipop_viewAccount_vatNumber").text(lollipop_vatNumber);
	_("lollipop_viewAccount_salonType").text(lollipop_salonType);
	
	verifyAccountStatus();
}

//Angular Meets jQuery Functions

$(document).on("click", ".viewAccount", function(){
	
	id = $(this).attr("data-company-id");
	lollipop_viewSalonAccount(id);

});

function lollipop_updateAccountStatus(){
	
	id = lollipop_salonID; // Salon ID
	newAccountStatus = changeAccountStatus();
	
	$.ajax
	({
	   //url: 'http://localhost/Lollipop/Website_1/api/updateSalonAccountStatus.php?salonID='+ id + '&newAccountStatus='+ newAccountStatus,
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateSalonAccountStatus.php?salonID='+ id + '&newAccountStatus='+ newAccountStatus,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == 'noMatch')
			{
				failure('This account does not exist.');
			}
			else
			{
				
				if(data[0] != '')
				{

					localStorage.setItem('lollipop_activated', data[0]);
					verifyAccountStatus();
					window.location.href = "lollipop_allAccounts.html";
					
				}
				else
				{
					failure('No account matches your information. Please try again.');
				}
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

}

function verifyAccountStatus(){
	if(lollipop_activated ==1){
		account_status = 'Activated';
		_("changeAccountStatusContainer").css("background","#b30000");
		_("changeAccountStatusTo").text('Suspend Account');
	}else if(lollipop_activated ==0){
		account_status = 'Not Activated';
		_("changeAccountStatusContainer").css("display","none");
	}else if(lollipop_activated == -1){
		account_status = 'Suspended';
		_("lollipop_viewAccount_active").css("color","#b30000");
		_("changeAccountStatusContainer").css("background","#3399ff");
		_("changeAccountStatusTo").text('Reactivate Account');
	}
	_("lollipop_viewAccount_active").text(account_status);
}

function changeAccountStatus(){
	
	changeAccountStatusTo = '';
	
	if(lollipop_activated == 1){
		
		changeAccountStatusTo = -1; // Deactivate/Suspend Account
		
	}else if(lollipop_activated == -1){
		
		changeAccountStatusTo = 1; //Reactivate Account
		
	}else{
		
	}
	
	return changeAccountStatusTo;
}

var mySalonApp = angular.module('mySalonApp', []);
mySalonApp.controller('myController', function($scope, $http){
	$http.get('https://lollipopbeauty.co.za/Website_1/api/getServiceCategories.php?salonID=' + salonId).success(function(response){
		$scope.myData = response;
		
	});
});

var myEmployeesApp = angular.module('myEmployeesApp', []);
myEmployeesApp.controller('myController', function($scope, $http){
	$http.get('https://lollipopbeauty.co.za/Website_1/api/getSalonEmployees.php?salonID=' + salonId).success(function(response){
		if(response ==''){
			$("#noEmployees").text("No employees added yet.");
		}else{
			$("#noEmployees").css("display", "none");
			$scope.myData = response;
		}
		
	});
});

function getAllSalonServiceCategories(salonId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getServiceCategories.php?salonID='+ salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data !='noMatch' ){
				var radioCount = 0;
				$.each( data, function( key, val ) {
					
					$('.containerForServiceCategories').append('<div onclick="checkChosenServiceCategory(\'chosenCategory'+ val.category_id +'\')" id="chosenCategory'+ val.category_id +'" class="serviceCategory" data-category-id="'+ val.category_id +'"><div class="leftSide" style=""><img src="'+ val.category_icon +'"></div><div class="rightSide" style=""><span>'+ val.category_name +'</span></div><div class="farRight" style=""><div class="circleContainer"><span>'+ val.number_of_services +'</div></span></div></div>');

					radioCount++;
					
				});
			}else{
				
				$('.containerForServiceCategories').append('<div class="row center-align"><div class="col s12">There are currently no service categories.</div></div>');
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
		$.ajax
		({
		   url: 'https://lollipopbeauty.co.za/Website_1/api/getServices.php?salonID='+ salonId,
		   dataType: 'jsonp',
		   jsonp: 'jsoncallback',
		   timeout: 10000,
		   success: function(data, status)
		   {
				if(data !='noMatch' ){
					var radioCount = 0;
					$.each( data, function( key, val ) {
						$('.containerForListedServices').append('<div onclick="checkChosenService(\'chosenService'+ val.service_id +'\')" id="chosenService'+ val.service_id +'" class="listedService" data-service-category="'+ val.category_id +'" data-service-id="'+ val.service_id +'"><div>'+ val.service_name +'</div></div>');
					});
				}else{
					$('.containerForListedServices').append('There are currently no services.');
				}
		   },
		   error: function()
		   {	
				failure('Could not connect. Please try again.');
		   }
		});

}

function checkChosenServiceCategory(item){
	
	$('.serviceCategories').animate({width: "30%"});
	$('.leftSide').animate({width: "100%"});
	$('.rightSide').css("display","none");
	$('.farRight').css("display","none");
	$('.buttonContainer').css("display","none");
	category_id = $("#" + item).attr("data-category-id");
	localStorage.setItem('category_id', category_id);
	
	//Set The Category Name
	if(category_id == 1){
		$('.selectedCategoryHeading').empty();
		$('.selectedCategoryHeading').append('<i class="ion-android-add-circle addServiceIcon"></i>&nbsp;&nbsp;');
		$('.selectedCategoryHeading').append(' Make-Up');
	}else if(category_id == 2){
		$('.selectedCategoryHeading').empty();
		$('.selectedCategoryHeading').append('<i class="ion-android-add-circle addServiceIcon"></i>&nbsp;&nbsp;');
		$('.selectedCategoryHeading').append(' Hair');
	}else if(category_id == 3){
		$('.selectedCategoryHeading').empty();	
		$('.selectedCategoryHeading').append('<i class="ion-android-add-circle addServiceIcon"></i>&nbsp;&nbsp;');	
		$('.selectedCategoryHeading').append(' Nails');	
	}else if(category_id == 4){
		$('.selectedCategoryHeading').empty();
		$('.selectedCategoryHeading').append('<i class="ion-android-add-circle addServiceIcon"></i>&nbsp;&nbsp;');
		$('.selectedCategoryHeading').append(' Massage');
	}else if(category_id == 5){
		$('.selectedCategoryHeading').empty();
		$('.selectedCategoryHeading').append('<i class="ion-android-add-circle addServiceIcon"></i>&nbsp;&nbsp;');
		$('.selectedCategoryHeading').append(' Waxing');
	}else if(category_id == 6){
		$('.selectedCategoryHeading').empty();
		$('.selectedCategoryHeading').append('<i class="ion-android-add-circle addServiceIcon"></i>&nbsp;&nbsp;');
		$('.selectedCategoryHeading').append(' Barber');
	}else{
			
	}

	$('.listedService').each(function(key, value) {
		checkThisServiceCategory = $(this).attr("data-service-category");
		
		if(checkThisServiceCategory == category_id){
			$(this).fadeIn(300).css("display","block");
		}else{
			$(this).css("display","none");
		}
		
	});

}

function checkChosenService(item){
	service_id = $("#" + item).attr("data-service-id");
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getService.php?serviceID='+ service_id,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == 'noMatch')
			{
				failure('This service does not exist.');
			}
			else
			{
				data = data.split('//');
				
				if(data[0] != '')
				{
					
					localStorage.setItem('service_id', data[0]);
					localStorage.setItem('service_name', data[1]);
					localStorage.setItem('service_cost', data[2]);
					localStorage.setItem('service_duration', data[3]);
					localStorage.setItem('service_description', data[4]);
					localStorage.setItem('service_employees', data[5]);
					
					if(data[0] > 0)
					{
						window.location.href = "salonService.html";
					}
					
				}
				else
				{
					failure('This service does not exist.');
				}
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

}
/*
$(document).on("click", ".availableEmployee", function(){
	employeeID = $(this).attr("data-employee-id");

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployee.php?employeeID='+ employeeID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				if(data[0] != '')
				{
					data = data.split('//');
					localStorage.setItem('employeeName', data[0]);
					localStorage.setItem('employeeServices', data[1]);
					localStorage.setItem('employeeId',employeeID);
					
					if(data[0].length > 0)
					{
						window.location.href = "updateEmployee.html";
					}
					
				}
				else
				{
					failure('This employee does not exist.');
				}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

});
*/
function updateThisEmployee(item){
	
	employeeID = $("#" + item).attr("data-employee-id");
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployee.php?employeeID='+ employeeID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				if(data[0] != '')
				{
					data = data.split('//');
					localStorage.setItem('employeeName', data[0]);
					localStorage.setItem('employeeServices', data[1]);
					localStorage.setItem('employeeId',employeeID);
					
					if(data[0].length > 0)
					{
						window.location.href = "updateEmployee.html";
					}
					
				}
				else
				{
					failure('This employee does not exist.');
				}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function getEmployeeSalonServices(){

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServices.php?salonID=' + salonId + '&employeeID=' + employeeId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var serviceCount = 0;
			$('#listAllServices').append('<div class="inputRow" style=""><input class="magic-checkbox selectAll" type="checkbox" name="All Services" id="allServices" value="allServices" ><label class="text" for="allServices" style="position: relative;  color: #666; font-weight: bold; text-transform: uppercase;">ALL SERVICES</label></div>');
			$.each( data, function( key, val ) {
				//$('#listAllServices').append('<div class="listedServiceCategory"><div class="listedServiceCategory__checkbox_container"><input type="checkbox" name="' + val.checkbox_id + '" id="' + val.checkbox_id + '" value="' + val.service_id + '" class="ios-toggle" '+ val.checked +' /><label for="' + val.checkbox_id + '" class="checkbox-label" data-off="off" data-on=""></label></div><div class="listedServiceCategory__name_container"><h1>' + val.service_name + '</h1></div></div>');
				$('#listAllServices').append('<div class="inputRow" style=""><input class="magic-checkbox aService" type="checkbox" name="' + val.checkbox_id + '" id="' + val.checkbox_id + '" value="' + val.service_id + '" '+ val.checked +'><label class="text" for="' + val.checkbox_id + '" style="position: relative; color: #666; font-weight: bold; text-transform: uppercase;">'+ val.service_name +'</label></div>');
				serviceCount++;
			});
			
			localStorage.setItem('numberOfServices', serviceCount);
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

}

function getPromoServices(){
	var employeeID = 1;
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServices.php?salonID=' + userId + '&employeeID=' + employeeID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var serviceCount = 0;
			$('#listAllServices').append('<div class="inputRow" style=""><input class="magic-checkbox selectAll" type="checkbox" name="All Services" id="allServices" value="allServices" ><label class="text" for="allServices" style="position: relative;  color: #666; font-weight: bold; text-transform: uppercase;">ALL SERVICES</label></div>');
			$.each( data, function( key, val ) {
				//$('#listAllServices').append('<div class="listedServiceCategory"><div class="listedServiceCategory__checkbox_container"><input type="checkbox" name="' + val.checkbox_id + '" id="' + val.checkbox_id + '" value="' + val.service_id + '" class="ios-toggle" '+ val.checked +' /><label for="' + val.checkbox_id + '" class="checkbox-label" data-off="off" data-on=""></label></div><div class="listedServiceCategory__name_container"><h1>' + val.service_name + '</h1></div></div>');
				$('#listAllServices').append('<div class="inputRow" style=""><input class="magic-checkbox aService" type="checkbox" name="' + val.checkbox_id + '" id="' + val.checkbox_id + '" value="' + val.service_id + '"><label class="text" for="' + val.checkbox_id + '" style="position: relative; color: #666; font-weight: bold; text-transform: uppercase;">'+ val.service_name +'</label></div>');
				serviceCount++;
			});
			
			localStorage.setItem('numberOfServices', serviceCount);
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

}

function updateServicesForEmployee(employeeId, employeeName, employeeRole, updatedServices, employeeEmail, experience, employeePhoneNumber, operatingHours){
	
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateServicesForEmployee.php?employeeID='+ employeeId + '&employeeName=' + employeeName + '&employeeRole=' + employeeRole + '&services=' + updatedServices + '&employeeEmail=' + employeeEmail + '&experience=' + experience + '&employeePhoneNumber=' + employeePhoneNumber + '&operatingHours=' + operatingHours,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Employee profile has been updated.', 7000);
				}
				else
				{
					failure('There was a problem. Please try again.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}


mySalonApp.controller('servicesController', function($scope, $http){
		
	$http.get('https://lollipopbeauty.co.za/Website_1/api/getServices.php?salonID=' + salonId).success(function(response){
		$scope.servicesData = response;
	});
		
});

function getServiceInfo(){
	//Set The Category Name
	if(category_id == 1){
		_("serviceCategoryHeading").append('Make-Up');
	}else if(category_id == 2){
		_("serviceCategoryHeading").append('Hair');
	}else if(category_id == 3){
		_("serviceCategoryHeading").append('Nails');	
	}else if(category_id == 4){
		_("serviceCategoryHeading").append('Massage');
	}else if(category_id == 5){
		_("serviceCategoryHeading").append('Waxing');
	}else if(category_id == 6){
		_("serviceCategoryHeading").append('Barber');
	}else{
			
	}
	
	_("serviceID").val(service_id);
	_("serviceName").val(service_name);
	_("servicePrice").val(service_cost);
	_("serviceDuration").val(service_duration);
	_("serviceDesc").val(service_description);
	
}


$(document).on("click", ".goService", function(){
	url = $(this).attr("data-service-link");
	if(url != ''){
		window.location.href = url + ".html";
	}else{
		
	}
});

function setProfileInfo(){

	$.ajax
	({
	   //url: 'http://localhost/Lollipop/Website_1/api/getProfile.php?userEmail='+ userEmail,
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getProfile.php?userEmail='+ userEmail,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == 'noMatch')
			{
				failure('This profile does not exist.');
			}
			else
			{
				data = data.split('//');
				
				if(data[0] != '')
				{
					localStorage.setItem('userProfileId', data[0]);
					localStorage.setItem('userFirstName', data[1]);
					localStorage.setItem('userLastName', data[2]);
					localStorage.setItem('userPhoneNumber', data[3]);
					localStorage.setItem('userPhysicalAddress', data[4]);
					localStorage.setItem('userProfilePicture', data[5]);
					/*
					if(data[0] > 0)
					{
						window.location.href = "profile.html";
					}
					*/
					
				}
				else
				{
					failure('This profile does not exist.');
				}
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});


}

function setData(base, dataName, dataItem, item, output, type)
{		
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getData.php?base='+ base +'&dataName='+ dataName +'&dataItem='+ dataItem  +'&item='+ item,
	   //url: 'http://localhost/Lollipop/Website_1/api/getData.php?base='+ base +'&dataName='+ dataName +'&dataItem='+ dataItem  +'&item='+ item,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(type == 'profileImage')
			{		 
				var picture = 'https://lollipopbeauty.co.za/Website_1/temp/' + data;
				//var picture = 'http://localhost/Lollipop/Website_1/temp/' + data;
				_(output).attr( "src", picture ); 
			}else if(type == 'banner'){
				
				if(data != ""){
					var picture = 'https://lollipopbeauty.co.za/Website_1/temp/' + data;
					var childElement = output + " span";
					_(childElement).css("display","none");
					_(output).css("background", "url('"+ picture +"')");
				}else{
					
					_(output).css("background", "#f2f2f2;");
					
				}
				
				
			}else if(type == 'normalText'){
				_(output).val(data);
			}
			else if(type == 'hiddenText'){
				//session the variable
				localStorage.setItem('package_id', data);
				console.log("Package"+data);
				$('#'+output).val(data);
			}
			else if(type == 'workingHoursText'){
				localStorage.setItem('opDays', data);
			}
			else if(type == 'checkBox'){
				
				if(data ==1){
					_(output).prop( "checked", true );
				}else{
					_(output).prop( "checked", false );
				}
				
				
			}
			// else if(type == 'selectText'){
			// 	 console.log("Coming");
			// 	 console.log(type);
			// 	 console.log(output);
			// 	 console.log(data);
			// 	 if(data == '0'){
			// 	 	document.getElementById(output).options.selectedIndex = 1;
			// 	 }
			// 	 if(data == '180'){
			// 	 	document.getElementById(output).options.selectedIndex = 2;
			// 	 }
			// 	 if(data == '250'){
			// 	 	document.getElementById(output).options.selectedIndex = 3;
			// 	 }

			// 	 if(data == '350'){
			// 	 	document.getElementById(output).options.selectedIndex = 4;
			// 	 }
			// }
			else if(type == 'statusText'){
				
				if(data == 1){
					_(output).val('Active');
				}
				else if(data == 0){
					_(output).val('Not Active');
				}else{
					_(output).val('Rejected');
				}
				
			}
			else if(type == 'commentText'){
				
				if(data == ''){
					_(output).val('No comment has been made.');
				}else{
					_(output).val(data);
				}
				
			}
			else if(type == 'spanText'){
				_(output).empty();
				_(output).append(data);
			}
			else if(type == 'hideMe'){
				if(data == 1){
					_(output).fadeOut();
				}
			}
			else if(type == 'spanCost'){
				_(output).empty();
				_(output).append('R ' + data);
			}
			else if(type == 'specialText'){
				resetCurrentDate(data);
			}
			else if(type == 'salonProfileImage'){
				var picture = 'https://lollipopbeauty.co.za/Website_1/temp/' + data;
				//var picture = 'http://localhost/Lollipop/Website_1/temp/' + data;
				_("salonCompanyLogo").attr( "src", picture );
			}
			else if(type == 'profilePic'){
				if(data != ''){
					var picture = 'https://lollipopbeauty.co.za/Website_1/temp/' + data;
					//var picture = 'http://localhost/Lollipop/Website_1/temp/' + data;
					_(output).css("background", "url('"+ picture +"')");
				}else{
					var picture = 'https://lollipopbeauty.co.za/Website_1/temp/salon_user.jpg';
					//var picture = 'http://localhost/Lollipop/Website_1/temp/' + data;
					_(output).css("background", "url('"+ picture +"')");
				}
			}
	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
}

function registerUser(firstName, lastName, dob, phoneNumber, emailAddress, province, country, password){
	
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({		
	   url : 'https://lollipopbeauty.co.za/Website_1/api/registerNormalUser.php?firstName=' + firstName + '&lastName='+ lastName + '&dob='+ dob +'&phoneNumber='+ phoneNumber +'&email='+ emailAddress + '&province='+ province +'&country='+ country +'&password='+ password,
	   //url : 'http://localhost/Lollipop/Website_1/api/registerNormalUser.php?firstName=' + firstName + '&lastName='+ lastName + '&dob='+ dob +'&phoneNumber='+ phoneNumber +'&email='+ emailAddress + '&province='+ province +'&country='+ country +'&password='+ password,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == true)
			{			
				window.location = 'login.html';
			}
	   },
	   error: function()
	   {	
			$("#loading-overlay").fadeOut();
			failure('There was a problem connecting.');
	   }
	});
}

function updateData(profileID, firstName, lastName, email, phoneNumber, physicalAddress, province, dateOfBirth)
{	
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateProfile.php?profileID='+ profileID +'&firstName='+ firstName +'&lastName='+ lastName +'&email='+ email  +'&phoneNumber='+ phoneNumber + '&physicalAddress=' + physicalAddress + '&province=' + province + '&dateOfBirth=' + dateOfBirth,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			data = data.split('//');
			if(data[0] == 1)
			{		
				localStorage.setItem('userName', data[1]);
				Materialize.toast('Your profile has been updated.', 7000);
				window.location = 'main.html';
			}else{
				Materialize.toast('Update failed, please try again.', 7000);
				window.location = 'main.html';
			}
	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
}

function updateEmployeeData(employeeId, fullName, userEmailAddress, userPhoneNumber, physicalAddress, whyChooseMe){
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateEmployeeProfile.php?employeeProfileId='+ employeeId +'&fullName='+ fullName +'&whyChooseMe='+ whyChooseMe +'&email='+ userEmailAddress  +'&phoneNumber='+ userPhoneNumber + '&physicalAddress=' + physicalAddress,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			data = data.split('//');
			if(data[0] == 1)
			{		
				localStorage.setItem('userName', data[1]);
				Materialize.toast('Your profile has been updated.', 7000);
			}else{
				Materialize.toast('Update failed, please try again.', 7000);
			}
	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
}


function updateSalonData(salonId, companyName, ownersName, companyEmail, ownerEmail, companyPhoneNumber, ownerPhoneNumber, aboutUs, streetAddress, suburb, city, location, vatNumber, salonOperatingHours, salonWeekendHours, salonPublicHolidays, freelancer ,opDays, package)
{	
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateSalonProfile.php?salonProfileId='+ salonId + '&ownersName=' + ownersName + '&ownerEmail=' + ownerEmail + '&ownerPhoneNumber=' + ownerPhoneNumber +'&salonName='+ 
	   companyName +'&salonOperatingHours='+ salonOperatingHours + '&salonWeekendHours=' + salonWeekendHours + '&salonPublicHolidays=' + salonPublicHolidays + '&salonEmail='+ companyEmail  +'&salonPhoneNumber='+ companyPhoneNumber +
	    '&salonStreetAddress=' + streetAddress + '&salonSuburb=' + suburb + '&salonCity=' + city + '&location=' + location + '&vatNumber=' + vatNumber + '&salonProfileDesc=' + aboutUs + '&freelancer=' + freelancer+'&opDays='+opDays+'&package='+package,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		   $("#loading-overlay").fadeOut();
		   data = data.split('//');
			if(data[0] == 1)
			{	
				localStorage.setItem('salonName', data[1]);
				//Materialize.toast('Your profile has been updated.', 7000) ;
				//check if the user needs to pay and redirect to payment page
				//failure('Package'+package);
				if(package == '' || package == null){
				 window.location.href="payments.html";
			    }else{
			    	 window.location.href='salonDashboard.html';
			    }
			    //Redirect to dashboard
			    //sleep(10000);
			   
			    Materialize.toast('Your profile has been updated.', 7000) ;
			}
	   },
	   error: function()
	   {	
			$("#loading-overlay").fadeOut();
			failure('There was a problem connecting.');
	   }
	});
}
function processPayment(id_value)
{	
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/processPayment.php?salonProfileId='+ salonId + '&id_value='+id_value+'',
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		   $("#loading-overlay").fadeOut();
		   data = data.split('//');
			if(data[0] == 1)
			{	
				localStorage.setItem('package_id', id_value);
				var package = id_value;
				//Materialize.toast('Your profile has been updated.', 7000) ;
				//check if the user needs to pay and redirect to payment page
				//failure('Package'+package);
				if(id_value != 0){
					var des = '';
					localStorage.setItem('salonAccountActivated', '0');
					if(package == '180'){ des = 'Freelancer+R180';}if(package == '250'){ des = '2-5+Users';}if(package == '350'){ des = '6+or+more+Users';}
				window.location.href="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=12037511&item_name="+des+"&item_description="+des+"&amount="+package+".00&return_url=https%3A%2F%2Flollipopbeauty.co.za%2Fresponse.php%3Fstatus%3Dsuccess%26uid%3D"+salonId+"&cancel_url=https%3A%2F%2Flollipopbeauty.co.za%2Fresponse.php%3Fstatus%3Dcancel%26uid%3D"+salonId+"";
			    }else{
			    	localStorage.setItem('salonAccountActivated', '1');
			    	window.location.href='salonDashboard.html';
			    }
			    //Redirect to dashboard
			    //sleep(10000);
			    
			    Materialize.toast('Payment activate.', 7000) ;
			   
			}
	   },
	   error: function()
	   {	
			$("#loading-overlay").fadeOut();
			failure('There was a problem connecting.');
	   }
	});
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function updateBooking(bookingID, allocatedEmployee, allocatedEmployeeID, dateOfBooking, serviceID, service, serviceCost, serviceDuration, timeOfBooking, tipForEmployee, performed)
{	
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateBooking.php?bookingID='+ bookingID +'&allocatedEmployee='+ allocatedEmployee +'&allocatedEmployeeID='+ allocatedEmployeeID +'&dateOfBooking='+ dateOfBooking + '&serviceID=' +serviceID + '&service=' + service + '&serviceCost=' + serviceCost + '&serviceDuration=' + serviceDuration + '&timeOfBooking='+ timeOfBooking + '&tipForEmployee=' + tipForEmployee + '&performed=' + performed,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			
			if(data == true)
			{			
				Materialize.toast('Booking has been updated.', 5000) ;
			}
	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
}

function deleteBooking(bookingID)
{	

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/deleteBooking.php?bookingID='+ bookingID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data > 0)
			{			
				window.location = 'manageBookings.html';
			}
	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
}

function addBooking(clientName, clientPhoneNumber, clientEmail, companyId, serviceId, service, serviceCost, timeToCompleteService, allocatedEmployee, allocatedEmployeeID, dateOfBooking, timeOfBooking)
{	
	var userRequest = '';
	var userLocation = '';

    $("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addBooking.php?clientName='+ clientName + '&clientPhoneNumber=' + clientPhoneNumber + '&clientEmail=' + clientEmail + '&companyId=' + companyId + '&serviceId=' + serviceId + '&service=' + service + '&serviceCost=' + serviceCost + '&timeToCompleteService=' + timeToCompleteService + '&allocatedEmployee='+ allocatedEmployee +'&allocatedEmployeeID='+ allocatedEmployeeID +'&dateOfBooking='+ dateOfBooking  +'&timeOfBooking='+ timeOfBooking + '&userLocation=' + userLocation + '&userRequest=' + userRequest,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
           $("#loading-overlay").fadeOut();
			if(data == true)
			{
                Materialize.toast('Booking has been added.', 5000) ;
			}
	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
	
}

function addSalonService(salonProfileId, serviceName, servicePrice, serviceDuration, serviceDesc, serviceCategory){
	
	$('#loading-overlay').fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addService.php?salonProfileId='+ salonProfileId +'&serviceName='+ serviceName +'&servicePrice='+ servicePrice +'&serviceDuration='+ serviceDuration  +'&serviceDesc='+serviceDesc + '&serviceCategory='+serviceCategory,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$('#loading-overlay').fadeOut();
			if(data == true)
			{			
				Materialize.toast('The new service has been added.', 7000) ;
			}
	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
}

function getCurrentServiceCategories(){
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getCurrentServiceCategories.php?salonUserID='+ salonProfileId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$.each( data, function( key, val ) {
				
				if(val == "1"){
					_("checkbox1").prop('checked', true);
				}
				
				if(val == "2"){
					_("checkbox2").prop('checked', true);
				}
				
				if(val == "3"){
					_("checkbox3").prop('checked', true);
				}
				
				if(val == "4"){
					_("checkbox4").prop('checked', true);
				}
				
				if(val == "5"){
					_("checkbox5").prop('checked', true);
				}
				
				if(val == "6"){
					_("checkbox6").prop('checked', true);
				}
			});

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function setSalonProfileInfo(){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonProfile.php?userEmail='+ userEmail,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == 'noMatch')
			{
				window.location.href = "logout.html";
			}
			else
			{
				data = data.split('//');
				
				if(data[0] != '')
				{

					localStorage.setItem('salonProfileId', data[0]);
					localStorage.setItem('salonName', data[1]);
										
					/*
					if(data[0] > 0)
					{
						window.location.href = "profile.html";
					}
					*/
				}
				else
				{
					window.location.href = "logout.html";
				}
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function setEmployeeProfileData(){
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonEmployeeProfile.php?userEmail='+ userEmail,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == 'noMatch')
			{
				window.location.href = "logout.html";
			}
			else
			{
				data = data.split('//');
				
				if(data[0] != '')
				{

					localStorage.setItem('employeeProfileId', data[0]);
					localStorage.setItem('employeeName', data[1]);
										
				}
				else
				{
					window.location.href = "logout.html";
				}
				
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function upateServiceCategories(salonProfileId, categories){
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateServiceCategories.php?salonProfileId='+ salonProfileId + '&categories=' + categories,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				if(data == true)
				{
					window.location.href = "salonServices.html";
				}
				else
				{
					failure('There was a problem. Please try again.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function addSalonEmployee(salonProfileId, fullName, employeeRole, employeeEmail, operatingHours, experience){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addSalonEmployee.php?salonProfileId='+ salonProfileId + '&fullName=' + fullName + '&employeeRole=' + employeeRole + '&employeeEmail=' + employeeEmail + '&operatingHours=' + operatingHours + '&experience=' + experience,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			
			data = data.split('//');
			
			if(data[0] > 0 && data[1] == 'newAccount')
			{
				Materialize.toast('The new employee has been added.', 7000) ;
				window.location.href = "employees.html";

			}
			else if(data[0] == -1 && data[1] == 'alreadyExists'){
					
				failure('There\'s already an account associated with this email.');
			
			}
			else
			{
				failure('There was a problem. Please try again.');
			}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function getProfileInfo(){	
	_("userId").val(userProfileId);
}

function getSalonProfileInfo(){	
	_("salonUserId").val(salonProfileId);
}

function getEmployeeProfileInfo(){	
	_("employeeUserId").val(employeeProfileId);
}

function getChosenDate(){
	//Default will be current date
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var fullDate = new Date();
	var day = fullDate.getDay(); //Day
	var date = fullDate.getDate(); //Date
	var month = fullDate.getMonth(); //Month
	var year = fullDate.getFullYear(); //Year
	
	currentDay = days[day];
	currentDate = date;
	currentMonth = months[month];
	currentYear = year;
		
		var correctDate = currentDate;
		
		//Append 0 to date
		if(correctDate == 1){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 2){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 3){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 4){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 5){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 6){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 7){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 8){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else if(correctDate == 9){
			
			correctDate = "0" + correctDate;
			var twoDigitDate = correctDate;
			
		}else{
			
			var twoDigitDate = correctDate;
			
		}
		
		var correctMonth = month + 1;
		
		if(correctMonth == 1){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 2){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 3){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 4){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 5){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 6){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 7){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 8){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else if(correctMonth == 9){
			
			correctMonth = "0" + correctMonth;
			var twoDigitMonth = correctMonth;
			
		}else{
			
			var twoDigitMonth = correctMonth;
			
		}
		
	
	todaysDateDBformat = twoDigitDate + "/" + twoDigitMonth + "/" + currentYear; /* dd/mm/yyyy */
	todayDPFormat = currentYear + "-" + twoDigitMonth + "-" + date; /* YYYY-MM-DD */
	
	localStorage.setItem('dbDateFormat', todaysDateDBformat);
	localStorage.setItem('todaysDatePickerFormat', todayDPFormat);
	//var todaysDate = currentDay + " " + currentDate + " " + currentMonth + ", " + currentYear;
	_("dateToday").append(dbDateFormat);
}



function getBookings(){
	$(".bookings").empty();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getBookings.php?chosenDate=' + dbDateFormat,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var bookingCount = 0;
			var bookingCountNo = bookingCount + 1;
			
			var borderColors = ["#00ccff", "#ffcc00", "#ff6600", "#ff0000", "#99ff33", "#80bfff", "#cc6699"];
			var borderCount = 0;
			var borderCap = 6;
			
			$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + dbDateFormat + '</h1></div></div>');
			
			$.each( data, function( key, val ) {
				$('.bookings').append('<div class="booking" data-booking-employee-id="'+ val.employee_id +'" data-booking-id="'+  val.booking_id +'" data-booking-duration="'+ val.time_to_complete_service +'" data-booking-date="'+ val.booking_date +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCountNo +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
				bookingCount++;
				bookingCountNo++;
				borderCount++;
				if(borderCount == borderCap){
					borderCount = 0;
				}
			});
			
			localStorage.setItem('bookingsCount_ForTheDay', bookingCount);
			$(".bookingsForThisDay_circle span").append(bookingCount);
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

}

function getServicesAccounts(){
	$(".bookings").empty();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getServicesAccounts.php',
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {

			$.each( data, function( key, val ) {
				$('.bookings').append('<div class="booking"><h1 id="totalAmountToday">'+ val.service_name + " - R " + val.totalMade.toFixed(2) +'</h1></div>');
			});
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

}

function getDailyBookingsAccounts(){
	$(".bookings").empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getDailyBookingsAccounts.php?chosenDate=' + dbDateFormat,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var bookingCount = 0;
			var bookingCountNo = bookingCount + 1;
			
			var borderColors = ["#00ccff", "#ffcc00", "#ff6600", "#ff0000", "#99ff33", "#80bfff", "#cc6699"];
			var borderCount = 0;
			var borderCap = 6;
			var total = 0;
			
			$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + dbDateFormat + '</h1></div></div>');
			$('.bookings').append('<div class="booking"><h1 id="totalAmountToday"></h1></div>');
			$.each( data, function( key, val ) {
				total = parseFloat(total) + parseFloat(val.service_cost);
				
				bookingCount++;
				bookingCountNo++;
				borderCount++;
				if(borderCount == borderCap){
					borderCount = 0;
				}
			});
			
			localStorage.setItem('bookingsCount_ForTheDay', bookingCount);
			$(".bookingsForThisDay_circle span").append(bookingCount);
			$("#totalAmountToday").empty();
			$("#totalAmountToday").append("Total Sales: R " + total.toFixed(2));
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function getMonthlyBookingsAccounts(){
	$(".bookings").empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getMonthlyBookingsAccounts.php',
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			
			$.each( data, function( key, val ) {
				
				$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle"><span>' + val.totalBookings + '</span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.month + '</h1></div></div>');
				$('.bookings').append('<div class="booking"><h1 id="totalAmountToday">R '+ val.total.toFixed(2) +'</h1></div>');
				
			});
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function getDailyEmployeeSales(){
	$(".bookings").empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getDailyEmployeeSales.php?chosenDate=' + dbDateFormat,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var bookingCount = 0;
			var bookingCountNo = bookingCount + 1;
			
			var borderColors = ["#00ccff", "#ffcc00", "#ff6600", "#ff0000", "#99ff33", "#80bfff", "#cc6699"];
			var borderCount = 0;
			var borderCap = 6;
			var total = 0;
			
			$('.bookings').append('<div class="hundredWidth"><div class="onThisDay" style="width: 100%;"><h1 style="text-transform: uppercase; text-align: center;">' + dbDateFormat + '</h1></div></div>');
			
			$.each( data, function( key, val ) {
				$('.bookings').append('<div class="booking"><h1 style="font-size: 1.4em; position: relative; top: 15px;" id="totalAmountToday">'+ val.employeeName + " - R " + val.total.toFixed(2) +'</h1></div>');
			});
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function getMonthlyEmployeeSales(){
	$(".bookings").empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getMonthlyEmployeeSales.php',
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		   
			$.each( data, function( key, val ) {
				
				$('.bookings').append('<div class="hundredWidth"><div class="onThisDay" style="width: 100%;"><h1 style="text-transform: uppercase; text-align: center;">' + dbDateFormat + '</h1></div></div>');
			
				
				$('.bookings').append('<div class="booking"><h1 style="font-size: 1.4em; position: relative; top: 15px;" id="totalAmountToday">'+ val.employeeName + " - R " + val.total.toFixed(2) +'</h1></div>');
			});
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function getBookingsForSevenDays(){
	$(".bookings").empty();
	 var str = dbDateFormat.split(/\D+/);
	 var new_date_format = str[1] + '/' + str[0]  + '/' + str[2];
	 
	 function DateFromString(str, numberOfDaysToAdd){ 
        str = str.split(/\D+/);
        str = new Date(str[2],str[0]-1,(parseInt(str[1])+numberOfDaysToAdd));
        return MMDDYYYY(str);
    }
    
    function MMDDYYYY(str) {
        var ndateArr = str.toString().split(' ');
        var Months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec';
        return (parseInt(Months.indexOf(ndateArr[1])/4)+1)+'/'+ndateArr[2]+'/'+ndateArr[3];
    }

    function AddDay(number) {
        var date = new_date_format;
        var ndate = DateFromString(date, number);
        return ndate;
    }   
	
	function correctDateFormat(wrongDate){
		var dateArray = wrongDate.split(/\D+/);
		var wrongZeroMonth = dateArray[0];
		
		if(wrongZeroMonth < 10){
			correctZeroMonth = '0' + wrongZeroMonth;
		}else{
			correctZeroMonth = wrongZeroMonth;
		}
		
		var correctDate = dateArray[1] + '/' + correctZeroMonth  + '/' + dateArray[2];
		return correctDate;
	}
	
	var firstDay = dbDateFormat;
    var secondDay = correctDateFormat(AddDay(1));
    var thirdDay = correctDateFormat(AddDay(2));
    var fourthDay = correctDateFormat(AddDay(3));
    var fifthDay = correctDateFormat(AddDay(4));
    var sixthDay = correctDateFormat(AddDay(5));
    var seventhDay = correctDateFormat(AddDay(6));
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getBookingsForSevenDays.php?firstDay=' + firstDay + '&secondDay=' + secondDay + '&thirdDay=' + thirdDay + '&fourthDay=' + fourthDay + '&fifthDay=' + fifthDay + '&sixthDay=' + sixthDay + '&seventhDay=' + seventhDay,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var bookingCount = 0;
			var bookingCountNo = bookingCount + 1;
			
			var borderColors = ["#00ccff", "#ffcc00", "#ff6600", "#ff0000", "#99ff33", "#80bfff", "#cc6699"];
			var borderCount = 0;
			var borderCap = 6;
			
			var dayCount = 0;
			
			var dontPrintDateHeading1 = 0;
			var dontPrintDateHeading2 = 0;
			var dontPrintDateHeading3 = 0;
			var dontPrintDateHeading4 = 0;
			var dontPrintDateHeading5 = 0;
			var dontPrintDateHeading6 = 0;
			var dontPrintDateHeading7 = 0;
			
			var bookingCount1 = 0;
			var bookingCount2 = 0;
			var bookingCount3 = 0;
			var bookingCount4 = 0;
			var bookingCount5 = 0;
			var bookingCount6 = 0;
			var bookingCount7 = 0;
		
			$.each( data, function( key, val ) {
				if(firstDay === val.booking_date){
					bookingCount1++;
					$("#bookingsForThisDay_circle1 span").empty();
					$("#bookingsForThisDay_circle1 span").append(bookingCount1);
					
					if(dontPrintDateHeading1 ==0){
						$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay" ><div class="bookingsForThisDay_circle" id="bookingsForThisDay_circle1"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.booking_date + '</h1></div></div>');
						dontPrintDateHeading1 = 1;
					}else{
						
					}
					
					$('.bookings').append('<div class="booking" data-booking-id="'+  val.booking_id +'" data-booking-date="'+ val.booking_date_for_seven +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCount1 +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
					
				}else{
						
					}
				
				if(secondDay === val.booking_date){
					bookingCount2++;
					$("#bookingsForThisDay_circle2 span").empty();
					$("#bookingsForThisDay_circle2 span").append(bookingCount2);
					
					if(dontPrintDateHeading2 ==0){
						$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle" id="bookingsForThisDay_circle2"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.booking_date + '</h1></div></div>');
						dontPrintDateHeading2 = 1;
					}else{
						
					}
					
					$('.bookings').append('<div class="booking" data-booking-id="'+  val.booking_id +'" data-booking-date="'+ val.booking_date_for_seven +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCount2 +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
					
					
				}else{
						
					}
				
				if(thirdDay === val.booking_date){
					bookingCount3++;
					$("#bookingsForThisDay_circle3 span").empty();
					$("#bookingsForThisDay_circle3 span").append(bookingCount3);
					
					if(dontPrintDateHeading3 ==0){
						$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle" id="bookingsForThisDay_circle3"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.booking_date + '</h1></div></div>');
						dontPrintDateHeading3 = 1;
					}else{
						
					}
					
					$('.bookings').append('<div class="booking" data-booking-id="'+  val.booking_id +'" data-booking-date="'+ val.booking_date_for_seven +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCount3 +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
						
				}else{
						
					}
				
				if(fourthDay === val.booking_date){
					bookingCount4++;
					$("#bookingsForThisDay_circle4 span").empty();
					$("#bookingsForThisDay_circle4 span").append(bookingCount4);
					
					if(dontPrintDateHeading4 ==0){
						$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle" id="bookingsForThisDay_circle4"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.booking_date + '</h1></div></div>');
						dontPrintDateHeading4 = 1;
					}else{
						
					}
					
					$('.bookings').append('<div class="booking" data-booking-id="'+  val.booking_id +'" data-booking-date="'+ val.booking_date_for_seven +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCount4 +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
					
				}else{
						
					}
				
				if(fifthDay === val.booking_date){
					bookingCount5++;
					$("#bookingsForThisDay_circle5 span").empty();
					$("#bookingsForThisDay_circle5 span").append(bookingCount5);
					
					if(dontPrintDateHeading5 ==0){
						$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle" id="bookingsForThisDay_circle5"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.booking_date + '</h1></div></div>');
						dontPrintDateHeading5 = 1;
					}else{
						
					}
					
					$('.bookings').append('<div class="booking" data-booking-id="'+  val.booking_id +'" data-booking-date="'+ val.booking_date_for_seven +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCount5 +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
					
					
				}else{
						
					}
				
				if(sixthDay === val.booking_date){
					bookingCount6++;
					$("#bookingsForThisDay_circle6 span").empty();
					$("#bookingsForThisDay_circle6 span").append(bookingCount6);
					
					if(dontPrintDateHeading6 ==0){
						$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle" id="bookingsForThisDay_circle6"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.booking_date + '</h1></div></div>');
						dontPrintDateHeading6 = 1;
					}else{
						
					}
					
					$('.bookings').append('<div class="booking" data-booking-id="'+  val.booking_id +'" data-booking-date="'+ val.booking_date_for_seven +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCount6 +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
					
					
				}else{
						
					}
				
				if(seventhDay === val.booking_date){
					bookingCount7++;
					$("#bookingsForThisDay_circle7 span").empty();
					$("#bookingsForThisDay_circle7 span").append(bookingCount7);
					
					if(dontPrintDateHeading7 ==0){
						$('.bookings').append('<div class="hundredWidth"><div class="bookingsForThisDay"><div class="bookingsForThisDay_circle" id="bookingsForThisDay_circle7"><span></span></div></div><div class="onThisDay"><h1 style="text-transform: uppercase;">' + val.booking_date + '</h1></div></div>');
						dontPrintDateHeading7 = 1;
					}else{
						
					}
					
					$('.bookings').append('<div class="booking" data-booking-id="'+  val.booking_id +'" data-booking-date="'+ val.booking_date_for_seven +'"><div class="bookingNumber"><div class="bookingNumberCircle"><span>'+ bookingCount7 +'</span></div></div><div class="bookingContentContainer"><div class="bookingContent"><div class="bookingContent_tHalf"><span class="nameOfClient">'+ val.booking_client_name +'</span><span class="nameOfClient" style="text-transform: uppercase;">&nbsp;|&nbsp;'+ val.booking_service_name +'</span></div><div class="bookingContent_tHalf"><i class="ion-ios-clock small-clock"></i>&nbsp;&nbsp;&nbsp;<span>'+ val.booking_time +'</span></div></div></div><div class="bookingBorder" style="background: '+ borderColors[borderCount] +'"></div></div>');
					
					
				}else{
						
					}
					
					
					bookingCount++;
					bookingCountNo++;
					borderCount++;
					if(borderCount == borderCap){
						borderCount = 0;
					}
					
			});

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});

}

function resetDate(date, unformattedDate){

	localStorage.setItem('dbDateFormat', date);
	
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var createDate = unformattedDate.split('/');
	var createDate_day = createDate[0];
	var createDate_date = createDate[1];
	var createDate_month = createDate[2];
	var createDate_year = createDate[3];
		
	_todaysDateIs = createDate_day + " " + createDate_date + " " + months[createDate_month] + " " + createDate_year;
	localStorage.setItem('todaysDateIs', _todaysDateIs);
	
	if(date != ""){
		window.location.href = "manageBookings.html";
	}
}

function resetDateES(date, unformattedDate){

	localStorage.setItem('dbDateFormat', date);
	
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var createDate = unformattedDate.split('/');
	var createDate_day = createDate[0];
	var createDate_date = createDate[1];
	var createDate_month = createDate[2];
	var createDate_year = createDate[3];
		
	_todaysDateIs = createDate_day + " " + createDate_date + " " + months[createDate_month] + " " + createDate_year;
	localStorage.setItem('todaysDateIs', _todaysDateIs);
	
	if(date != ""){
		window.location.href = "employeeSales.html";
	}
}

function resetDateSS(date, unformattedDate){

	localStorage.setItem('dbDateFormat', date);
	
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var createDate = unformattedDate.split('/');
	var createDate_day = createDate[0];
	var createDate_date = createDate[1];
	var createDate_month = createDate[2];
	var createDate_year = createDate[3];
		
	_todaysDateIs = createDate_day + " " + createDate_date + " " + months[createDate_month] + " " + createDate_year;
	localStorage.setItem('todaysDateIs', _todaysDateIs);
	
	if(date != ""){
		window.location.href = "manageServiceSales.html";
	}
}

function resetDateForEmployee(date, unformattedDate){

	localStorage.setItem('dbDateFormat', date);
	
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var createDate = unformattedDate.split('/');
	var createDate_day = createDate[0];
	var createDate_date = createDate[1];
	var createDate_month = createDate[2];
	var createDate_year = createDate[3];
		
	_todaysDateIs = createDate_day + " " + createDate_date + " " + months[createDate_month] + " " + createDate_year;
	localStorage.setItem('todaysDateIs', _todaysDateIs);
	
	if(date != ""){
		window.location.href = "employeeBookings.html";
	}
}

function resetMonth(month){
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			
	var chosenMonth = months[month];
	localStorage.setItem('newMonth', chosenMonth);
}

function resetAccountsDate(date, unformattedDate){
	localStorage.setItem('dbDateFormat', date);
	
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var createDate = unformattedDate.split('/');
	var createDate_day = createDate[0];
	var createDate_date = createDate[1];
	var createDate_month = createDate[2];
	var createDate_year = createDate[3];
		
	_todaysDateIs = createDate_day + " " + createDate_date + " " + months[createDate_month] + " " + createDate_year;
	localStorage.setItem('todaysDateIs', _todaysDateIs);
	
	if(date != ""){
		window.location.href = "employeeSales.html";
	}
}

function resetServicesDate(date, unformattedDate){
	localStorage.setItem('dbDateFormat', date);
	
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var createDate = unformattedDate.split('/');
	var createDate_day = createDate[0];
	var createDate_date = createDate[1];
	var createDate_month = createDate[2];
	var createDate_year = createDate[3];
		
	_todaysDateIs = createDate_day + " " + createDate_date + " " + months[createDate_month] + " " + createDate_year;
	localStorage.setItem('todaysDateIs', _todaysDateIs);
	
	if(date != ""){
		window.location.href = "manageServiceSales.html";
	}
}

function resetEmployeeSalesDate(date){
	
	localStorage.setItem('dbDateFormat', date);
	//_("dateToday").text("");
	//_("dateToday").append(dbDateFormat);
	
	if(date != ""){
		window.location.href = "employeeSales.html";
	}
	
}


function getAllocatedEmployees(){
	$('.employeeContainer').empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getAllocatedEmployees.php?bookingId=' + bookingId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var radioCount = 0;
			$.each( data, function( key, val ) {
				$('.employeeContainer').append('<div class="specificEmployeeContainer"><div class="specificEmployeeRadio"><div class="pure-radiobutton"><input id="radio'+ radioCount +'" name="radio" type="radio" data-employee-id="'+ val.employee_id +'" data-employee-name="'+ val.employee_name +'" class="radio" '+ val.checked_value +'><label for="radio'+ radioCount +'"></label></div></div><div class="specificEmployeeName"><span>'+ val.employee_name +'</span></div></div>');
				radioCount++;
			});
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function getServiceAllocatedEmployees(serviceId){
	
	$('.employeeContainer').empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getServiceAllocatedEmployees.php?serviceId=' + serviceId + '&salonId=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			var radioCount = 0;
			$.each( data, function( key, val ) {
				//$('.employeeContainer').append('<div class="specificEmployeeContainer"><div class="specificEmployeeRadio"><div class="pure-radiobutton"><input id="radio'+ radioCount +'" name="radio" type="radio" data-employee-id="'+ val.employee_id +'" data-employee-name="'+ val.employee_name +'" class="radio" '+ val.checked_value +'><label for="radio'+ radioCount +'"></label></div></div><div class="specificEmployeeName"><span>'+ val.employee_name +'</span></div></div>');
				$('.employeeContainer').append('<div onclick="updateServiceProvider(\'employee'+ val.employee_id +'\')" id="employee'+ val.employee_id +'" class="row" data-radio-id="eradio'+ radioCount +'" data-remployee-id="'+ val.employee_id +'" data-remployee-name="'+ val.employee_name +'"><div class="col s12 center-align"><div class="specificServiceName"><span>'+ val.employee_name +'</span></div></div></div>');

				radioCount++;
			});
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function getAllServices(){
	$('.serviceContainer').empty();
	var companyId = salonId;

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getAllServices.php?companyId=' + companyId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var radioCount = 0;
			$.each( data, function( key, val ) {
				//$('.serviceContainer').append('<div class="specificServiceContainer"><div class="specificServiceRadio"><div class="pure-radiobutton"><input id="radio'+ radioCount +'" name="radio" type="radio" data-service-cost="'+ val.service_cost +'" data-service-id="'+ val.service_id +'" data-service-name="'+ val.service_name +'" data-service-duration="'+ val.time_to_complete_service +'" class="radio" '+ val.checked_value +'><label for="radio'+ radioCount +'"></label></div></div><div class="specificServiceName"><span>'+ val.service_name +'</span></div></div>');
				$('.serviceContainer').append('<div onclick="getThisService(\'service'+ val.service_id +'\');" id="service'+ val.service_id +'" class="row" data-radio-id="sradio'+ radioCount +'" data-rservice-cost="'+ val.service_cost +'" data-rservice-id="'+ val.service_id +'" data-rservice-name="'+ val.service_name +'" data-rservice-duration="'+ val.time_to_complete_service +'"><div class="col s12"><div class="specificServiceName"><span>'+ val.service_name +'</span></div></div></div>');
				radioCount++;
			});
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function getThisEmployeesServices(){
	
	$('.serviceContainer').empty();
	var employeeID = employeeId;

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeesServices.php?employeeID=' + employeeID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			var radioCount = 0;
			$.each( data, function( key, val ) {
				//$('.serviceContainer').append('<div class="specificServiceContainer"><div class="specificServiceRadio"><div class="pure-radiobutton"><input id="radio'+ radioCount +'" name="radio" type="radio" data-service-cost="'+ val.service_cost +'" data-service-id="'+ val.service_id +'" data-service-name="'+ val.service_name +'" data-service-duration="'+ val.time_to_complete_service +'" class="radio" '+ val.checked_value +'><label for="radio'+ radioCount +'"></label></div></div><div class="specificServiceName"><span>'+ val.service_name +'</span></div></div>');
				$('.serviceContainer').append('<div class="row" data-radio-id="sradio'+ radioCount +'" data-rservice-cost="'+ val.service_cost +'" data-rservice-id="'+ val.service_id +'" data-rservice-name="'+ val.service_name +'" data-rservice-duration="'+ val.time_to_complete_service +'"><div class="col s12"><div class="col s12"><div class="specificServiceName"><span>'+ val.service_name +'</span></div></div></div></div>');
				radioCount++;
			});
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
	
}

function getAvailableSlotsForEmployee(salonId,serviceID,employeeID,theDate,day,normalUserId){
	$('.freeTimesContainer').empty();
	var companyId = salonId;
	$.ajax
	({
		url: 'https://lollipopbeauty.co.za/Website_1/api/getAvailableSlotsForEmployee2.php?salonID=' + companyId + "&serviceID=" + serviceID + "&employeeID=" + employeeID + "&databaseDate=" + theDate + "&day=" + day + "&normalUserId=" + normalUserId,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status)
		{
			if(data !='noMatch' && data !='salonClosed' && data !='employeeUnavailable'){
				var radioCount = 0;
				$.each( data, function( key, val ) {
					
					valContent = val.split('//');
					$("#whyPickMe").empty();
					$("#whyPickMe").text(valContent[4]);
					
					if(valContent[6] != 'null'){
						var imageToDisplay1 = "https://lollipopbeauty.co.za/Website_1/temp/" + valContent[6];
						_("portfolioImage1").css("background", "url('"+ imageToDisplay1 +"')");
					}else{
						_("portfolioImage1").css("background", "#f2f2f2");
						_("portfolioImage1").text("No image uploaded.");
					}
					
					if(valContent[7] != 'null'){
						var imageToDisplay2 = "https://lollipopbeauty.co.za/Website_1/temp/" + valContent[7];
						_("portfolioImage2").css("background", "url('"+ imageToDisplay2 +"')");
					}else{
						_("portfolioImage2").css("background", "#f2f2f2");
						_("portfolioImage2").text("No image uploaded.");
					}
					
					if(valContent[8] != 'null'){
						var imageToDisplay3 = "https://lollipopbeauty.co.za/Website_1/temp/" + valContent[8];
						_("portfolioImage3").css("background", "url('"+ imageToDisplay3 +"')");
					}else{
						_("portfolioImage3").css("background", "#f2f2f2");
						_("portfolioImage3").text("No image uploaded.");
					}
					
					if(valContent[9] != 'null'){
						var imageToDisplay4 = "https://lollipopbeauty.co.za/Website_1/temp/" + valContent[9];
						_("portfolioImage4").css("background", "url('"+ imageToDisplay4 +"')");
					}else{
						_("portfolioImage4").css("background", "#f2f2f2");
						_("portfolioImage4").text("No image uploaded.");
					}
					
					if(valContent[10] != 'null'){
						var imageToDisplay5 = "https://lollipopbeauty.co.za/Website_1/temp/" + valContent[10];
						_("portfolioImage5").css("background", "url('"+ imageToDisplay5 +"')");
					}else{
						_("portfolioImage5").css("background", "#f2f2f2");
						_("portfolioImage5").text("No image uploaded.");
					}
					
					
					if(valContent[0] == valContent[5]){
						$('.freeTimesContainer').append('<div onclick="selectThisTime(\'tradio'+ radioCount +'\');" id="tradio'+ radioCount +'" class="row" data-radio-id="tradio'+ radioCount +'" data-service-name="'+ valContent[1] +'" data-service-duration="'+ valContent[3] +'" data-service-cost="'+ valContent[2] +'" data-rtime-slot="'+ valContent[0] +'" ><div class="col s12 center-align"><div class="specificServiceName"><span style="color: rgb(38, 166, 154);">'+ valContent[0] +'</span><br><span style="color: rgb(38, 166, 154); font-size: 0.55em;">(You are booked at this time)</span></div></div></div>');
					
					}else{
						$('.freeTimesContainer').append('<div onclick="selectThisTime(\'tradio'+ radioCount +'\');" id="tradio'+ radioCount +'" class="row" data-radio-id="tradio'+ radioCount +'" data-service-name="'+ valContent[1] +'" data-service-duration="'+ valContent[3] +'" data-service-cost="'+ valContent[2] +'" data-rtime-slot="'+ valContent[0] +'" ><div class="col s12 center-align"><div class="specificServiceName"><span>'+ valContent[0] +'</span></div></div></div>');
					}
					//$('.serviceContainer').append('<div class="specificServiceContainer"><div class="specificServiceRadio"><div class="pure-radiobutton"><input id="radio'+ radioCount +'" name="radio" type="radio" data-service-cost="'+ val.service_cost +'" data-service-id="'+ val.service_id +'" data-service-name="'+ val.service_name +'" data-service-duration="'+ val.time_to_complete_service +'" class="radio" '+ val.checked_value +'><label for="radio'+ radioCount +'"></label></div></div><div class="specificServiceName"><span>'+ val.service_name +'</span></div></div>');
					radioCount++;
				});
			}
			else if(data =='salonClosed'){
				$('.freeTimesContainer').append('<div class="row"><div class="col s12">Sorry, the salon is closed on this date.</div></div>');
			}
			else if(data =='employeeUnavailable'){
				
				$('.freeTimesContainer').append('<div class="row"><div class="col s12">Sorry, this service provider is not available on this date.</div></div>');
				
			}
			else{
				$('.freeTimesContainer').append('<div class="row"><div class="col s12">There are no available times on this date. Please make sure you choose today\'s date or one in the future.</div></div>');
			}

		},
		error: function()
		{
			failure('Could not connect. Please try again.');
		}
	});

}

function salonBookingCalendar(the_date){
	
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
			
		var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		
		if(the_date != null){
			var fullDate = the_date;
		}else{
			var fullDate =  new Date();
		}
		
		var day = fullDate.getDay(); //Day
		var date = fullDate.getDate(); //Date
		var month = fullDate.getMonth(); //Month
		var year = fullDate.getFullYear(); //Year
		
		currentDay = days[day];
		currentDate = date;
		currentMonth = months[month];
		currentYear = year;
		
		if(newMonth != ""){
			var daysInThisMonth = getDaysInMonth(month, year);
		}else{
			var daysInThisMonth = getDaysInMonth(month, year);
		}
		
		_todaysDateIs = days[day] + " " + date + " " + months[month] + " " + year;
		localStorage.setItem('todaysDateIs', _todaysDateIs);
		
		$(".dateHolder h2").empty();
		$(".dateHolder h2").text(todaysDateIs);
		$(".dateContainer").empty();
			
		var countValue = 0;
		
		$.each( daysInThisMonth, function( key, val ) {
			_day = val.getDay(); //Day
			_theDay = days[_day];
			_month = val.getMonth(); //Month				
			_date = val.getDate(); //Date
		
			var correctDate = _date;
			
			//Append 0 to date
			if(correctDate == 1){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 2){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 3){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 4){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 5){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 6){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 7){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 8){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else if(correctDate == 9){
				
				correctDate = "0" + correctDate;
				var twoDigitDate = correctDate;
				
			}else{
				
				var twoDigitDate = correctDate;
				
			}
			
			//Append 0 to month
			var correctMonth = _month + 1;
			
			if(correctMonth == 1){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 2){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 3){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 4){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 5){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 6){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 7){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 8){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else if(correctMonth == 9){
				
				correctMonth = "0" + correctMonth;
				var twoDigitMonth = correctMonth;
				
			}else{
				
				var twoDigitMonth = correctMonth;
				
			}
			
			var dataDate = twoDigitDate + "/" + twoDigitMonth + "/" + currentYear; /* dd/mm/yyyy */
			var dateWithoutZeroes = _theDay + "/" + _date + "/" + _month + "/" + currentYear;	
					
				if(dataDate == dbDateFormat){
					$('.dateContainer').append('<div class="div specificDateOnCalendar thisIsTheCurrentDate" data-calendar-date="'+ dataDate +'" data-datewithoutzeros="'+ dateWithoutZeroes +'"><div class="top75">'+ _date +'</div><div class="bottom25">'+ _theDay +'</div></div>');
					scrollIndexValue = countValue;
				}else{
					$('.dateContainer').append('<div class="div specificDateOnCalendar" data-calendar-date="'+ dataDate +'" data-datewithoutzeros="'+ dateWithoutZeroes +'"><div class="top75">'+ _date +'</div><div class="bottom25">'+ _theDay +'</div></div>');
				}
				
			countValue++;
				
		});
		
}

function noOfSlotsRequired(hoursInMinutes, minutes){
	var slotsRequired = '';
	slotsRequired = hoursInMinutes/15;
	slotsRequired += minutes/15;
	return slotsRequired;
}

function getEmployeeTimetables(){

	var countForIds = 1;
	var countEmployees = 0;
	$(".employeesCarousel").empty();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getAllEmployeesTimetables.php?salonId=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			$.each( data, function( key, val ) {
				
				var picToDisplay = 'https://lollipopbeauty.co.za/Website_1/temp/' + val.profilePic;
				$('.employeesCarousel').append('<div class="_employeeContainer" style="outline: 0;" id="'+ val.id +'" data-employee-name="' + val.employeeName + '"><div class="profileTop"><div class="actualProfileImage" style="background: url(\''+ picToDisplay +'\');"></div><div class="employeeNameContainer"><span class="salonEmployeesName">'+ val.employeeName +'</span></div><div class="row employeeAddButtonContainer"><div class="input-field col s12"><a class="btn-floating btn-large waves-effect waves-light bookThisEmployee" data-employee-id="'+ val.id +'" data-employee-name="'+ val.employeeName +'"><i class="ion-plus"></i></a></div></div></div><div class="fifteenMinuteSlot" data-start-time="08:00" data-end-time="08:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="08:15" data-end-time="08:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="08:30" data-end-time="08:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="08:45" data-end-time="09:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:00" data-end-time="09:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:15" data-end-time="09:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:30" data-end-time="09:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:45" data-end-time="10:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:00" data-end-time="10:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:15" data-end-time="10:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:30" data-end-time="10:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:45" data-end-time="11:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:00" data-end-time="11:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:15" data-end-time="11:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:30" data-end-time="11:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:45" data-end-time="12:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="12:00" data-end-time="12:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="12:15" data-end-time="12:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="12:30" data-end-time="12:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="12:45" data-end-time="13:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:00" data-end-time="13:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:15" data-end-time="13:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:30" data-end-time="13:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:45" data-end-time="14:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="14:00" data-end-time="14:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="14:15" data-end-time="14:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="14:30" data-end-time="14:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="14:45" data-end-time="15:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="15:00" data-end-time="15:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="15:15" data-end-time="15:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="15:30" data-end-time="15:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="15:45" data-end-time="16:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="16:00" data-end-time="16:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="16:15" data-end-time="16:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="16:30" data-end-time="16:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="16:45" data-end-time="17:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="17:00" data-end-time="17:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="17:15" data-end-time="17:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="17:30" data-end-time="17:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="17:45" data-end-time="18:00" data-slot-status="isOpen"></div></div>');
				
				var employee_id = '';
				employee_id = val.id;
				var startValue = '';
				
					$.ajax
					({
					   url: 'https://lollipopbeauty.co.za/Website_1/api/getThisEmployeesBookings.php?chosenDate=' + dbDateFormat + "&bookingEmployeeId=" + employee_id,
					   dataType: 'jsonp',
					   jsonp: 'jsoncallback',
					   timeout: 10000,
					   success: function(data, status)
					   {
							
							if(data !='nothing'){
								
								var countClientBookings = 1;
								
								$.each( data, function( key, val ) {
									
									$('#' + employee_id + " .fifteenMinuteSlot").each(function( thisKey, thisVal ) {
										
										var serviceDuration = val.time_to_complete_service; // Duration of service
										var thisBookingTime = val.booking_time; // Start time of booking
										var thisBookingEndTime = val.end_time; // End time of booking
										var startTime = $(thisVal).attr("data-start-time"); //Slot start time
										var bookingClientName = val.booking_client_name; //Clients name
										var bookingServiceName = val.booking_service_name; //Service name
										
										var bookingID = val.booking_id;
										var bookingDate = val.booking_date;
										var bookingEmployeeID = val.employee_id;
										
										var performed = val.performed;
										
										var serviceDurationArray = serviceDuration.split(":");
										var hoursInMinutes = serviceDurationArray[0] * 60;
										var minutes = serviceDurationArray[1];
										var slots = noOfSlotsRequired(hoursInMinutes, minutes);
										
										if(startTime == thisBookingTime){
											var $backgrounds = new Array("rgb(255, 173, 153)", "rgb(255, 179, 179)", "rgb(217, 179, 255)","rgb(153, 255, 204)","rgb(255, 255, 204)","rgb(204, 179, 255)","rgb(179, 255, 236)");
											
											function randomFrom(arr){
												var randomIndex = Math.floor(Math.random() * arr.length);
												return arr[randomIndex];
											}
											
											var $backgroundColor = randomFrom($backgrounds);
											var clientsBookingTimes = thisBookingTime + " - " + thisBookingEndTime;
											var bookingTimes = thisBookingTime + " - " + thisBookingEndTime; //remove this
											var textToDisplay = '';
											
											if(performed == 1){
												performed = 'Service Performed';
												textToDisplay = performed;
											}else{
												textToDisplay = bookingTimes;
											}
											
											var embedThisText = "<span style='font-weight: bold;'>" + bookingClientName + "</span><br>" + "<span style=\"font-weight: none; text-transform: capitalize;\" >" +  bookingServiceName + " &nbsp;&nbsp;("+ textToDisplay +")</span>"; 
											$(this).append(embedThisText);
											var $elem = $(this);
											startValue = $elem.attr("data-end-time");
											$elem.css("background",$backgroundColor);
											$elem.css("border",$backgroundColor);
											$elem.attr("data-slot-status","isBooked");
											
											//var bookingTimes = thisBookingTime + " - " + thisBookingEndTime;
											
											$elem.attr("data-client",bookingClientName);
											$elem.attr("data-time-booking",bookingTimes);
											$elem.attr("data-the-service",bookingServiceName);
											$elem.attr("data-booking-duration",serviceDuration);
											$elem.attr("data-booking-id",bookingID);
											$elem.attr("data-booking-date",bookingDate);
											$elem.attr("data-booking-employee-id",bookingEmployeeID);
											
											var $sliceUpTo = slots - 1;
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).css("background",$backgroundColor);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).css("border",$backgroundColor);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-slot-status","isBooked");
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-client",bookingClientName);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-time-booking",bookingTimes);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-the-service",bookingServiceName);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-duration",serviceDuration);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-id",bookingID);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-date",bookingDate);
											$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-employee-id",bookingEmployeeID);
											
											
										}

										
										
										countClientBookings++;				
									});
									
									
								});
							
							}else{
					
							}
							
					   },
					   error: function()
					   {	
							failure('Could not connect. Please try again.');
					   }
					});
				

				countForIds++;
				countEmployees++;
				
				var dateFromat = dbDateFormat;
				var dateToWorkWith = dateFromat.split('/');
				dateToWorkWith = dateToWorkWith[0] + "-" + dateToWorkWith[1] + "-" + dateToWorkWith[2];
				var a = dateToWorkWith.split("-");
				var the_date_select = new Date( a[2], (a[1] - 1), a[0] );
				var the_day_select = the_date_select.getDay();
				var days_array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var the_day_select_is = days_array[the_day_select];
				var found = 0;
				var operating_hours ='';
				
				if(the_day_select_is == 'Sunday' || the_day_select_is == 'Saturday'){
					operating_hours = val.weekend_hours;
				}else{
					operating_hours = val.operating_hours;
				}
				
				var disabledDates = val.disabled_dates;
				var employeeDisabledDates = val.employee_disabled_dates
				var disabledDates = disabledDates.split('_');
				var employeeDisabledDates = employeeDisabledDates.split('_');
				
				if(jQuery.inArray(dbDateFormat, disabledDates) !== -1 || jQuery.inArray(dbDateFormat, employeeDisabledDates) !== -1){
					
					found = 1;
					
				}else{
					
					found = 0;
					
				}
				
		
				var workingHours = operating_hours.split(' - ');
				var clockIn = workingHours[0];
				var clockOut = workingHours[1];
				
				clockIn = clockIn.split(':');
				clockIn = clockIn[0] + "" + clockIn[1];
				
				clockOut = clockOut.split(':');
				clockOut = clockOut[0] + "" + clockOut[1];
				
				
				$(".fifteenMinuteSlot").each(function() {
					
					if(found == 0){
						
					   var startTime = $(this).attr("data-start-time");
					   var endTime = $(this).attr("data-end-time");
					   startTime = startTime.split(':');
					   startTime = startTime[0] + "" + startTime[1];
					   
					   endTime = endTime.split(':');
					   endTime = endTime[0] + "" + endTime[1];
					   if(parseInt(startTime) >= clockIn && parseInt(endTime) <= clockOut){
						   
					   }else{
						   $(this).css("background","#f2f2f2");
						   $(this).attr("data-slot-status","isClosed");
					   }
					   
					}else{
						
						$(this).css("background","#f2f2f2");
						$(this).attr("data-slot-status","isClosed");
						
					} 
					   
				});
				
			});

		   //$('.carousel.carousel-slider').carousel({full_width: true});
		   var displayNo = 0;
		   
		   if(countEmployees >= 3){
			   
			   displayNo = 3;
			   
		   }
		   else if(countEmployees == 2){
			   
			   displayNo = 2;
			   
		   }
		   else if(countEmployees == 1){
			   
			   displayNo = 1;
			   
		   }
		   
		   $('.employeesCarousel').slick({
					infinite: false,
					speed: 400,
					arrows:false,
					slidesToShow: displayNo,
					slidesToScroll: 2
			});
			var employeeIndexValue = 0;
			$( ".employeesCarousel" ).slick('slickGoTo', parseInt(employeeIndexValue));
		 
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
	
	
}

function getEmployeeTimetable(employeeId){
	
	var countForIds = 1;
	$(".employeesCarousel").empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeeTimetable.php?employeeId=' + employeeId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			$.each( data, function( key, val ) {
				
				var picToDisplay = 'https://lollipopbeauty.co.za/Website_1/temp/' + val.profilePic;
				$('.employeesCarousel').append('<div class="_employeeContainer" style="outline: 0;" id="'+ val.id +'" data-employee-name="' + val.employeeName + '"><div class="profileTop"><div class="actualProfileImage" style="background: url(\''+ picToDisplay +'\');"></div><span class="salonEmployeesName">'+ val.employeeName +'</span><div class="row"><div class="input-field col s12"></div></div></div><div class="fifteenMinuteSlot" data-start-time="08:00" data-end-time="08:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="08:15" data-end-time="08:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="08:30" data-end-time="08:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="08:45" data-end-time="09:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:00" data-end-time="09:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:15" data-end-time="09:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:30" data-end-time="09:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="09:45" data-end-time="10:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:00" data-end-time="10:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:15" data-end-time="10:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:30" data-end-time="10:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="10:45" data-end-time="11:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:00" data-end-time="11:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:15" data-end-time="11:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:30" data-end-time="11:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="11:45" data-end-time="12:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="12:00" data-end-time="12:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="12:15" data-end-time="12:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="12:30" data-end-time="12:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="12:45" data-end-time="13:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:00" data-end-time="13:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:15" data-end-time="13:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:30" data-end-time="13:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="13:45" data-end-time="14:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="14:00" data-end-time="14:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="14:15" data-end-time="14:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="14:30" data-end-time="14:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="14:45" data-end-time="15:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="15:00" data-end-time="15:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="15:15" data-end-time="15:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="15:30" data-end-time="15:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="15:45" data-end-time="16:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="16:00" data-end-time="16:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="16:15" data-end-time="16:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="16:30" data-end-time="16:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="16:45" data-end-time="17:00" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="17:00" data-end-time="17:15" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot"  data-start-time="17:15" data-end-time="17:30" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="17:30" data-end-time="17:45" data-slot-status="isOpen"></div><div class="fifteenMinuteSlot" data-start-time="17:45" data-end-time="18:00" data-slot-status="isOpen"></div></div>');
				
				var employee_id = '';
				employee_id = val.id;
				var startValue = '';

				$.ajax
				({
				   url: 'https://lollipopbeauty.co.za/Website_1/api/getThisEmployeesBookings.php?chosenDate=' + dbDateFormat + "&bookingEmployeeId=" + employee_id,
				   dataType: 'jsonp',
				   jsonp: 'jsoncallback',
				   timeout: 10000,
				   success: function(data, status)
				   {
						var countClientBookings = 1;
						
						$.each( data, function( key, val ) {
							
							$('#' + employee_id + " .fifteenMinuteSlot").each(function( thisKey, thisVal ) {
								
								var serviceDuration = val.time_to_complete_service; // Duration of service
								var thisBookingTime = val.booking_time; // Start time of booking
								var thisBookingEndTime = val.end_time; // End time of booking
								var startTime = $(thisVal).attr("data-start-time"); //Slot start time
								var bookingClientName = val.booking_client_name; //Clients name
								var bookingServiceName = val.booking_service_name; //Service name
								
								var bookingID = val.booking_id;
								var bookingDate = val.booking_date;
								var bookingEmployeeID = val.employee_id;
								
								var serviceDurationArray = serviceDuration.split(":");
								var hoursInMinutes = serviceDurationArray[0] * 60;
								var minutes = serviceDurationArray[1];
								var slots = noOfSlotsRequired(hoursInMinutes, minutes);
								
								if(startTime == thisBookingTime){
									var $backgrounds = new Array("rgb(255, 173, 153)", "rgb(255, 179, 179)", "rgb(217, 179, 255)","rgb(153, 255, 204)","rgb(255, 255, 204)","rgb(204, 179, 255)","rgb(179, 255, 236)");
									
									function randomFrom(arr){
										var randomIndex = Math.floor(Math.random() * arr.length);
										return arr[randomIndex];
									}
									
									var $backgroundColor = randomFrom($backgrounds);

									var embedThisText = bookingClientName + "<br>" + "<span style=\"font-weight: none; text-transform: capitalize;\">" + bookingServiceName + "</span>"; 
									$(this).append(embedThisText);
									var $elem = $(this);
									startValue = $elem.attr("data-end-time");
									$elem.css("background",$backgroundColor);
									$elem.css("border",$backgroundColor);
									$elem.attr("data-slot-status","isBooked");
									
									var bookingTimes = thisBookingTime + " - " + thisBookingEndTime;
									
									$elem.attr("data-client",bookingClientName);
									$elem.attr("data-time-booking",bookingTimes);
									$elem.attr("data-the-service",bookingServiceName);
									$elem.attr("data-booking-duration",serviceDuration);
									$elem.attr("data-booking-id",bookingID);
									$elem.attr("data-booking-date",bookingDate);
									$elem.attr("data-booking-employee-id",bookingEmployeeID);
									
									var $sliceUpTo = slots - 1;
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).css("background",$backgroundColor);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).css("border",$backgroundColor);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-slot-status","isBooked");
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-client",bookingClientName);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-time-booking",bookingTimes);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-the-service",bookingServiceName);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-duration",serviceDuration);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-id",bookingID);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-date",bookingDate);
									$elem.nextAll(".fifteenMinuteSlot").slice(0, $sliceUpTo).attr("data-booking-employee-id",bookingEmployeeID);
									
								}
								
								if(startTime == startValue){
									var clientsBookingTimes = thisBookingTime + " - " + thisBookingEndTime;
									var embedThisTextToo = "<span style='position: relative; top: 4px;'>"+ clientsBookingTimes +"</span>"; 
									$(this).append(embedThisTextToo);
								}
								
								countClientBookings++;				
							});
							
						});
						
						
				   },
				   error: function()
				   {	
						failure('Could not connect. Please try again.');
				   }
				});

				countForIds++;
				
				var operating_hours ='';
				
				var dateFromat = dbDateFormat;
				var dateToWorkWith = dateFromat.split('/');
				dateToWorkWith = dateToWorkWith[0] + "-" + dateToWorkWith[1] + "-" + dateToWorkWith[2];
				var a = dateToWorkWith.split("-");
				var the_date_select = new Date( a[2], (a[1] - 1), a[0] );
				var the_day_select = the_date_select.getDay();
				var days_array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var the_day_select_is = days_array[the_day_select];
				
				var operating_hours ='';
				
				if(the_day_select_is == 'Sunday' || the_day_select_is == 'Saturday'){
					operating_hours = val.weekend_hours;
				}else{
					operating_hours = val.operating_hours;
				}
				
				var workingHours = operating_hours.split(' - ');
				var clockIn = workingHours[0];
				var clockOut = workingHours[1];
				
				clockIn = clockIn.split(':');
				clockIn = clockIn[0] + "" + clockIn[1];
				
				clockOut = clockOut.split(':');
				clockOut = clockOut[0] + "" + clockOut[1];
				
				
				$(".fifteenMinuteSlot").each(function() {
					
					   var startTime = $(this).attr("data-start-time");
					   var endTime = $(this).attr("data-end-time");
					   startTime = startTime.split(':');
					   startTime = startTime[0] + "" + startTime[1];
					   
					   endTime = endTime.split(':');
					   endTime = endTime[0] + "" + endTime[1];
					   if(parseInt(startTime) >= clockIn && parseInt(endTime) <= clockOut){
						   
					   }else{
						   $(this).css("background","#f2f2f2");
						   $(this).attr("data-slot-status","isClosed");
					   }
					   
					   
				});
				
			});
			
			var displayNo = 1;
			
		   //$('.carousel.carousel-slider').carousel({full_width: true});
			$('.employeesCarousel').slick({
					infinite: false,
					speed: 400,
					arrows:false,
					slidesToShow: displayNo,
					slidesToScroll: 1
			});
			var employeeIndexValue = 0;
			$( ".employeesCarousel" ).slick('slickGoTo', parseInt(employeeIndexValue));
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}


function getEmployeeSales(){

	var countForIds = 1;

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeeSales.php?salonId=' + salonId + '&chosenDate=' + dbDateFormat,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		   
			$('#dayTotal').text(data["daysTotal"]);
			$('#monthsTotal').text(data["monthsTotal"]);
			$('#yearTotal').text(data["yearTotal"]);

			$.each( data, function( key, val ) {
				
				if(key == 'daysTotal'){
					
				}
				else if(key == 'monthsTotal'){
					
				}
				else if(key == 'yearTotal'){
					
				}else{
					
					var picToDisplay = 'https://lollipopbeauty.co.za/Website_1/temp/' + val.profilePic;
					$('.carousel').append('<div class="_employeeContainer carousel-item" id="'+ val.id +'" data-employee-name="' + val.employeeName + '"><div class="profileTop"><div class="actualProfileImage" style="background: url(\''+ picToDisplay +'\');"></div><span class="salonEmployeesName">'+ val.employeeName +'</span></div><div class="fifteenMinuteSlot" data-start-time="08:00" data-end-time="08:15" data-slot-status="isOpen">'+ val.salesToday +'</div><div class="fifteenMinuteSlot" data-start-time="08:15" data-end-time="08:30" data-slot-status="isOpen">'+ val.salesMonth +'</div><div class="fifteenMinuteSlot" data-start-time="08:30" data-end-time="08:45" data-slot-status="isOpen">'+ val.salesYear +'</div></div>');                  
					
				}
					
				countForIds++;
				
			});

		   $('.carousel.carousel-slider').carousel({full_width: true});
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
			
	
}

function getServicesSales(){
	var countForIds = 1;

	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getServicesSales.php?salonId=' + salonId + '&chosenDate=' + dbDateFormat,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			
			$.each( data, function( key, val ) {
				
				//$('#dayTotal').text(data["daysTotal"]);
				//$('#monthsTotal').text(data["monthsTotal"]);
				
				$('.carousel').append('<div class="_employeeContainer carousel-item" id="'+ val.id +'" data-employee-name="' + val.serviceName + '"><div class="profileTop"><div class="actualProfileImage" style="background: url(\'\');"></div><span class="salonServiceName">'+ val.serviceName +'</span></div><div class="fifteenMinuteSlot" data-start-time="08:00" data-end-time="08:15" data-slot-status="isOpen">'+ val.salesToday +'</div><div class="fifteenMinuteSlot" data-start-time="08:15" data-end-time="08:30" data-slot-status="isOpen">'+ val.salesMonth +'</div><div class="fifteenMinuteSlot" data-start-time="08:30" data-end-time="08:45" data-slot-status="isOpen">'+ val.salesYear +'</div></div>');                  

				countForIds++;
				
			});	
			
			 $('.carousel.carousel-slider').carousel({full_width: true});
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}


function getCustomers(){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getAllCustomers.php',
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {

		   $.each( data, function( key, val ) {
			   
			   $(".availableEmployeesContainer").append('<div class="availableEmployee" data-booking-id="'+ val.booking_id +'" data-customer-id="'+ val.client_id +'"><div class="availableEmployeeName"><h4 style="position: relative; top: -30px;">'+ val.client_name +'</h4><span style="font-size: 0.7em; color: #000000; position: relative; top: -45px; font-weight: bold;">'+ val.service +'</span></div><div class="availableEmployeeName"><div class="calendarContainer"><div class="monthContainer">'+ val.booking_month +'</div><div class="dateContainer" style="font-weight: bold;">'+ val.booking_date +'</div><div class="timeContainer" style="font-size: 0.75em; color: #1a0000; position: relative; top: 2px;">'+ val.booking_time +'</div></div></div></div>');
			   
		   });
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
}

function getCustomersDB(salonID){
	var companyID = salonID;
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getAllCustomersDB.php?companyID=' + companyID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			   $.each( data, function( key, val ) {
				   $(".allCustomers").append('<div onclick="viewCustomer(\'customer'+ val.client_id +'\')" id="customer'+ val.client_id +'" class="row listedEmployee customer" data-customer-id="'+ val.id +'" data-client-id="'+ val.client_id +'"><div class="col s12"><div class="col s4"><div class="circleProfilePic" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_pic +'\');"></div><div></div></div><div class="col s6"><span class="title">'+ val.client_name +'</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');
			   });
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});

}

function getSalonProducts(salonID){
	var companyID = salonID;
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonProducts.php?companyID=' + companyID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data !='noMatch' ){
			   $.each( data, function( key, val ) {
				   $(".allProducts").append('<div onclick="viewProduct(\'product'+ val.id +'\')" id="product'+ val.id +'" class="row listedEmployee product" data-product-id="'+ val.id +'" "><div class="col s12"><div class="col s10"><span class="title">'+ val.product_name +'</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');
			   });
			}
			else{
				$(".allProducts").append('<div class="row listedEmployee" ><div class="col s12 center-align">You have not added any salon products yet.</div></div>');
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});

}

function getSalonCustomers(salonID){
	
	var companyID = salonID;
	
	$('.customerContainer').empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonCustomers.php?salonId=' + companyID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data !='noMatch' ){
				var radioCount = 0;
				$.each( data, function( key, val ) {
					
					$('.customerContainer').append('<div onclick="searchCustomers(\'client'+ val.client_id +'\');" id="client'+ val.client_id +'" class="row" data-rclient-name="'+ val.client_name +'" data-rclient-phonenumber="'+ val.client_phone_number +'" data-rclient-email="'+ val.client_email +'" style="border-bottom: 1px solid #ccc; padding-bottom: 20px;"><div class="col s12 center-align"><div class="title specificServiceName"><span>'+ val.client_name +'</span></div></div></div>');

					radioCount++;
				});
			}else{
				
				$('.customerContainer').append('<div class="row center-align"><div class="col s12">There are no customers in your database.</div></div>');
				
			}
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function getEmployeeServices(employeeID){
	var employeeID = employeeID;
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeesServices.php?employeeID=' + employeeID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
		   $.each( data, function( key, val ) {
			   $(".allServices").append('<div class="row listedEmployee" data-service-id="'+ val.service_id +'"><div class="col s12"><div class="col s5"><span class="title nameOfServiceTitle">'+ val.service_name +'</span></div><div class="col s4"><span class="title">'+ val.service_duration +'</span></div><div class="col s3"><span class="title">R '+ val.service_cost +'</span></div></div></div>');
		   });
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});

}

function updateCustomerNotes(customerID, customerNotes){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateCustomerNotes.php?customerID=' + customerID + '&customerNotes=' + customerNotes,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			if(data == true)
			{
				Materialize.toast('Customer notes have been updated.', 7000) ;
			}
			else
			{
				failure('There was a problem. Please try again.');
			}
		  
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});

}

function updateProduct(productId, productName){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateProduct.php?productID=' + productId + '&productName=' + productName,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			if(data == true)
			{
				Materialize.toast('Salon product has been updated.', 7000) ;
			}
			else
			{
				failure('There was a problem. Please try again.');
			}
		  
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});

}

function signupUserFacebook(email,password,name,surname){
	//$("#loading-overlay").fadeIn();
	localStorage.setItem('userFirstName', fname);
	localStorage.setItem('userLastName', surname);
	signUpUser(email,$password);
}

// User sign up

function signUpUser(email, password,name,surname){
	
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/registerUser.php?email=' + email + '&password=' + password+'&name='+name+'&surname='+surname,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
				data = data.split('//');

				if(data[0] > 0 && data[1] != '' && data[2] != '')
				{
					localStorage.setItem('accessKey', data[1]);
					localStorage.setItem('userId', data[0]);
					localStorage.setItem('type', data[2]);
					localStorage.setItem('userEmail', data[3]);
					localStorage.setItem('normalUserId', data[8]);
					
					if(data[2] == 'normalUser' && data[7] == 'incomplete')
					{
						window.location.href = "updateUserProfile.html";
					}
					else if(data[2] == 'normalUser' && data[7] == 'complete')
					{
						window.location.href = "main.html";
					}
					else{
						
					}
					
				}
				else if(data[0] == -1 && data[1] == 'alreadyExists'){
					
					failure('There\'s already an account associated with this email.');
				}
				else
				{
					failure('There was a problem. Please try again.');
				}
		  
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});

}

//Salon Sign Up
function signUpSalon(email, password, freelancer, name, surname){
	
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/registerSalon.php?email=' + email + '&password=' + password + '&freelancer=' + freelancer+'&name='+name+'&surname='+surname,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			
				data = data.split('//');
				
			
				if(data[0] > 0 && data[1] != '' && data[2] != '')
				{
					localStorage.setItem('accessKey', data[1]);
					localStorage.setItem('userId', data[0]);
					localStorage.setItem('type', data[2]);
					localStorage.setItem('userEmail', data[3]);
					localStorage.setItem('userName', data[4]);
					localStorage.setItem('userPicture', data[5]);
					localStorage.setItem('userContactNumber', data[6]);
					localStorage.setItem('salonAccountActivated', data[9]);
					
					if(data[2] == 'salonUser' && data[8] == 'incomplete')
					{
						localStorage.setItem('salonId', data[7]);
						
						if(salonId > 0){
							window.location.href = "updateSalonProfile.html";
						}
						window.location.href = "updateSalonProfile.html";
						
					}
					else{
						
					}
					window.location.href = "updateSalonProfile.html";
					
				}
				else if(data[0] == -1 && data[1] == 'alreadyExists'){
					
					failure('There\'s already an account associated with this email.');
				}
				else
				{
					failure('There was a problem. Please try again.');
				}
		  
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});

}

function getSalonServiceRating(serviceID){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServiceRating.php?serviceID=' + serviceID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			var rating = data;
			if(rating == 1){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			else if(rating == 2){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			else if(rating == 3){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');

				
			}
			else if(rating == 4){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			else if(rating == 5){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
			}else{
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getSalonInformation(salonId){
	var salonID = salonId;
	var checkForPromos = 0;
	//First get the salon information
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonInformation.php?salonID=' + salonID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			data = data.split('/-|-/');
			//Salon Name
			_("companyName").empty();
			_("companyName").text(data[0]);
			//Logo
			_("salonProfileLogo").empty();
			var imageToDisplay = "https://lollipopbeauty.co.za/Website_1/temp/" + data[1];
			_("salonProfileLogo").attr("src",imageToDisplay);
			//About us
			_("aboutSalonInfo").empty();
			_("aboutSalonInfo").text(data[2]);
			//Contact no
			_("contactNumbers").empty();
			_("contactNumbers").text(data[3]);
			//Email address
			_("emailAddress").empty();
			_("emailAddress").text(data[4]);
			//Operating hours
			_("operatingHours").empty();
			_("operatingHours").text(data[5]);
			//Weekend hours
			// _("weekendOperatingHours").empty();
			// _("weekendOperatingHours").text(data[6]);
			//Public holidays
			// _("publicHolidaysOperatingHours").empty();
			// _("publicHolidaysOperatingHours").text(data[7]);
			//Location
			_("location").empty();
			_("location").text(data[8]);
			//Location
			_("websiteAddress").empty();
			_("websiteAddress").text(data[14]);
			
			
			if(data[9] == '' && data[10] == '' && data[11] == '' && data[12] == ''){
					
				
				
			}else{
				
				//If there are, then display them
				
				$(".socialMediaContainer").empty();
				//data[9] == facebook link
				if(data[9] != ''){
					$(".socialMediaContainer").append('<a href="'+ data[9] +'"><img src="images/social-icons/facebook.svg"></a>');
				}
				//data[10] == twitter link
				if(data[10] != ''){
					$(".socialMediaContainer").append('<a href="'+ data[10] +'"><img src="images/social-icons/twitter.svg"></a>');
				}
				//data[10] == instagram link
				if(data[11] != ''){
					$(".socialMediaContainer").append('<a href="'+ data[11] +'"><img src="images/social-icons/instagram.svg"></a>');
				}
				//data[10] == pinterest link
				if(data[12] != ''){
					$(".socialMediaContainer").append('<a href="'+ data[12] +'"><img src="images/social-icons/pinterest.svg"></a>');
				}
				
			}
			
			//Location Link
			if(data[8] != ''){
				_("locationContainer").attr("href", "http://maps.google.com/maps?q=" + data[8]);
			}
			
			var rating = data[13];
			
			if(rating == 1){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			else if(rating == 2){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			else if(rating == 3){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');

				
			}
			else if(rating == 4){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			else if(rating == 5){
				
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				$(".salonRating").append('<i class="ion-android-star "></i>');
				
			}else{
				
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				$(".salonRating").append('<i class="ion-android-star-outline "></i>');
				
			}
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
	//Second get the service categories
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServiceCategories.php?salonID=' + salonID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {

		   $.each( data, function( key, val ) {
			   
			   var category = val.category_name;
			   var categoryIcon = '';
			   
			   if(category == 'Make-Up'){
				   categoryIcon = 'makeUp';
			   }else if(category == 'Hair'){
				   categoryIcon = 'hair';
			   }else if(category == 'Nails'){
				   categoryIcon = 'nails';
			   }else if(category == 'Massage'){
				   categoryIcon = 'massage';
			   }else if(category == 'Waxing'){
				   categoryIcon = 'waxing';
			   }else if(category == 'Barber'){
				   categoryIcon = 'barber';
			   }else{
				   
			   }
			   
			   //$(".profileServices .collection").append('<li class="collection-item avatar _serviceCategory " data-category-id="'+ val.category_id +'"><img src="images/service-icons/'+ categoryIcon +'.svg" alt="" class="myCircle"><span class="title">'+  val.category_name +'</span><a href="#!" class="secondary-content"><i class="ion-chevron-right" ></i></a></li>');
			  $(".profileServices .collection").append('<div class="row _serviceCategory" data-category-id="'+ val.category_id +'"><div class="col s12"><div class="col s4"><img src="images/service-icons/'+ categoryIcon +'.svg" alt="" class="myCircle"></div><div class="col s6"><span class="title">'+  val.category_name +'</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');
			   
		   });
		   
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
	//check if the salon has any running promotions
	
		$.ajax
		({
		   url: 'https://lollipopbeauty.co.za/Website_1/api/checkForPromotions.php?salonID=' + salonID,
		   dataType: 'jsonp',
		   jsonp: 'jsoncallback',
		   timeout: 10000,
		   success: function(data, status)
		   {

			   if(data != 'noMatch'){			   
					$(".profileServices .collection").append('<div class="row _promotionCategory" data-promotion-id="1"><div class="col s12"><div class="col s4"><img src="images/service-icons/promotions.svg" alt="" alt="" class="myCircle"></div><div class="col s6"><span class="title">Promotions</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');
				    //Materialize.toast('Salon has services on promotion.', 3000) ;
			   };
		   },
		   error: function()
		   {	
				failure('Could not connect. Please try again.');
		   }
		   
		});
		

	
}

function checkIfFavoriteSalon(normalUserId, salonId){
	
	var salonID = salonId;
	var normalUserID = normalUserId;
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/checkIfSalonFavorite.php?salonID=' + salonID + '&userID=' + normalUserID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data == true){
				//console.log("This is one of my favourite salons.");
				
				_("myFavouriteBtn").addClass("unrateUsClassFavorite");
				_("myFavouriteBtn").text("remove as favourite");
			}else{
				//console.log("This is not one of my favourite salons.");
				_("myFavouriteBtn").addClass("rateUsClassFavorite");
				_("myFavouriteBtn").text("mark as favourite");
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getSalonServicesForCategory(salonId, categoryId){
	
	var salonID = salonId;
	var categoryID = categoryId;
	$(".servicesForChosenCatergory").empty();
	$(".rateServiceContainer").empty();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServicesByCategory.php?salonID=' + salonID + '&categoryID=' + categoryID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			$(".rateServiceContainer").append('<div class="col s12 center-align"><span>Tap on stars to rate the service.</span></div>');
			
		   $.each( data, function( key, val ) {
			   
				$(".servicesForChosenCatergory").append('<div class="row bookThisService" data-service-id="'+ val.service_id +'"><div class="col s4 service_name"><span style="color:'+ val.service_color +'">'+ val.service_name +'</span></div><div class="col s4"><span>R '+ val.service_cost +'</span></div><div class="col s4"><span>'+ val.service_duration +'</span></div><div class="col s12" style="text-align: left;"><span style="padding-top: 15px; padding-bottom: 15px; color: #1e4844; ">'+ val.service_description +'</span></div></div>');
				var rating = val.service_rating;
				
				if(rating == 1){
					
					var starRating = '<i class="ion-android-star rateServiceClass" data-service-rating="1" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="2" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="3" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="4" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="5" data-service-id="'+ val.service_id +'"></i>';

				}
				else if(rating == 2){
					
					var starRating = '<i class="ion-android-star rateServiceClass" data-service-rating="1" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="2" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="3" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="4" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="5" data-service-id="'+ val.service_id +'"></i>';
					
				}
				else if(rating == 3){
					
					var starRating = '<i class="ion-android-star rateServiceClass" data-service-rating="1" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="2" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="3" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="4" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="5" data-service-id="'+ val.service_id +'"></i>';
				
				}
				else if(rating == 4){
					
					var starRating = '<i class="ion-android-star rateServiceClass" data-service-rating="1" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="2" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="3" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="4" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="5" data-service-id="'+ val.service_id +'"></i>';
				
				}
				else if(rating == 5){
					
					var starRating = '<i class="ion-android-star rateServiceClass" data-service-rating="1" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="2" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="3" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="4" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star rateServiceClass" data-service-rating="5" data-service-id="'+ val.service_id +'"></i>';
				
					
				}else{
					
					var starRating = '<i class="ion-android-star-outline rateServiceClass" data-service-rating="1" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="2" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="3" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="4" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="5" data-service-id="'+ val.service_id +'"></i>';
					
				}
				
				$(".rateServiceContainer").append('<div class="row rateThisService" ><div class="col s5" style="font-size: 1.32em; position: relative; top: 10px;">'+  val.service_name +'</div><div class="col s7 rSS">'+  starRating +'</div></div>');
				//$(".rateServiceContainer").append('<div class="row rateThisService" ><div class="col s5" style="font-size: 1.32em; position: relative; top: 10px;">'+  val.service_name +'</div><div class="col s7 rSS"><i class="ion-android-star-outline rateServiceClass" data-service-rating="1" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="2" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="3" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="4" data-service-id="'+ val.service_id +'"></i><i class="ion-android-star-outline rateServiceClass" data-service-rating="5" data-service-id="'+ val.service_id +'"></i></div></div>');
				
		   });
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getSalonServicesOnPromotion(salonId){
	
	var salonID = salonId;
	$(".servicesForChosenCatergory").empty();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServicesOnPromotion.php?salonID=' + salonID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
		   $.each( data, function( key, val ) {
			   
			   //$(".service-category-table table tbody").append('<tr><td>'+ val.service_name +'</td><td>R '+ val.service_cost +'</td><td>'+ val.service_duration +'</td><td><button class="btn waves-effect waves-light bookThisService" data-service-id="'+ val.service_id +'" style="background: #666;" type="submit" name="action">Book</button></td></tr>');
			   $(".servicesForChosenCatergory").append('<div class="row bookThisService" data-service-id="'+ val.service_id +'"><div class="col s4 service_name"><span style="color:'+ val.service_color +'">'+ val.service_name +'</span></div><div class="col s4"><span>R '+ val.service_cost +'</span></div><div class="col s4"><span>'+ val.service_duration +'</span></div></div>');
		  
		   });
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function clientMakeBooking(clientId, clientName, clientPhoneNumber, clientEmail, companyId, serviceId, service, serviceCost, timeToCompleteService, allocatedEmployee, allocatedEmployeeID, dateOfBooking, timeOfBooking, userLocation, userRequest)
{	
    $("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addBooking.php?clientId='+ clientId  + '&clientName='+ clientName + '&clientPhoneNumber=' + clientPhoneNumber + '&clientEmail=' + clientEmail + '&companyId=' + companyId + '&serviceId=' + serviceId + '&service=' + service + '&serviceCost=' + serviceCost + '&timeToCompleteService=' + timeToCompleteService + '&allocatedEmployee='+ allocatedEmployee +'&allocatedEmployeeID='+ allocatedEmployeeID +'&dateOfBooking='+ dateOfBooking  +'&timeOfBooking='+ timeOfBooking + '&userLocation=' + userLocation + '&userRequest=' + userRequest,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
           $("#loading-overlay").fadeOut();
			if(data == true)
			{
                //Materialize.toast('Your booking has been made.', 5000) ;
			}else{
               // Materialize.toast('The bookng failed, please try again.', 5000) ;
            }

	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
	
}

function updateSocialMediaData(salonId, facebook, twitter, instagram, pinterest, website){
	
	 $("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateSocialData.php?salonId='+ salonId  + '&facebook='+ facebook + '&twitter=' + twitter + '&instagram=' + instagram + '&pinterest=' + pinterest + '&website=' + website,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
           $("#loading-overlay").fadeOut();
			if(data == true)
			{
                Materialize.toast('Your social media has been updated.', 5000);
			}else{
                Materialize.toast('Your social media has not been updated.', 5000);
            }

	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
	
}

function startMap()
{
	jQuery(function($) 
	{
		// Asynchronously Load the map API 
		var script = document.createElement('script');
		script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVKePYlBZOyO_s-Egzarb4OWgGtHQL6yQ&callback=initMap";
		document.body.appendChild(script);
	});
	
}


function getNearbySalons(salonIds){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getNearbySalons.php?salonIDs=' + salonIds,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data != 'noMatch'){
				
			   $.each( data, function( key, val ) {
				   
				   //<span class="operatingHoursTitle">Operating Hours:</span>&nbsp;<span class="companyOperatingHours">'+ val.salon_operating_hours +'</span><br>
				   $(".results").append('<div data-salon-id="'+ val.salon_id +'" data-salon-long="'+ val.salon_long +'" data-salon-lat="'+ val.salon_lat +'" id="'+ val.salon_id +'" class="salon_Result" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_picture +'\');"><div class="result-box"><div class="topOfBox"></div><div class="bottomOfBox"><h1>'+ val.salon_name +'</h1><p class="resultsSalonRating"></p><p><span class="locationTitle">Location:</span>&nbsp;<span class="companyLocation">'+ val.salon_street_address +'</span><br></p></div></div></div>');
				    
					if(val.salon_rating == 1){
				
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 2){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 3){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');

						
					}
					else if(val.salon_rating == 4){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 5){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
					}else if(val.salon_rating == 0){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}

					
			   });
			}else{
				 $(".results").append('<div class="row"><div class="col s12"><h5 class="center-align noResultsHeading">Sorry, there are no nearby salons of this type.</h5></div></div>');
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getNearbySalonsByService(serviceName){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonsByServiceName.php?serviceName=' + serviceName,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data != 'noMatch'){
				
			   $.each( data, function( key, val ) {
				   
				   $(".results").append('<div data-salon-id="'+ val.salon_id +'" data-salon-long="'+ val.salon_long +'" data-salon-lat="'+ val.salon_lat +'" id="'+ val.salon_id +'" class="salonResult" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_picture +'\');"><div class="result-box"><div class="topOfBox"></div><div class="bottomOfBox"><h1>'+ val.salon_name +'</h1><p class="resultsSalonRating"></p><p><span class="operatingHoursTitle">Operating Hours:</span>&nbsp;<span class="companyOperatingHours">'+ val.salon_operating_hours +'</span><br><span class="locationTitle">Location:</span>&nbsp;<span class="companyLocation">'+ val.salon_street_address +'</span><br></p></div></div></div>');
				    
					if(val.salon_rating == 1){
				
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 2){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 3){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');

						
					}
					else if(val.salon_rating == 4){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 5){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
					}else if(val.salon_rating == 0){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}

					
			   });
			}else{
				 $(".results").append('<div class="row"><div class="col s12"><h5 class="center-align noResultsHeading">Sorry, there are no salons performing this service.</h5></div></div>');
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getNearbySalonsByRegion(regionName){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonsByRegionName.php?regionName=' + regionName,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data != 'noMatch'){
				
			   $.each( data, function( key, val ) {
				   
				   $(".results").append('<div data-salon-id="'+ val.salon_id +'" data-salon-long="'+ val.salon_long +'" data-salon-lat="'+ val.salon_lat +'" id="'+ val.salon_id +'" class="salonResult" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_picture +'\');"><div class="result-box"><div class="topOfBox"></div><div class="bottomOfBox"><h1>'+ val.salon_name +'</h1><p class="resultsSalonRating"></p><p><span class="operatingHoursTitle">Operating Hours:</span>&nbsp;<span class="companyOperatingHours">'+ val.salon_operating_hours +'</span><br><span class="locationTitle">Location:</span>&nbsp;<span class="companyLocation">'+ val.salon_street_address +'</span><br></p></div></div></div>');
				    
					if(val.salon_rating == 1){
				
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 2){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 3){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');

						
					}
					else if(val.salon_rating == 4){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 5){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
					}else if(val.salon_rating == 0){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}

					
			   });
			}else{
				 $(".results").append('<div class="row"><div class="col s12"><h5 class="center-align noResultsHeading">Sorry, there are no salons performing in this region.</h5></div></div>');
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}


function getNearbySalonsByProduct(productName){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonsByProductName.php?productName=' + productName,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			if(data != 'noMatch'){
				
			   $.each( data, function( key, val ) {
				   
				   $(".results").append('<div data-salon-id="'+ val.salon_id +'" data-salon-long="'+ val.salon_long +'" data-salon-lat="'+ val.salon_lat +'" id="'+ val.salon_id +'" class="salonResult" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_picture +'\');"><div class="result-box"><div class="topOfBox"></div><div class="bottomOfBox"><h1>'+ val.salon_name +'</h1><p class="resultsSalonRating"></p><p><span class="operatingHoursTitle">Operating Hours:</span>&nbsp;<span class="companyOperatingHours">'+ val.salon_operating_hours +'</span><br><span class="locationTitle">Location:</span>&nbsp;<span class="companyLocation">'+ val.salon_street_address +'</span><br></p></div></div></div>');
				    
					if(val.salon_rating == 1){
				
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 2){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 3){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');

						
					}
					else if(val.salon_rating == 4){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}
					else if(val.salon_rating == 5){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star "></i>');
						
					}else if(val.salon_rating == 0){
						
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						$("#" + val.salon_id + " .resultsSalonRating").append('<i class="ion-android-star-outline "></i>');
						
					}

					
			   });
			}else{
				 $(".results").append('<div class="row"><div class="col s12"><h5 class="center-align noResultsHeading">Sorry, there are no salons that use this product.</h5></div></div>');
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}



function getPromotionImages(){
		//$("#loading-overlay").fadeIn();
		if(latitude != '' && longitude !=''){
			$.ajax
		({
			
			url: 'https://lollipopbeauty.co.za/Website_1/api/getPromotionImages2.php?latitude=' + latitude + '&longitude=' + longitude,
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 10000,
			success: function(data, status)
			{		
				if(data != 'noMatch'){
								
					$.each( data, function( key, val ) {
								  
						 $(".slides").append('<li data-promo-id="'+ val.salon_id +'"><img src="https://lollipopbeauty.co.za/Website_1/temp/'+ val.path_to_banner +'"><div class="promoTextContainer"><div class="promoTextChild checkOutPromo" data-salon-id="'+ val.salon_id +'"><span style="text-transform: uppercase"></span><br>'+ val.service_name +'&nbsp;<span class="promoPrice">R&nbsp;'+ val.service_cost + '</span><br><span class="salonPromo">' + val.salon_name + '</span></div></div></li>');
					
					});
							   
					$('.slider').slider();
					
					$('#loading-overlay').fadeOut();
					
				}else{
							 
					$(".slides").append('<li><img src="ads/1.jpg"><div class="promoTextContainer"></div></li>');
					$(".slides").append('<li><img src="ads/2.jpg"><div class="promoTextContainer"></div></li>');
					$(".slides").append('<li><img src="ads/3.jpg"><div class="promoTextContainer"></div></li>');
					$(".slides").append('<li><img src="ads/4.jpg"><div class="promoTextContainer"></div></li>');
					$('.slider').slider();
					
					$('#loading-overlay').fadeOut();
				}
			},
			 error: function()
			{	
				failure('Could not connect. Please try again.');
			}
					   
		});
		
		}else{
			
			$(".slides").append('<li><img src="ads/1.jpg"><div class="promoTextContainer"></div></li>');
			$(".slides").append('<li><img src="ads/2.jpg"><div class="promoTextContainer"></div></li>');
			$(".slides").append('<li><img src="ads/3.jpg"><div class="promoTextContainer"></div></li>');
			$(".slides").append('<li><img src="ads/4.jpg"><div class="promoTextContainer"></div></li>');
			$('.slider').slider();
			
		}
		

}

function getSalonSliderImages(salonId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonSliderImages.php?salonID=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			if(data != 'noMatch'){
				
			   $.each( data, function( key, val ) {

				   $(".slides").append('<li><img src="https://lollipopbeauty.co.za/Website_1/temp/'+ val +'"><div class="promoTextContainer"></div></li>');
				   //$(".slides").append('<li><div class="promoSlider" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.path_to_banner +'\');"></div></li>');
			   });
			   
			   $('.slider').slider();
			}else{
				$(".slides").append('<li><img src="ads/1.jpg"><div class="promoTextContainer"></div></li>');
				$(".slides").append('<li><img src="ads/2.jpg"><div class="promoTextContainer"></div></li>');
				$(".slides").append('<li><img src="ads/3.jpg"><div class="promoTextContainer"></div></li>');
				$(".slides").append('<li><img src="ads/4.jpg"><div class="promoTextContainer"></div></li>');
				$('.slider').slider();
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}


function getDisabledDates(salonId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getDisabledDates.php?salonID=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			if(data != 'noMatch'){
				
			   $.each( data, function( key, val ) {

				  $(".disabledDates").append('<div onclick="viewThisDisabledDate(\'disabledDate'+ val.id +'\');" id="disabledDate'+ val.id +'" class="row listedEmployee thisDisabledDate" data-disbaled-id="' + val.id + '"><div class="col s9 center-align" style="line-height: 65px;"><span style="color: #666; font-size: 1.05em;">' + val.disabledDate + '</span></div><div class="col s3"><i class="ion-android-arrow-forward myArrow"></i></div></div>');
				  
				});
			   
			}else{
				$(".disabledDates").append('<div class="row"><div class="col s12 center-align"><span style="position: relative; top: 20px;">You have not disabled any dates on your calendar.</span></div></div>');
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getEmployeeDisabledDates(employeeId){
	
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeeDisabledDates.php?employeeID=' + employeeId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			if(data != 'noMatch'){
				
			   $.each( data, function( key, val ) {

				  $(".disabledDates").append('<div onclick="employeeDisabledDate(\'empDD'+ val.id +'\');" id="empDD'+ val.id +'" class="row listedEmployee thisDisabledDate" data-disbaled-id="' + val.id + '"><div class="col s9 center-align" style="line-height: 65px;"><span style="color: #666; font-size: 1.05em;">' + val.disabledDate + '</span></div><div class="col s3"><i class="ion-android-arrow-forward myArrow"></i></div></div>');
				  
				});
			   
			}else{
				$(".disabledDates").append('<div class="row"><div class="col s12 center-align"><span style="position: relative; top: 20px;">You have not disabled any dates on this employee\'s calendar.</span></div></div>');
			}
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
	
}

function lettersOnly(input){
	var regex = /[^a-z\s]/gi; //g = for global; i = for non case sensitive letters
	input.value = input.value.replace(regex, "");
}
			
function numbersOnly(input){
	var regex = /[^0-9]/g; //g = for global; i = for non case sensitive letters
	input.value = input.value.replace(regex, "");
}

function updateSalonService(serviceID, serviceName, servicePrice, serviceDuration, serviceDesc){
	
	$('#loading-overlay').fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateSalonService.php?serviceID=' + serviceID + '&serviceName=' + serviceName + '&servicePrice=' + servicePrice + '&serviceDuration=' + serviceDuration + '&serviceDesc=' + serviceDesc,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$('#loading-overlay').fadeOut();
			if(data == true)
			{
				Materialize.toast('The service has been updated.', 7000) ;
			}
			else
			{
				failure('There was a problem. Please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
}

function updateSalonBookingSettings(salonId, numberOfHoursInAdvance){
	
	$('#loading-overlay').fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateSalonBookingSettings.php?salonID=' + salonId + '&numberOfHoursInAdvance=' + numberOfHoursInAdvance,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$('#loading-overlay').fadeOut();
			if(data == true)
			{
				Materialize.toast('The booking settings have been updated.', 7000) ;
			}
			else
			{
				failure('There was a problem. Please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function deleteSalonService(serviceID){
	$("#loading-overlay").fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/deleteService.php?serviceID=' + serviceID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$("#loading-overlay").fadeOut();
			if(data == true)
			{
				//Materialize.toast('The service has been deleted.', 7000) ;
				window.location.href = "salonServices.html";
			}
			else
			{
				failure('There was a problem. Please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
}

function addPromotion(salonId, serviceId, serviceName, servicePrice, promotionName, promotionDuration, promotionDesc){
	
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addPromotion.php?salonID=' + salonId + '&serviceID=' + serviceId + '&serviceName=' + serviceName + '&servicePrice=' + servicePrice + '&promotionName=' + promotionName + '&promotionDuration=' + promotionDuration + '&promotionDesc=' + promotionDesc,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			if(data > 0)
			{
				promoID = data;
				
				localStorage.setItem('promoId', promoID);
				
				if(promoID > 0){
					window.location.href = "updatePromotion.html";
				}

			}
			else
			{
				failure('There was a problem. Please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function checkForPromo(salonId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/checkForPromotion.php?salonID=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {

			if(data == true)
			{
				$(".input-field").append('<a href="updatePromotion.html"><button class="btn waves-effect waves-light updatePrommo" style="width: 100%; background: #666;" type="submit" name="action">Update Promotion</button></a>');
			}
			else
			{
				$(".input-field").append('<a href="addPromotion.html"><button class="btn waves-effect waves-light addPrommo" style="width: 100%; background: #666;" type="submit" name="action">Add Promotion</button></a>');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function countPromos(salonId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/checkForPromotion.php?salonID=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {

			if(data != '' && data == 1)
			{
				$(".headerImage_top").append('<span>' + data + '</span>');
				$(".headerImage_bottom").append('<span>Running Promotion</span>');
			}
			else if(data != '' && data > 1){
				$(".headerImage_top").append('<span>' + data + '</span>');
				$(".headerImage_bottom").append('<span>Running Promotions</span>');
			}
			else if(data != '' && data == 0){
				$(".headerImage_top").append('<span>0</span>');
				$(".headerImage_bottom").append('<span>Running Promotions</span>');
			}else{
				$(".headerImage_top").append('<span>0</span>');
				$(".headerImage_bottom").append('<span>Running Promotions</span>');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getBookingsCount(salonId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getBookingsCount.php?salonID=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {

			if(data != '' && data == 1)
			{
				$(".headerImage_top").append('<span>' + data + '</span>');
				$(".headerImage_bottom").append('<span>Booking Today</span>');
			}
			else if(data != '' && data > 1){
				$(".headerImage_top").append('<span>' + data + '</span>');
				$(".headerImage_bottom").append('<span>Bookings Today</span>');
			}
			else if(data != '' && data == 0){
				$(".headerImage_top").append('<span>0</span>');
				$(".headerImage_bottom").append('<span>Bookings Today</span>');
			}else{
				$(".headerImage_top").append('<span>0</span>');
				$(".headerImage_bottom").append('<span>Bookings Today</span>');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getEmployeeBookingsCount(employeeId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeeBookingsCount.php?employeeID=' + employeeId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {

			if(data != '' && data == 1)
			{
				$(".headerImage_top").append('<span>' + data + '</span>');
				$(".headerImage_bottom").append('<span>Booking Today</span>');
			}
			else if(data != '' && data > 1){
				$(".headerImage_top").append('<span>' + data + '</span>');
				$(".headerImage_bottom").append('<span>Bookings Today</span>');
			}
			else if(data != '' && data == 0){
				$(".headerImage_top").append('<span>0</span>');
				$(".headerImage_bottom").append('<span>Bookings Today</span>');
			}else{
				$(".headerImage_top").append('<span>0</span>');
				$(".headerImage_bottom").append('<span>Bookings Today</span>');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getUserBookingsCount(userID){

    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getUserBookingsCount.php?userID=' + userID,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

            if(data != '' && data == 1)
            {
                $(".headerImage_top").append('<span>' + data + '</span>');
                $(".headerImage_bottom").append('<span>Booking Today</span>');
            }
            else if(data != '' && data > 1){
                $(".headerImage_top").append('<span>' + data + '</span>');
                $(".headerImage_bottom").append('<span>Bookings Today</span>');
            }
            else if(data != '' && data == 0){
                $(".headerImage_top").append('<span>0</span>');
                $(".headerImage_bottom").append('<span>Bookings Today</span>');
            }else{
                $(".headerImage_top").append('<span>0</span>');
                $(".headerImage_bottom").append('<span>Bookings Today</span>');
            }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });

}

function getUserBookings(userID){

    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getUserBookings.php?userID=' + userID,
         dataType: 'jsonp',
         jsonp: 'jsoncallback',
         timeout: 10000,
            success: function(data, status)
			{
				if(data != 'noMatch'){

					$.each( data, function( key, val ) {
						$(".myBookings").append('<div class="row thisBooking" data-booking-id="'+ val.booking_id +'" data-salon-id="'+ val.salon_id +'" data-booking-date="'+ val.actual_date +'"><div class="col s5"><div class="col s12"><span style="font-weight: bold; color: #666;">'+ val.salon_name +'</span></div><div class="col s12"><span>'+ val.service_name +'</span></div></div><div class="col s4"><div class="col s12"><span style="color:'+ val.date_color +'; font-weight: bold;">'+ val.date +'</span></div><div class="col s12"><span>'+ val.time +'</span></div></div><div class="col s3"><i class="ion-android-arrow-forward myArrow"></i></div></div>');
					 });

				}else{
					
					$(".myBookings").append('<div class="row center-align"><div class="col s12"><div class="row"><p>You currently have no bookings.</p></div><div class="row"><a href="main.html"><button class="btn-large waves-effect waves-light" style="width: 100%;">Find Salons</button></a></div></div></div>');
					
				}


			},
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
    
}

function getDatesWithBookings(salonId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getDatesWithBookings.php?salonID=' + salonId,
         dataType: 'jsonp',
         jsonp: 'jsoncallback',
         timeout: 10000,
            success: function(data, status)
			{
				if(data != 'noMatch'){
					localStorage.setItem('datesWithBookings', data);
				}
			},
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}

function getEmployeeDatesWithBookings(employeeId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeeDatesWithBookings.php?employeeID=' + employeeId,
         dataType: 'jsonp',
         jsonp: 'jsoncallback',
         timeout: 10000,
            success: function(data, status)
			{
				if(data != 'noMatch'){
					localStorage.setItem('datesWithBookings', data);
				}
			},
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}

function returnMonthNumber(monthName){
	
	var monthNumber = '';
	
	if(monthName == "January"){
		monthNumber = "01";
	}else if(monthName == "February"){
		monthNumber = "02";
	}else if(monthName == "March"){
		monthNumber = "03";
	}else if(monthName == "April"){
		monthNumber = "04";
	}else if(monthName == "May"){
		monthNumber = "05";
	}else if(monthName == "June"){
		monthNumber = "06";
	}else if(monthName == "July"){
		monthNumber = "07";
	}else if(monthName == "August"){
		monthNumber = "08";
	}else if(monthName == "September"){
		monthNumber = "09";
	}else if(monthName == "October"){
		monthNumber = "10";
	}else if(monthName == "November"){
		monthNumber = "11";
	}else if(monthName == "December"){
		monthNumber = "12";
	}else{
		monthNumber = "00";
	}
		
	return monthNumber;
	
}

function returnDateNumber(date){
	var dateNumber = '';
	
	if(date == 1){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 2){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 3){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 4){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 5){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 6){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 7){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 8){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else if(date == 9){
					
		date = "0" + date;
		var dateNumber = date;
					
	}else{
					
		var dateNumber = date;
					
	}
	
	return dateNumber;
}

function getServiceHistory(userID){

    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getServiceHistory.php?userID=' + userID,
         dataType: 'jsonp',
         jsonp: 'jsoncallback',
         timeout: 10000,
            success: function(data, status)
			{
				if(data != 'noMatch'){

					$.each( data, function( key, val ) {
						$(".myBookings").append('<div class="row thisBooking" data-booking-id="'+ val.booking_id +'" data-salon-id="'+ val.salon_id +'" data-booking-date="'+ val.actual_date +'"><div class="col s5"><div class="col s12"><span style="font-weight: bold; color: #666;">'+ val.salon_name +'</span></div><div class="col s12"><span>'+ val.service_name +'</span></div></div><div class="col s4"><div class="col s12"><span style="color:'+ val.date_color +'; font-weight: bold;">'+ val.date +'</span></div><div class="col s12"><span>'+ val.time +'</span></div></div><div class="col s3"><i class="ion-android-arrow-forward myArrow"></i></div></div>');
					 });

				}else{
					
					$(".myBookings").append('<div class="row center-align"><div class="col s12"><div class="row"><p>You currently have no bookings.</p></div><div class="row"><a href="main.html"><button class="btn-large waves-effect waves-light" style="width: 100%;">Find Salons</button></a></div></div></div>');
					
				}


			},
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
    
}

function getFavoriteSalonsCount(userID){

    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getFavoriteSalonsCount.php?userID=' + userID,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

            if(data != '' && data == 1)
            {
                $(".headerImage_top").append('<span>' + data + '</span>');
                $(".headerImage_bottom").append('<span>Favourite Salon</span>');
            }
            else if(data != '' && data > 1){
                $(".headerImage_top").append('<span>' + data + '</span>');
                $(".headerImage_bottom").append('<span>Favourite Salons</span>');
            }
            else if(data != '' && data == 0){
                $(".headerImage_top").append('<span>0</span>');
                $(".headerImage_bottom").append('<span>Favourite Salons</span>');
            }else{
                $(".headerImage_top").append('<span>0</span>');
                $(".headerImage_bottom").append('<span>Favourite Salons</span>');
            }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });

}

function getFavoriteSalons(userID){

    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getFavoriteSalons.php?userID=' + userID,
         dataType: 'jsonp',
         jsonp: 'jsoncallback',
         timeout: 10000,
            success: function(data, status)
			{
				if(data != 'noMatch'){

					$.each( data, function( key, val ) {
						$(".myBookings").append('<div class="row thisBooking" data-salon-id="'+ val.salon_id +'" ><div class="col s5"><div class="col s12"><span style="font-weight: bold; color: #666;">'+ val.salon_name +'</span></div><div class="col s12"><span>'+ val.salon_phone_number +'</span></div></div><div class="col s4"><div class="col s12"><span font-weight: bold;">'+ val.city +'</span></div><div class="col s12"><span></span></div></div><div class="col s3"><i class="ion-android-arrow-forward myArrow"></i></div></div>');
					 });

				}else{
					
					$(".myBookings").append('<div class="row center-align"><div class="col s12"><div class="row"><p>You currently have no favourite salons.</p></div><div class="row"><a href="main.html"><button class="btn-large waves-effect waves-light" style="width: 100%;">Find Salons</button></a></div></div></div>');
					
				}


			},
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
    
}

function getFavoriteServiceProvidersCount(userID){

    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getFavoriteServiceProvidersCount.php?userID=' + userID,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

            if(data != '' && data == 1)
            {
                $(".headerImage_top").append('<span>' + data + '</span>');
                $(".headerImage_bottom").append('<span>Favourite Service Provider</span>');
            }
            else if(data != '' && data > 1){
                $(".headerImage_top").append('<span>' + data + '</span>');
                $(".headerImage_bottom").append('<span>Favourite Service Providers</span>');
            }
            else if(data != '' && data == 0){
                $(".headerImage_top").append('<span>0</span>');
                $(".headerImage_bottom").append('<span>Favourite Service Providers</span>');
            }else{
                $(".headerImage_top").append('<span>0</span>');
                $(".headerImage_bottom").append('<span>Favourite Service Providers</span>');
            }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });

}

function getFavoriteServiceProviders(userID){

    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getFavoriteServiceProviders.php?userID=' + userID,
         dataType: 'jsonp',
         jsonp: 'jsoncallback',
         timeout: 10000,
            success: function(data, status)
			{
				if(data != 'noMatch'){

					$.each( data, function( key, val ) {
						$(".myBookings").append('<div class="row thisBooking" data-salon-id="'+ val.salon_id +'" ><div class="col s5"><div class="col s12"><span style="font-weight: bold; color: #666;">'+ val.salon_name +'</span></div><div class="col s12"><span>'+ val.salon_phone_number +'</span></div></div><div class="col s4"><div class="col s12"><span font-weight: bold;">'+ val.employee_name +'</span></div><div class="col s12"><span></span></div></div><div class="col s3"><i class="ion-android-arrow-forward myArrow"></i></div></div>');
					 });

				}else{
					
					$(".myBookings").append('<div class="row center-align"><div class="col s12"><div class="row"><p>You currently have no favourite service providers.</p></div><div class="row"><a href="main.html"><button class="btn-large waves-effect waves-light" style="width: 100%;">Find Salons</button></a></div></div></div>');
					
				}


			},
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
    
}

function getEmployeeTips(employeeId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/getEmployeeTips.php?employeeID=' + employeeId,
         dataType: 'jsonp',
         jsonp: 'jsoncallback',
         timeout: 10000,
            success: function(data, status)
        {
            
			if(data != 'noMatch'){
				
				$.each( data, function( key, val ) {
					$(".containsTips").append('<div onclick="viewThisTip(\'tip'+ val.id +'\');" id="tip'+ val.id  +'" class="row listedEmployee employeeTip" data-booking-id="'+ val.id +'"><div class="col s12"><div class="col s5"><div class="row serviceName">' + val.service_name + '</div><div class="row promotionName">' + val.client_name + '</div></div><div class="col s5"><div class="row"><span>'+ val.date +'</span></div><div class="row"><span>'+ val.time +'</span></div></div><div class="col s2"><i class="ion-android-arrow-forward iarrowIcon"></i></div></div></div>');
				});
				
			}else{
				$(".containsTips").append('<div class="row"><br><p class="center-align">You have not performed any services yet.</p></div>');
			}
			
        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}

function checkIfThisIsAFreelancer(salonId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/checkIfThisIsAFreelancer.php?salonID=' + salonId,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

                if(data ==true){
                   
                }else{
                   $("#plusE").css("display","none");
                }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}
function checkHowManyEmployee(salonId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/checkHowManyEmployee.php?salonID=' + salonId,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

                if(data ==true){
                   
                }else{
                   $("#plusE").css("display","none");
                }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}

function checkTrial(salonId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/checkTrial.php?salonID=' + salonId,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

                if(data ==true){
                   
                }else{
                   $("#trial").css("display","none");
                }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}

function isAFreelancer(salonId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/isAFreelancer.php?salonID=' + salonId,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {

                if(data ==true){
                   $("#freelanceRequest").css("display","block");
					//$(".confirmBookingContainer button").addClass("mB");
				   //$(".confirmBookingContainer button").prop("disabled", true);
				   
                }else{
                   
                }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}

function isAFreelancerBooking(salonId,bookingId){
	
	$.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/isAFreelancerBooking.php?salonID=' + salonId + '&bookingId=' + bookingId,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {
				data = data.split('//');
				
                if(data[0] ==1){
					
                    $("#freelanceBooking").css("display","block");
					$("#location").val(data[1]);
				    $("#specialRequest").val(data[2]);
				   
                }else{
                   
                }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });
	
}

function cancelBooking(bookingId){
    $('#loading-overlay').fadeIn();
    $.ajax
    ({
        url: 'https://lollipopbeauty.co.za/Website_1/api/cancelBooking.php?bookingId=' + bookingId,
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 10000,
        success: function(data, status)
        {
            $('#loading-overlay').fadeOut();
                if(data ==true){
                    Materialize.toast('This booking has been cancelled.', 7000);
                }else{
                    Materialize.toast('There was a problem, please try again.', 7000);
                }

        },
        error: function()
        {
            failure('Could not connect. Please try again.');
        }

    });

}



function listOfPromos(salonId){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/listOfPromos.php?salonID=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			if(data == false){
				
				$(".containsPromos").append('<div class="col s12 center-align">There are currently no proposed promotions.</div>');
				
			}else if(data == 'noServices'){
				
				$(".containsPromos").append('<div class="col s12 center-align">You must have at least one service to create a promotion.</div>');
				$('.addPrommo').prop('disabled', true);
			}
			else{
				
				$.each( data, function( key, val ) {
					$(".containsPromos").append('<div onclick="viewPromotion(\'promotion'+ val.id +'\')" id="promotion'+ val.id +'" class="row promoContainer" data-promo-id="'+ val.id +'"><div class="col s12"><div class="col s7"><div class="row serviceName">' + val.service_name + '</div><div class="row promotionName">' + val.promotion_name + '</div></div><div class="col s3 promotionStatus">' + val.promotion_status + '</div><div class="col s2"><i class="ion-android-arrow-forward iarrowIcon"></i></div></div></div>');
				});
				
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function updatePromotion(promoId, salonId, serviceId, serviceName, servicePrice, promotionName, promotionDuration, promotionDesc){
	
	$('#loading-overlay').fadeIn();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updatePromotion.php?promoId=' + promoId + '&salonID=' + salonId + '&serviceId=' + serviceId + '&serviceName=' + serviceName + '&servicePrice=' + servicePrice + '&promotionName=' + promotionName + '&promotionDesc=' + promotionDesc,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		   $('#loading-overlay').fadeOut();
			
			if(data == true){
				
				Materialize.toast('Promotion updated.', 20000);
				
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
	
}

function checkIfValidAccount(emailAddress){
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/checkIfValidAccount.php?emailAddress=' + emailAddress,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		    if(data !== true)
			{

				failure('This email is not associated with any account.');
				
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function resetPassword(emailAddress){
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/resetPassword.php?emailAddress=' + emailAddress,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
			data = data.split('//');
		    if(data[0] == 1)
			{
				localStorage.setItem('userEmail', data[1]);
				if(data[1] !=''){
					$('#modal2 p').text('Please check your email for the password reset link.');
					$('#modal2').openModal();
				}
								
			}else{
				failure('This email is not associated with any account.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function updateUserPassword(password, userEmail){
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateUserPassword.php?password=' + password + "&userEmail=" + userEmail,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
		    if(data == true)
			{
				Materialize.toast('Your password has been successfully changed.', 10000);				
			}else{
				failure('Password reset failed.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function disableThisDate(salonID, date){
	
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/disableDate.php?salonID=' + salonID + "&date=" + date,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
		    if(data == true)
			{
				Materialize.toast('This date has been disabled on your calendar.', 10000);				
			}else{
				failure('Disabling of date failed, please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function disableThisEmployeesDate(employeeId, chosenDate){
	
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/disableThisEmployeesDate.php?employeeID=' + employeeId + "&date=" + chosenDate,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
		    if(data == true)
			{
				Materialize.toast('This date has been disbaled.', 10000);				
			}else{
				failure('Disabling of date failed, please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function updateThisDate(disabledDateId, chosenDate){
	
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateDisabledDate.php?disabledDateId=' + disabledDateId + "&date=" + chosenDate,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
		    if(data == true)
			{
				Materialize.toast('This date has been updated on your calendar.', 10000);				
			}else{
				failure('Disabling of date failed, please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
	
}

function updateThisEmployeesDate(disabledDateId, chosenDate){
	
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/updateEmployeeDisabledDate.php?disabledDateId=' + disabledDateId + "&date=" + chosenDate,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
		    if(data == true)
			{
				Materialize.toast('This date has been updated on your calendar.', 10000);				
			}else{
				failure('Disabling of date failed, please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
	
}

function deleteThisDate(disabledDateId){
	
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/deleteDisabledDate.php?disabledDateId=' + disabledDateId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
		    if(data == true)
			{
				Materialize.toast('This date has been updated on your calendar.', 10000);				
			}else{
				failure('Disabling of date failed, please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function deleteThisEmployeesDate(disabledDateId){
	
	$("#loading-overlay").fadeIn();
	 
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/deleteEmployeeDisabledDate.php?disabledDateId=' + disabledDateId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		  
			$("#loading-overlay").fadeOut();
		    if(data == true)
			{
				Materialize.toast('This date has been updated on your calendar.', 10000);				
			}else{
				failure('Disabling of date failed, please try again.');
			}
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}


function getAllEmployeesForOperations(salonID){
	$(".allCustomers").empty();
	
					$.ajax
					({
					   url: 'https://lollipopbeauty.co.za/Website_1/api/getAllEmployeesForOperations.php?salonID=' + salonID,
					   dataType: 'jsonp',
					   jsonp: 'jsoncallback',
					   timeout: 10000,
					   success: function(data, status)
					   {
						   
						   $.each( data, function( key, val ) {
							   var _employeeID = val.employee_id;
								
								$(".allCustomers").append('<div onclick="changeEmployeeOperations(\'employeeOps'+ _employeeID +'\');" id="employeeOps'+ _employeeID +'" class="row listedEmployee" data-employee-name="'+ val.employee_name +'" data-employee-id="' + _employeeID + '"><div class="col s12"><div class="col s4"><div class="circleProfilePic" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_picture +'\');"></div><div></div></div><div class="col s6"><span class="title">'+ val.employee_name +'</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');

						   });
						   
						  
					   },
					   error: function()
					   {	
							failure('Could not connect. Please try again.');
					   }
					   
					});
	
	
}

function getAllWorkingSalonEmployees(salonID){
	
	$(".allCustomers").empty();
	
	$.ajax
	({
		url: 'https://lollipopbeauty.co.za/Website_1/api/getAllEmployeesForOperations.php?salonID=' + salonID,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status)
		{
						   
			$.each( data, function( key, val ) {
				
				var _employeeID = val.employee_id;
								
				$(".allCustomers").append('<div onclick="goToThisEmployee(\'employeeOps'+ _employeeID +'\');" id="employeeOps'+ _employeeID +'" class="row listedEmployee" data-employee-name="'+ val.employee_name +'" data-employee-id="' + _employeeID + '"><div class="col s12"><div class="col s4"><div class="circleProfilePic" style="background: url(\'https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_picture +'\');"></div><div></div></div><div class="col s6"><span class="title">'+ val.employee_name +'</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');

			});
						   		  
		 },
		 error: function()
		 {	
				failure('Could not connect. Please try again.');
		 }
					   
	});
	
}

function goBack() {
    window.history.back();
}

function rateThisSalon(salonId, salonRating){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/rateThisSalon.php?salonID='+ salonId + '&salonRating=' + salonRating,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Thank you for rating us.', 7000);
				}
				else
				{
					failure('There was a problem. Please try again.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function rateThisService(serviceID, serviceRating){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/rateThisService.php?serviceID='+ serviceID + '&serviceRating=' + serviceRating,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Thank you for rating our service.', 7000);
				}
				else
				{
					failure('There was a problem. Please try again.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function favoriteSalon(salonId, normalUserId){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/favoriteSalon.php?salonID='+ salonId + '&normalUserId=' + normalUserId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Marked as favourite.', 7000);
				}
				else
				{
					failure('Already marked as a favourite.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function unfavoriteSalon(salonId, normalUserId){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/unfavoriteSalon.php?salonID='+ salonId + '&normalUserId=' + normalUserId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Removed as favourite.', 7000);
				}
				else
				{
					failure('Already removed as a favourite.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function favoriteServiceProvider(employeeID, salonId, normalUserId){
	$("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/favoriteServiceProvider.php?employeeID=' + employeeID + '&salonID='+ salonId + '&normalUserId=' + normalUserId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Marked as favourite.', 7000);
				}
				else
				{
					failure('Already marked as a favorite.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function addCustomer(salonId, full_name, email, phoneNumber){
	
	$("#loading-overlay").fadeIn();
	$.ajax
	({
		
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addCustomer.php?salonID='+ salonId + '&fullName=' + full_name + '&email=' + email + '&phoneNumber=' + phoneNumber,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Customer has been added.', 7000);
				}
				else
				{
					failure('There was a problem. Please try again.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function addSalonProduct(salonId, product_name){
	
	$("#loading-overlay").fadeIn();
	$.ajax
	({
		
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addSalonProduct.php?salonID='+ salonId + '&productName=' + product_name,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
				$("#loading-overlay").fadeOut();
				if(data == true)
				{
					Materialize.toast('Product has been added.', 7000);
				}
				else
				{
					failure('There was a problem. Please try again.');
				}

	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
	
}

function zeroPad(num, places) {
	var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function checkIfUserIsActivated(){
	
	if(salonAccountActivated > 0){
		return true;
	}else{
		return false;
	}
	
}

function getSalonCategoryServices(salonID){
	$('.serviceCategories').empty();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServiceCategories.php?salonID=' + salonID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
		
		   $.each( data, function( key, val ) {
			   
			   var category = val.category_name;
			   var categoryIcon = '';
			   
			   if(category == 'Make-Up'){
				   categoryIcon = 'makeUp';
			   }else if(category == 'Hair'){
				   categoryIcon = 'hair';
			   }else if(category == 'Nails'){
				   categoryIcon = 'nails';
			   }else if(category == 'Massage'){
				   categoryIcon = 'massage';
			   }else if(category == 'Waxing'){
				   categoryIcon = 'waxing';
			   }else if(category == 'Barber'){
				   categoryIcon = 'barber';
			   }else{
				   
			   }
			   
			 //$(".profileServices .collection").append('<div class="row _serviceCategory" data-category-id="'+ val.category_id +'"><div class="col s12"><div class="col s4"><img src="images/service-icons/'+ categoryIcon +'.svg" alt="" class="myCircle"></div><div class="col s6"><span class="title">'+  val.category_name +'</span></div><div class="col s2"><i class="ion-android-arrow-forward myArrow"></i></div></div></div>');
			  
			  
			  $('.serviceCategories').append('<div class="row" data-category-id="'+ val.category_id +'" data-category-name="'+ val.category_name +'"><div class="col s12 center-align"><div class="specificServiceName"><span>'+ val.category_name +'</span></div></div></div>');
		  
		  });
		   
		   
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}


function getServicesForCategory(salonId, categoryId){
	
	var salonID = salonId;
	var categoryID = categoryId;
	$(".servicesForChosenCatergory").empty();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getSalonServicesByCategory.php?salonID=' + salonID + '&categoryID=' + categoryID,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
		   $.each( data, function( key, val ) {
			   
				//$(".servicesForChosenCatergory").append('<div class="row bookThisService" data-service-id="'+ val.service_id +'"><div class="col s4 service_name"><span style="color:'+ val.service_color +'">'+ val.service_name +'</span></div><div class="col s4"><span>R '+ val.service_cost +'</span></div><div class="col s4"><span>'+ val.service_duration +'</span></div><div class="col s12" style="text-align: left;"><span style="padding-top: 15px; padding-bottom: 15px; color: #1e4844; ">'+ val.service_description +'</span></div></div>');
				$('.servicesForChosenCatergory').append('<div class="row" data-service-id="'+ val.service_id +'" data-service-cost="'+ val.service_cost +'" data-service-duration="'+ val.service_duration +'" data-service-name="'+ val.service_name +'"><div class="col s12 center-align"><div class="specificServiceName"><span>'+ val.service_name +'</span></div></div></div>');
		 });
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	   
	});
	
}

function getTheAllocatedEmployees(serviceId){
	
	$('.servicesProviders').empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getServiceAllocatedEmployees.php?serviceId=' + serviceId + '&salonId=' + salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			
			$.each( data, function( key, val ) {

				$('.servicesProviders').append('<div class="row" data-employee-id="'+ val.employee_id +'" data-employee-name="'+ val.employee_name +'"><div class="col s12 center-align"><div class="specificServiceName"><span>'+ val.employee_name +'</span></div></div></div>');
		
			});
			
			
	   },
	   error: function()
	   {	
			failure('Could not connect. Please try again.');
	   }
	});
}

function clientMakeMultipleBooking(clientId, clientName, clientPhoneNumber, clientEmail, companyId, serviceId, service, serviceCost, timeToCompleteService, allocatedEmployee, allocatedEmployeeID, dateOfBooking, timeOfBooking, userLocation, userRequest)
{	
    $("#loading-overlay").fadeIn();
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/addBooking.php?clientId='+ clientId  + '&clientName='+ clientName + '&clientPhoneNumber=' + clientPhoneNumber + '&clientEmail=' + clientEmail + '&companyId=' + companyId + '&serviceId=' + serviceId + '&service=' + service + '&serviceCost=' + serviceCost + '&timeToCompleteService=' + timeToCompleteService + '&allocatedEmployee='+ allocatedEmployee +'&allocatedEmployeeID='+ allocatedEmployeeID +'&dateOfBooking='+ dateOfBooking  +'&timeOfBooking='+ timeOfBooking + '&userLocation=' + userLocation + '&userRequest=' + userRequest,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
           $("#loading-overlay").fadeOut();
			if(data == true)
			{
                //Materialize.toast('Your booking has been made.', 5000) ;
			}else{
                Materialize.toast('There was a problem, please try again.', 5000) ;
            }

	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
	
}

function getBookingHistory(salonId){
	
	$('.allBookings').empty();
	
	$.ajax
	({
	   url: 'https://lollipopbeauty.co.za/Website_1/api/getBookingHistory.php?salonID='+ salonId,
	   dataType: 'jsonp',
	   jsonp: 'jsoncallback',
	   timeout: 10000,
	   success: function(data, status)
	   {
			$.each( data, function( key, val ) {
				$(".allBookings").append('<div class="row listedEmployee"><div class="col s12"><span class="bh_card_service_heading">'+ val.service_name +'</span><br><span>'+ val.employee_name +'</span></div><div class="col s6"><div class="chip"><img src="https://lollipopbeauty.co.za/Website_1/temp/'+ val.profile_pic +'" >'+ val.client_name +'</div></div><div class="col s6 bh_card_date_time_container"><span>'+ val.date +' at '+ val.time +'</span><br><span>'+ val.service_cost +'</span></div><div class="col s12"><span>'+ val.booking_performed +'</span></div></div>');
			});

	   },
	   error: function()
	   {	
			failure('There was a problem connecting.');
	   }
	});
	
}

function changeMonthFormat(dateToChange){
	
	var dateArray = dateToChange.split("/");
	var monthName = '';
	
	if(dateArray[1] == "01"){
		monthName = "Jan";
	}else if(dateArray[1] == "02"){
		monthName = "Feb";
	}else if(dateArray[1] == "03"){
		monthName = "Mar";
	}else if(dateArray[1] == "04"){
		monthName = "Apr";
	}else if(dateArray[1] == "05"){
		monthName = "May";
	}else if(dateArray[1] == "06"){
		monthName = "Jun";
	}else if(dateArray[1] == "07"){
		monthName = "Jul";
	}else if(dateArray[1] == "08"){
		monthName = "Aug";
	}else if(dateArray[1] == "09"){
		monthName = "Sep";
	}else if(dateArray[1] == "10"){
		monthName = "Oct";
	}else if(dateArray[1] == "11"){
		monthName = "Nov";
	}else if(dateArray[1] == "12"){
		monthName = "Dec";
	}else{
		monthName = "";
	}
	
	return monthName;
}

function changeDateFormat(dateToChange){
	
	var dateArray = dateToChange.split("/");
	var dateToDisplay = '';
	
	if(dateArray[0] == "01"){
		dateToDisplay = "1";
	}else if(dateArray[0] == "02"){
		dateToDisplay = "2";
	}else if(dateArray[0] == "03"){
		dateToDisplay = "3";
	}else if(dateArray[0] == "04"){
		dateToDisplay = "4";
	}else if(dateArray[0] == "05"){
		dateToDisplay = "5";
	}else if(dateArray[0] == "06"){
		dateToDisplay = "6";
	}else if(dateArray[0] == "07"){
		dateToDisplay = "7";
	}else if(dateArray[0] == "08"){
		dateToDisplay = "8";
	}else if(dateArray[0] == "09"){
		dateToDisplay = "9";
	}else{
		dateToDisplay = dateArray[0];
	}
	
	return dateToDisplay;
	
}

function returnTheYear(dateToChange){
	
	var dateArray = dateToChange.split("/");
	var year = dateArray[2];

	return year;
}