alxApp.controller('projectsCtrl', function($scope) {
	$scope.final_prj = "Mini City Redesigned";
	$scope.mini_city = "Mini City";
	$scope.hydrosource = "HydroSource";
	$scope.marti = "Marti's Study Room";
	


	$scope.seeMore = function(that) {
		console.log(that);
		console.log("yo");
	};

	$scope.showLive = 0;
	$scope.overThumbnail = function() {
		$scope.showLive = 1;
		console.lg('hh');
	};



});