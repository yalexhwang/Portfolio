alxApp.controller('aboutCtrl', function($scope) {
	var photo1 = {
		url: "../compass/images/profile/alex0.png",
		class: "photo main",
		popUp: "../compass/images/profile/alex0pop.png"
	};
	var photo2 = {
		url: "../compass/images/profile/alex1.png",
		class: "photo sub",
		popUp: "../compass/images/profile/alex1pop.png"
	};
	var photo3 = {
		url: "../compass/images/profile/bauer.png",
		class: "photo bauer",
		popUp: "../compass/images/profile/bauerpop.png"
	};
	$scope.photoArr = [photo1, photo2, photo3];
	$scope.originalArr = [photo1.url, photo2.url, photo3.url];
	$scope.popUp = function(index) {
		if ($scope.photoArr[index].url !== $scope.originalArr[index]) {
			$scope.photoArr[index].url = $scope.originalArr[index];
		} else {
			$scope.photoArr[index].url = $scope.photoArr[index].popUp;
		}
	};

	$scope.popOff = function(index) {
		if ($scope.photoArr[index].url !== $scope.originalArr[index]) {
			$scope.photoArr[index].url = $scope.originalArr[index];
		} else {
			$scope.photoArr[index].url = $scope.photoArr[index].popUp;
		}
	};

});