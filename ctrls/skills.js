alxApp.controller('skillsCtrl', function($scope) {
	$scope.defaultMsg = 'Ask me about my skills!';
	//skill pieces
	function SkillObj(name, cssClass, msgIndex) {
		this.name = name;
		this.class = cssClass;
		this.msgIndex = msgIndex;
	}
	var obj0 = new SkillObj('HTML', 'skill lng pulse', 0);
	var obj1 = new SkillObj('CSS', 'skill lng pulse', 0);
	var obj2 = new SkillObj('COMPASS', 'skill frm2 shakeL', 1);
	var obj3 = new SkillObj('Sass', 'skill frm2 shakeR', 1);
	var obj4 = new SkillObj('Bootstrap', 'skill frm2 bounce shakeL', 2);
	var obj5 = new SkillObj('JavaScript', 'skill lng pulse', 0);
	var obj6 = new SkillObj('AngularJS', 'skill frm floating', 3);
	var obj7 = new SkillObj('Node.js', 'skill frm floating', 4);
	var obj8 = new SkillObj('Express', 'skill frm floating', 5);
	var obj9 = new SkillObj('MongoDB', 'skill db tossing', 6);
	var obj10 = new SkillObj('Python', 'skill lng pulse', 7);
	var obj11 = new SkillObj('Flask', 'skill frm floating', 7);
	var obj12 = new SkillObj('MySQL', 'skill db tossing', 6);
	var obj13 = new SkillObj('Git', 'skill other shakeL', 8);
	var obj14 = new SkillObj('RESTful API', 'skill other shakeR', 9);
	var obj15 = new SkillObj('Agile Scrum', 'skill misc shakeL', 10);
	var obj16 = new SkillObj('Project Management', 'skill misc shakeR', 11);
	$scope.skillsArr = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16];

	//Answers
	$scope.msg1 = {on: 0, message: 'It\'s the basics. I know my way around HTML, CSS, and JavaScript.'};
	$scope.msg2 = {on: 0, message: 'When working with CSS, I prefer to use Sass based Compass because it becomes easier to organize and maintain stylesheets with all the perks Sass brings, like nesting, variables, mixins and selector inheritance. It saves me time (and headache).'};
	$scope.msg3 = {on: 0, message: 'I use Bootstrap often, to a varying degree. Take advantage of its default CSS settings and components to avoid having to look at basic HTML elements. Or go all out with its custom jQuery plugins to have some live action. Although Bootstrap\'s responsive utilities are useful, CSS3\'s new layout mode, Flexbox is now my go-to way of making a responsive layout.'};
	$scope.msg4 = {on: 0, message: 'My favorite is AngularJS. Data-binding is awesome. MVC pattern is fun. Single page application rocks. I was avoiding pairing it with Bootstrap for having jQuery plugins, but I found an alternative, Angular UI.'};
	$scope.msg5 = {on: 0, message: 'Node.js is awesome just by the fact that it enables server-side JavaScript. Because Node.js is one of the reasons why I was able to become a full-stack web developer--that it lowered a barrier to back-end development, I have a sense of appreciation for Node. I have used Node.js in tandem with Express only, to get an web app started. But I know there is a lot more to Node.js and want to get serious with it.'};
	$scope.msg6 = {on: 0, message: 'Like Flask with Python, Express and Node.js is a lovely pair. Express Generator sets you a skeleton for an web application in seconds.'};
	$scope.msg7 = {on: 0, message: 'I like using MongoDB because it makes more sense to work with JSON based data when you are using JaaScript. However, I have chosen to use MySQL when data in use is relational by nature.'};
	$scope.msg8 = {on: 0, message: 'Who doesn\'t love Python? I like how simple its syntax is. Makes code more pleasing to my eyes. I don\'t have to worry about balancing braces, although I have to be careful with indentation. Along with Flask, it is so simple to get a set up started for an web application. virtualenv is useful to manage separate environments for different Python projects.'};
	$scope.msg9 = {on: 0, message: 'It took me a while to understand the basic operations of Git (all those times with a merge conflict...) Now I see how beneficial it is, especially thinking about all the trouble I had with document control in my previous career.'};
	$scope.msg10 = {on: 0, message: 'I find the concept of web API and its practice very intriguing. I had fun creating a simple RESTful API on my own. I loved that I had to consider how to structure and format data. It was like building a kind of navigation system for others who want to access my data. I get to make the rules, how exciting.'};
	$scope.msg11 = {on: 0, message: 'I am also familiar with Agile scrum methodology, thanks to the group projects I did at DigitalCrafts.'};
	$scope.msg12 = {on: 0, message: 'I come from project management background, so I understand the general concepts and approaches.'};
	$scope.msgArr = [$scope.msg1, $scope.msg2, $scope.msg3, $scope.msg4, $scope.msg5, $scope.msg6, $scope.msg7, $scope.msg8, $scope.msg9, $scope.msg10, $scope.msg11, $scope.msg12];

	$scope.answer = function(index) {
		$scope.msgOn = 1;
		initialize($scope.msgArr);
		$scope.selectedMsg = $scope.skillsArr[index].msgIndex;
		$scope.message = $scope.msgArr[$scope.skillsArr[index].msgIndex].message;
	};

	function initialize(arr) {
		for (var i = 0; i < arr.length; i++) {
			arr[i].on = 0;
		}
	}
	function randomAction(arr) {
		var index = Math.floor(Math.random() * 8);
		arr[index].on = 1;
	}



});