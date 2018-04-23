var application = angular.module('myApp', []);
var salonApplication = angular.module('mySalonApp', []);
var myAccountsApp = angular.module('myAccountsApp', []);
var myServiceApp = angular.module('myServiceApp', []);
var myProfileApp = angular.module('myProfileApp', []);
var salonProfileApp = angular.module('salonProfileApp', []);

//Register Normal User
application.controller('registerController', function($scope, $http){
	
	$scope.form = {first_name : '', last_name : '', dob : '', phone_number : '', email : '', province: '', country: '', password: ''};
	$scope.submit = function(){
		var config = {
			method : 'POST',
			//url : 'http://localhost/Lollipop/Website_1/api/registerNormalUser.php',
			url : 'https://lollipopbeauty.co.za/Website_1/api/registerNormalUser.php',
			data : {
				'first_name' : $scope.form.first_name,
				'last_name' : $scope.form.last_name,
				'dob' : $scope.form.dob,
				'phone_number' : $scope.form.phone_number,
				'email' : $scope.form.email,
				'province' : $scope.form.province,
				'country' : $scope.form.country,
				'password' : $scope.form.password
			}
		};
		var request = $http(config);
		request.then(function  (response){
			$scope.msg = response.data;
			alert($scope.msg);
		},function(error){
			$scope.msg = error.data;
		});
	}

});

//Register Salon
salonApplication.controller('registerSalonController', function($scope, $http){
	
	$scope.form = {company_name : '', company_email : '', company_phone_number : '', owner_name : '', owner_email : '', owner_phone_number : '', street_address : '', suburb : '', city : '', vat_number: '', salon_type : ''};
	$scope.submit = function(){
		var config = {
			method : 'POST',
			url : 'https://lollipopbeauty.co.za/Website_1/api/registerSalonUser.php',
			data : {
				'company_name' : $scope.form.company_name,
				'company_email' : $scope.form.company_email,
				'company_phone_number' : $scope.form.company_phone_number,
				'owner_name' : $scope.form.owner_name,
				'owner_email' : $scope.form.owner_email,
				'owner_phone_number' : $scope.form.owner_phone_number,
				'street_address' : $scope.form.street_address,
				'suburb' : $scope.form.suburb,
				'city' : $scope.form.city,
				'vat_number' : $scope.form.vat_number,
				'salon_type' : $scope.form.salon_type
			}
		};
		var request = $http(config);
		request.then(function  (response){
			$scope.msg = response.data;
			window.location.assign("login.html");
		},function(error){
			$scope.msg = error.data;
		});
	}

});

//Update Service
myServiceApp.controller('updateController', function($scope, $http){
	
	$scope.form = {service_id: service_id, service_name : service_name, service_cost : service_cost, service_duration : service_duration, service_description : service_description};
	
	$scope.update = function(){
		var config = {
			method : 'POST',
			url : 'https://lollipopbeauty.co.za/Website_1/api/updateService.php',
			data : {
				'service_id' : $scope.form.service_id,
				'service_name' : $scope.form.service_name,
				'service_cost' : $scope.form.service_cost,
				'service_duration' : $scope.form.service_duration,
				'service_description' : $scope.form.service_description,
			}
		};
		var request = $http(config);
		request.then(function  (response){
			$scope.msg = response.data;
			//$window.location.href = 'salonServices.html';
			 window.location.assign("salonServices.html");
		},function(error){
			$scope.msg = error.data;
			//alert('Fail');
		});
	}
	
	$scope.remove = function(){
		var config = {
			method : 'POST',
			url : 'https://lollipopbeauty.co.za/Website_1/api/deleteService.php',
			data : {
				'service_id' : $scope.form.service_id,
			}
		};
		var request = $http(config);
		request.then(function  (response){
			$scope.msg = response.data;
			window.location.href = "salonServices.html";
		},function(error){
			$scope.msg = error.data;
			alert('Fail');
		});
	}

});

//Get All Accounts
myAccountsApp.controller('myController', function($scope, $http){
	$http.get('http://localhost/Lollipop/Website_1/api/getAllAccounts.php').success(function(response){
		$scope.myData = response;
	});
});

