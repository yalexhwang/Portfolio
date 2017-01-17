alxApp.controller('skillsCtrl', function($scope) {
	$scope.message = 'Ask me about my skills!';

	//skill pieces
	function SkillObj(name, cssClass) {
		this.name = name;
		this.class = cssClass;
	}
	var obj0 = new SkillObj('HTML', 'skill lng pulse');
	var obj1 = new SkillObj('CSS', 'skill lng pulse', 'Of course the basics, I know my way around HTML, CSS, and JavaScript.');
	var obj2 = new SkillObj('COMPASS', 'skill frm2 shakeL');
	var obj3 = new SkillObj('Sass', 'skill frm2 shakeR');
	var obj4 = new SkillObj('Bootstrap', 'skill frm2 bounce shakeL');
	var obj5 = new SkillObj('JavaScript', 'skill lng pulse');
	var obj6 = new SkillObj('AngularJS', 'skill frm floating');
	var obj7 = new SkillObj('Node.js', 'skill frm floating');
	var obj8 = new SkillObj('Express', 'skill frm floating');
	var obj9 = new SkillObj('MongoDB', 'skill db tossing');
	var obj10 = new SkillObj('Python', 'skill lng pulse');
	var obj11 = new SkillObj('Flask', 'skill frm floating');
	var obj12 = new SkillObj('MySQL', 'skill db tossing');
	var obj13 = new SkillObj('Git', 'skill other shakeL');
	var obj14 = new SkillObj('RESTful API', 'skill other shakeR');
	var obj15 = new SkillObj('Agile Scrum', 'skill misc shakeL');
	var obj16 = new SkillObj('Project Management', 'skill misc shakeR');
	$scope.skillsArr = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16];

	//Answers
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
	$scope.msg12 = {on: 0};
	var msgArr = [$scope.msg1, $scope.msg2, $scope.msg3, $scope.msg4, $scope.msg5, $scope.msg6, $scope.msg7, $scope.msg8, $scope.msg9, $scope.msg10, $scope.msg11, $scope.msg12];

	//Answer Actions
	$scope.answerAction1 = {on: 0};
	$scope.answerAction2 = {on: 0};
	$scope.answerAction3 = {on: 0};
	$scope.answerAction4 = {on: 0};
	$scope.answerAction5 = {on: 0};
	$scope.answerAction6 = {on: 0};
	$scope.answerAction7 = {on: 0};
	$scope.answerAction8 = {on: 0};
	var actionArr = [$scope.answerAction1, $scope.answerAction2, $scope.answerAction3, $scope.answerAction4, $scope.answerAction5, $scope.answerAction6, $scope.answerAction7, $scope.answerAction8];
	$scope.answer = function(index) {
		$scope.msgOn = 1;
		if ((index == 0) || (index == 1) || (index == 5)) {
			initialize(msgArr);
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
			initialize(msgArr);
			$scope.msg2.on = 1;
			if (index == 2) {
				$scope.compass = 1;
				$scope.sass = 0;
			} else if (index == 3) {
				$scope.compass = 0;
				$scope.sass = 1;
			}
		} else if (index == 4) {
			initialize(msgArr);
			$scope.msg3.on = 1;
		} else if (index == 6) {
			initialize(msgArr);
			$scope.msg4.on = 1;
		} else if (index == 7) {
			initialize(msgArr);
			$scope.msg5.on = 1;
		} else if (index == 8) {
			initialize(msgArr);
			$scope.msg6.on = 1;
		} else if ((index == 9) || (index == 12)) {
			initialize(msgArr);
			$scope.msg7.on = 1;
			if (index == 9) {
				$scope.mongo = 1;
				$scope.sql = 0;
			} else if (index == 12) {
				$scope.mongo = 0;
				$scope.sql = 1;
			}
		} else if ((index == 10) || (index == 11)) {
			initialize(msgArr);
			$scope.msg8.on = 1;
			if (index == 10) {
				$scope.python = 1;
				$scope.flask = 0;
			} else if (index == 11) {
				$scope.python = 0;
				$scope.flask = 1;
			}
		} else if (index == 13) {
			initialize(msgArr);
			$scope.msg9.on = 1;
		} else if (index == 14) {
			initialize(msgArr);
			$scope.msg10.on = 1;
		} else if (index == 15) {
			initialize(msgArr);
			$scope.msg11.on = 1;
		} else if (index == 16) {
			initialize(msgArr);
			$scope.msg12.on = 1;
		}
		initialize(actionArr);
		randomAction(actionArr);
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