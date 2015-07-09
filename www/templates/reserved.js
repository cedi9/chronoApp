var chronoApp = angular.module("starter", ["ionic"]);

chronoApp.controller("AppCtrl", function ($scope) {
	$scope.reserveItem = [

	{promoname: " promoname"},
	{promoname: "picture"},
	{promoname: "price"},
	{promoname: " deadline"},
	{promoname: " time_left"},
	{promoname: " gelocation"}
	]
	// body...

	$scope.addPromo = function(){
		$scope.reserveItem.push({promoname: " "})
	}
})