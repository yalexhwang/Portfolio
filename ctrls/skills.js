alxApp.controller('skillsCtrl', function($scope) {

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	// canvas.width = 480;
	// canvas.height = 480;

	// Image is pre-existing constructor
	var html = new Image();
	html.src = "../compass/images/html.png";

	var css = new Image();
	css.src = "../compass/images/css.png";

	var sass = new Image();
	sass.src = "../compass/images/sass.png";

	var compass = new Image();
	compass.src = "../compass/images/compass.png";

	var boot = new Image();
	boot.src = "../compass/images/bootstrap.jpg";
	var uiBoot = new Image();
	uiBoot.src = "../compass/images/ui-bootstrap.png";
	var js = new Image();
	js.src = "../compass/images/js.png";
	var jq = new Image();
	jq.src = "../compass/images/jquery.jpeg";
	var angular = new Image();
	angular.src = "../compass/images/angular.png";
	var node = new Image();
	node.src = "../compass/images/node.jpg";
	var exp = new Image();
	exp.src = "../compass/images/express.png";
	var python = new Image();
	python.src = "../compass/images/python.png";
	var jinja = new Image();
	jinja.src = "../compass/images/jinja2.png";
	var flask = new Image();
	flask.src = "../compass/images/flask.png";
	var jade = new Image();
	jade.src = "../compass/images/jade.jpeg";
	var mysql = new Image();
	mysql.src = "../compass/images/mysql.png";
	var mongo = new Image();
	mongo.src = "../compass/images/mongo.jpeg";
	var mongoose = new Image();
	mongoose.src = "../compass/images/mongoose.png";
	var ajax = new Image();
	ajax.src = "../compass/images/ajax.jpg";
	var json = new Image();
	json.src = "../compass/images/json.jpeg";

	html.onload = function() {
		context.drawImage(html, 0, 10, 60, 55);
		context.drawImage(css, 20, 50, 50, 55);
		context.drawImage(sass, 60, 150, 65, 55);
		context.drawImage(compass, 120, 80, 140, 50);
		context.drawImage(boot, 150, 120, 70, 60);
		context.drawImage(js, 280, 120, 60, 55);
		context.drawImage(jq, 340, 80, 80, 65);
		context.drawImage(angular, 340, 200, 80, 75);
		context.drawImage(node, 300, 20, 65, 65);
		context.drawImage(exp, 90, 450, 100, 65);
		context.drawImage(python, 220, 300, 80, 80);
		context.drawImage(jinja, 180, 380, 100, 60);
		context.drawImage(flask, 50, 260, 90, 80);
		context.drawImage(jade, 5, 380, 100, 65);
		context.drawImage(mysql, 400, 270, 100, 65);
		context.drawImage(mongo, 300, 380, 80, 70);
		context.drawImage(mongoose, 330, 270, 120, 65);
		context.drawImage(ajax, 400, 380, 80, 70);
		context.drawImage(json, 210, 230, 120, 65);
	};
	

	var goblinLocation = {
		x: 0,
		y: 0
	};
});