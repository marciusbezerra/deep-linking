var app = angular.module("app", []);

app.controller("appController", function($scope, $http) {
	$scope.fruits = Array();

	$scope.getData = function() {
		$http.get("fruits.js")
			.then(function(data) {
				$scope.fruits = data.data.fruits;
				console.table($scope.fruits);
			}, 
			function(data){
				alert("error: " + data.statusText);
				console.log(data);
			});
	};
});