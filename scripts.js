var alxApp = angular.module('alxApp', ['ngRoute', 'duScroll', 'angular.backtop']);

alxApp.controller('alxCtrl', function($scope) {

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
