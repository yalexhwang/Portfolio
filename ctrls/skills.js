alxApp.controller('skillsCtrl', function($scope) {
	$scope.message = 'Ask me about my skills!';

	function SkillObj(name, cssClass, msg) {
		this.name = name;
		this.class = cssClass;
		this.message = msg;
	}

	var obj0 = new SkillObj('HTML', 'skill lng pulse', 'Of course the basics, I know my way around HTML, CSS, and JavaScript.');
	var obj1 = new SkillObj('CSS', 'skill lng pulse', 'Of course the basics, I know my way around HTML, CSS, and JavaScript.');
	var obj2 = new SkillObj('COMPASS', 'skill frm2 pullDown shakeR', 'When working with CSS, I prefer to use Sass based Compass because it is easier to organize and maintin stylesheets with all the perks Sass brings, like nesting, variables, mixins and selector inheritence. It saves me time (and headache).');
	var obj3 = new SkillObj('Sass', 'skill frm2 pullUp shakeR', 'When working with CSS, I prefer to use Sass based Compass because it is easier to organize and maintin stylesheets with all the perks Sass brings, like nesting, variables, mixins and selector inheritence. It saves me time (and headache).');
	var obj4 = new SkillObj('Bootstrap', 'skill frm2 bounce shakeR', 'I also use Bootstrap often, to a varying degree. Just to take advantage of its default CSS settings and compoments, so I can avoid having to look at HTML elements that are so basic. Or go all out and make use of its custom jQuery plugins to have some live action going on. Although Bootstrap\'s reponsive utilities are useful, once I learned about Flexbox, CSS3\'s new layout mode, it has become my go-to method of creating a fully responsive layout.');
	var obj5 = new SkillObj('JavaScript', 'skill lng pulse', 'Of course the basics, I know my way around HTML, CSS, and JavaScript.');
	var obj6 = new SkillObj('AngularJS', 'skill frm floating', 'I am a fan of AngularJS. When I first learned to use Angular, the difference was so drastic that it felt like when you go from the Stone Age to the Iron Age in Age of Empires 2(!) I have built a few single page web applications with Angular, including this portfolio. One thing with Angular that I did not quite like was that it is not an ideal match with Bootstrap, which uses jQuery plugins. But there is a nice alternative, Angular UI. It includes UI Bootsrap as well as UI Router, which comes handy when you want to have more than one view and even nest them as you wish.');
	var obj7 = new SkillObj('Node.js', 'skill frm floating', 'Node.js- is awesome just by the fact that it enables server-side JavaScript. Because Node.js is one of the reasons why I was able to become a full-stack web developer -- that it lowered a barrier to back-end development -- I have a sense of appreciation for Node. I am digging deep into it to truly appreciate and fully explore what it has to offer.');
	var obj8 = new SkillObj('Express', 'skill frm floating', 'Like Flask with Python, Express and Node.js is a lovely pair. Express Generator sets you a skeleton for an web application in seconds.');
	var obj9 = new SkillObj('MongoDB', 'skill db tossing', 'I like using MongoDB, simply because it is straightfoward to handle JSON based data with JavaScript. However, I have chosen to use MySQLwhen data in use is relational by nature - useful information can be drawn based on how different pieces of data relates to each other.');
	var obj10 = new SkillObj('Python', 'skill lng pulse', 'Python, who doesn\'t love Python? I like how simple its syntax is. Makes code aesthetically more pleasing to my eyes. I don\'t have to worry about balancing braces, although I have to be careful with indentation. Along with Flask, it is so simple to get basic set up started to build an web applicaiton. virtualenv is useful, it helps to manage separate environtments for different Python projects.');
	var obj11 = new SkillObj('Flask', 'skill frm floating', 'Python, who doesn\'t love Python? I like how simple its syntax is. Makes code aesthetically more pleasing to my eyes. I don\'t have to worry about balancing braces, although I have to be careful with indentation. Along with Flask, it is so simple to get basic set up started to build an web applicaiton. virtualenv is useful, it helps to manage separate environtments for different Python projects.');
	var obj12 = new SkillObj('MySQL', 'skill db tossing', 'I like using MongoDB, simply because it is straightfoward to handle JSON based data with JavaScript. However, I have chosen to use MySQLwhen data in use is relational by nature - useful information can be drawn based on how different pieces of data relates to each other.');
	var obj13 = new SkillObj('Git', 'skill misc stretchLeft shakeL', 'It took me a while to understand the basic operations (all those times with a merge conflict...) Now I see how beneficial it is, especially thinking about all the trouble I had with document control in my previous career.');
	var obj14 = new SkillObj('Agile Scrum', 'skill misc stretchLeft shakeL', 'I am also familar with Agile scrum methodology thanks to the group projects I did at DigitalCrafts.');
	var obj15 = new SkillObj('Project Management', 'skill misc stretchLeft shakeL', 'I come from project management background, so I understand the general concepts and approaches.');

	$scope.skillsArr = [];
	$scope.skillsArr.push(obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15);
	console.log($scope.skillsArr);
	$scope.msg1 = {on: 0};
	$scope.msg2 = {on: 0};
	$scope.msg3 = {on: 0};
	$scope.msg4 = {on: 0};
	$scope.msg5 = {on: 0};
	$scope.msg6 = {on: 0};
	$scope.msg7 = {on: 0};
	$scope.msg8 = {on: 0};
	$scope.msg9 = {on: 0};
	$scope.msg10 = {on: 0};
	$scope.msg11 = {on: 0};

	var arr = [$scope.msg1, $scope.msg2, $scope.msg3, $scope.msg4, $scope.msg5, $scope.msg6, $scope.msg7, $scope.msg8, $scope.msg9, $scope.msg10, $scope.msg11];
	$scope.answer = function(index) {
		$scope.msgOn = 1;
		// $scope.message = $scope.skillsArr[index].message;
		// $scope.msg = $scope.skillsArr[index].message;
		if ((index == 0) || (index == 1) || (index == 5)) {
			initialize(arr);
			$scope.msg1.on = 1;
			if (index == 0) {
				$scope.html = 1;
				$scope.css = 0;
				$scope.js = 0;
			} else if (index == 1) {
				$scope.css = 1;
				$scope.html = 0;
				$scope.js = 0;
			} else if (index == 5) {
				$scope.js = 1;
				$scope.html = 0;
				$scope.css = 0;
			}
		} else if ((index == 2) || (index == 3)) {
			initialize(arr);
			$scope.msg2.on = 1;
			if (index == 2) {
				$scope.compass = 1;
				$scope.sass = 0;
			} else if (index == 3) {
				$scope.compass = 0;
				$scope.sass = 1;
			}
		} else if (index == 4) {
			initialize(arr);
			$scope.msg3.on = 1;
		} else if (index == 6) {
			initialize(arr);
			$scope.msg4.on = 1;
		} else if (index == 7) {
			initialize(arr);
			$scope.msg5.on = 1;
		} else if (index == 8) {
			initialize(arr);
			$scope.msg6.on = 1;
		} else if ((index == 9) || (index == 12)) {
			initialize(arr);
			$scope.msg7.on = 1;
			if (index == 9) {
				$scope.mongo = 1;
				$scope.sql = 0;
			} else if (index == 12) {
				$scope.mongo = 0;
				$scope.sql = 1;
			}
		} else if ((index == 10) || (index == 11)) {
			initialize(arr);
			$scope.msg8.on = 1;
			if (index == 10) {
				$scope.python = 1;
				$scope.flask = 0;
			} else if (index == 11) {
				$scope.python = 0;
				$scope.flask = 1;
			}
		} else if (index == 13) {
			initialize(arr);
			$scope.msg9.on = 1;
		} else if (index == 14) {
			initialize(arr);
			$scope.msg10.on = 1;
		} else if (index == 15) {
			initialize(arr);
			$scope.msg11.on = 1;
		}
	};

	function initialize(arr) {
		for (var i = 0; i < arr.length; i++) {
			arr[i].on = 0;
		}
	}
});