function MyFirstCtrl($scope){
	//populate employees with some MODEL data
	var employees = ['Catherine Grant', 'Monica Grant', 'Christopher Grant', 'Jennifer Grant'];
	
	//Now put this model data into a scope so it can be used in the view
	$scope.ourEmployees = employees;
}