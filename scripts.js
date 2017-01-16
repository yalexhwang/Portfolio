var alxApp = angular.module('alxApp', ['ngRoute', 'duScroll']);

alxApp.controller('alxCtrl', function($scope) {
	$scope.test = "haha";

});

alxApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/projects.html',
		controller: 'projectsCtrl'
	})
	.when('/skills', {
		templateUrl: 'views/skills.html',
		controller: 'skillsCtrl'
	})
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});
