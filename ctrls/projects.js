alxApp.controller('projectsCtrl', function($scope) {
	$scope.projectArr = [];
	var prj5 = {
		title: "Marti's Study Room",
		backgroundOn: "background-image: url('../compass/images/m1.png')",
		backgroundOff: 'background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("../compass/images/m1.png");',
		liveLink: "http://yalexhwang.com/marti-study-room/#/",
		gitLink: "https://github.com/yalexhwang/marti-study-room",
		scrollTag: "#marti2"
	};
	var prj4 = {
		title: "Mini City 2",
		backgroundOn: "background-image: url('../compass/images/final-1.png')",
		backgroundOff: 'background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("../compass/images/final-1.png");',
		liveLink: "",
		gitLink: "https://github.com/yalexhwang/final_project",
		scrollTag: "#final"
	};
	var prj3 = {
		title: "Mini City",
		backgroundOn: "background-image: url('../compass/images/minicity.png')",
		backgroundOff: 'background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("../compass/images/minicity.png");',
		liveLink: "",
		gitLink: "https://github.com/yalexhwang/mini_city",
		scrollTag: "#mini"
	};
	var prj2 = {
		title: "HydroSource",
		backgroundOn: "background-image: url('../compass/images/hydrosource1.png')",
		backgroundOff: 'background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("../compass/images/hydrosource1.png");',
		liveLink: "http://yalexhwang.com/hydrosource",
		gitLink: "https://github.com/yalexhwang/e-commerce",
		scrollTag: "#hydro"
	};
	$scope.projectArr.push(prj5, prj4, prj3, prj2);

	$scope.hoverSwitchOn = function(index) {
		$scope.initial = $scope.projectArr[index].backgroundOn;
		$scope.projectArr[index].backgroundOn = $scope.projectArr[index].backgroundOff;
		$scope.selectedLink = index;
	};
	$scope.hoverSwitchOff = function(index) {
		$scope.projectArr[index].backgroundOn = $scope.initial;
		$scope.selectedLink = "reset";
	};

	$scope.titleOff = function(index) {
		$scope.original = $scope.projectArr[index].title;
		$scope.projectArr[index].title = "Click For Details";
		$scope.selectedTitle = index;
	};

	$scope.titleBackOn = function(index) {
		$scope.projectArr[index].title = $scope.original;
		$scope.selectedTitle = "reset";
	}

});