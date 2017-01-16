alxApp.controller('skillsCtrl', function($scope) {
	var paragraphs = [];

	$scope.p1arr = { on: 0, members: [$scope.html, scope.css, $scope.js]};
	$scope.p2arr = { on: 0, members: [$scope.compass, scope.sass]};
	$scope.p3arr = { on: 0, members: [$scope.bootstrap, $scope.flex]};
	$scope.p4arr = { on: 0, members: [$scope.angular]};
	$scope.p5arr = { on: 0, members: [$scope.python, $scope.flask]};
	$scope.p6arr = { on: 0, members: [$scope.node]};
	$scope.p7arr = { on: 0, members: [$scope.express]};
	$scope.p8arr = { on: 0, members: [$scope.mongo, $scope.sql]};
	$scope.p9arr = { on: 0, members: [$scope.git]};
	$scope.p10arr = { on: 0, members: [$scope.agile, $scope.pm]};

	paragraphs.push($scope.p1arr, $scope.p2arr, $scope.p3arr, $scope.p4arr, $scope.p5arr, $scope.p6arr, $scope.p7arr, $scope.p8arr, $scope.p9arr, $scope.p10arr);

	$scope.showP = function(pNum, Num) {
		$scope.messageOn = 1;
		pArr[pNum] = 1;
		pArrArr[pNum]
		var p1 = [$scope.html, scope.css, $scope.js];
		if (pNum == 1) {
			$scope.html = 0;
			scope.css = 0;
			$scope.js = 0;
			if (insideNum == ) {

			}
		} else if (pNum == 2) {

		} else if (pNum == 3) {

		} else if (pNum == 4) {

		} else if (pNum == 5) {

		} else if (pNum == 6) {

		} else if (pNum == 7) {

		} else if (pNum == 8) {

		} else if (pNum == 9) {

		} else if (pNum == 10) {

		} else if (pNum == 11) {

		}


		if ($scope.p1) {
			$scope.p1 = 0;
		} else {
			$scope.p1 = 1;
		}
		if (which == 0) {
			$scope.html = 1;
		} else if (which == 1) {
			$scope.css = 1;
		} else if (which == 2) {
			$scope.js = 1;
		}
	};

	$scope.closeP = function(which) {
		console.log(which);
		console.log(typeof which);
		if (which == 1) {
			$scope.p1 = 0;
		}
	}
});