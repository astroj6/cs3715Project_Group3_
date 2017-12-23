var querystring = require("querystring");
	fs = require("fs");

function start(response, request) {
	console.log("Request handler 'start' was called.");
	
	fs.readFile('university.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				if (request.url === 'course1.html') {
					course1(response, request);
				}
				else if (request.url === 'course2.html') {
					course2(response, request);
				}
				else if (request.url === 'course3.html') {
					course3(response, request);
				}
				else if (request.url === 'university.html') {
					main(response, request);
				}
				else if (request.url === 'uni.html') {
					uni2(response, request);
				}
				else if (request.url === 'stjohnst.jpg') {
					stjohnst(response, request);
				}
				else if (request.url === 'cam1.jpg') {
					cam1(response, request);
				}
				else if (request.url === 'grenfellthumb.jpg') {
					grenfellthumb(response, request);
				}
				else if (request.url === 'artemisthumb.jpg') {
					artemisthumb(response, request);
				}
				else if (request.url === 'studentPage.html') {
					studentpage(response, request);
				}
				else if (request.url === 'PreviousCourse.html') {
					precourse(response, request);
				}
				else if (request.url === 'directions1.html') {
					directions1(response, request);
				}			
                response.end();
    });
}

function main (response, request) {
	console.log("Request handler 'main' was called.");
	fs.readFile('university.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				if (request.url === 'course1.html') {
					course1(response, request);
				}
				else if (request.url === 'course2.html') {
					course2(response, request);
				}
				else if (request.url === 'course3.html') {
					course3(response, request);
				}
				else if (request.url === 'university.html') {
					main(response, request);
				}
                response.end();
    });
}
//campus html pages
function course1 (response, request) {
	console.log("Request handler 'course1' was called.");
	fs.readFile('course1.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				if (request.url === 'catalogue1.css') {
					catalogue1(response, request);
				}
                response.end();
    });
}

function course2 (response, request) {
	console.log("Request handler 'course2' was called.");
	fs.readFile('course2.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				if (request.url === 'campus2.png') {
					campus2(response, request);
				}
                response.end();
    });
}

function course3 (response, request) {
	console.log("Request handler 'course3' was called.");
	fs.readFile('course3.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				if (request.url === 'campus3.png') {
					campus3(response, request);
				}
                response.end();
    });
}

function studentpage (response, request) {
	console.log("Request handler 'studentpage' was called.");
	fs.readFile('studentPage.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
			if (request.url === 'login.html') {
				login(response, request);
			}
			else if (request.url === 'signup.html') {
				signup(response, request);
			}	
                response.end();
    });
}

function precourse (response, request) {
	console.log("Request handler 'precourse' was called.");
	fs.readFile('PreviousCourse.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}

function directions1 (response, request) {
	console.log("Request handler 'precourse' was called.");
	fs.readFile('directions1.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}



function login (response, request) {
	console.log("Request handler 'login' was called.");
	fs.readFile('login.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
		if (request.url === 'signup.html') {
			signup(response, request);
		}
		else if (request.url === 'studentPage1.html') {
			studentpage1(response, request);
		}
		else if (request.url === 'studentPage2.html') {
			studentpage2(response, request);
		}
		else if (request.url === 'studentPage3.html') {
			studentpage3(response, request);
		}
		else if (request.url === 'studentPage4.html') {
			studentpage4(response, request);
		}
		else if (request.url === 'studentPage5.html') {
			studentpage5(response, request);
		}
		else if (request.url === 'studentPage6.html') {
			studentpage6(response, request);
		}
		else if (request.url === 'studentPage7.html') {
			studentpage7(response, request);
		}
		else if (request.url === 'studentPage8.html') {
			studentpage8(response, request);
		}
		else if (request.url === 'studentPage9.html') {
			studentpage9(response, request);
		}	
		else if (request.url === 'studentPage10.html') {
			studentpage10(response, request);
		}
                response.end();
    });
}

function studentpage1 (response, request) {
	console.log("Request handler 'studentPage1' was called.");
	fs.readFile('studentPage1.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}

function studentpage2 (response, request) {
	console.log("Request handler 'studentPage2' was called.");
	fs.readFile('studentPage2.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}

function studentpage3 (response, request) {
	console.log("Request handler 'studentPage3' was called.");
	fs.readFile('studentPage3.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}


function studentpage4 (response, request) {
	console.log("Request handler 'studentPage4' was called.");
	fs.readFile('studentPage4.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}


function studentpage5 (response, request) {
	console.log("Request handler 'studentPage5' was called.");
	fs.readFile('studentPage5.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}


function studentpage6 (response, request) {
	console.log("Request handler 'studentPage6' was called.");
	fs.readFile('studentPage6.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}


function studentpage7 (response, request) {
	console.log("Request handler 'studentPage7' was called.");
	fs.readFile('studentPage7.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}

function studentpage8 (response, request) {
	console.log("Request handler 'studentPage8' was called.");
	fs.readFile('studentPage8.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}

function studentpage9 (response, request) {
	console.log("Request handler 'studentPage9' was called.");
	fs.readFile('studentPage9.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}

function studentpage10 (response, request) {
	console.log("Request handler 'studentPage10' was called.");
	fs.readFile('studentPage10.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
				
                response.end();
    });
}

//university image link
function uni2 (response, request) {
	console.log("Request handler 'uni2' was called.");
	fs.readFile('uni.html',function(err,html){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(html);
                response.end();
    });
}

//university css
function uni (response, request) {
	console.log("Request handler 'uni' was called.");
	fs.readFile('uni_laptop.css',function(err,css){
                response.writeHead(200,{'Content-Type': 'text/css'});
                response.write(css);
                response.end();
    });
}
//campus css
function catalogue1 (response, request) {
	console.log("Request handler 'catalogue1' was called.");
	fs.readFile('catalogue1.css',function(err,css){
                response.writeHead(200,{'Content-Type': 'text/css'});
                response.write(css);
                response.end();
    });
}

function catalogue2 (response, request) {
	console.log("Request handler 'catalogue2' was called.");
	fs.readFile('catalogue2.css',function(err,css){
                response.writeHead(200,{'Content-Type': 'text/css'});
                response.write(css);
                response.end();
    });
}

function catalogue3 (response, request) {
	console.log("Request handler 'catalogue3' was called.");
	fs.readFile('catalogue3.css',function(err,css){
                response.writeHead(200,{'Content-Type': 'text/css'});
                response.write(css);
                response.end();
    });
}
//university images
function stjohnst(response, request) {
	console.log("Request handler 'stjohnst' was called.");
	fs.readFile('stjohnst.jpg',"binary", function(err,file){
                response.writeHead(200, {"Content-Type": "image/jpg"});
				response.write(file, "binary");
				response.end();
    });
}

function cam1(response, request) {
	console.log("Request handler 'cam1' was called.");
	fs.readFile('cam1.jpg',"binary", function(err,file){
                response.writeHead(200, {"Content-Type": "image/jpg"});
				response.write(file, "binary");
				response.end();
    });
}

function grenfellthumb(response, request) {
	console.log("Request handler 'grenfellthumb' was called.");
	fs.readFile('grenfellthumb.jpg',"binary", function(err,file){
                response.writeHead(200, {"Content-Type": "image/jpg"});
				response.write(file, "binary");
				response.end();
    });
}

function artemisthumb(response, request) {
	console.log("Request handler 'artemisthumb' was called.");
	fs.readFile('artemisthumb.jpg',"binary", function(err,file){
                response.writeHead(200, {"Content-Type": "image/jpg"});
				response.write(file, "binary");
				response.end();
    });
}
// campus images
function campus2(response, request) {
	console.log("Request handler 'campus2' was called.");
	fs.readFile('grenfellthumb.jpg',"binary", function(err,file){
                response.writeHead(200, {"Content-Type": "image/jpg"});
				response.write(file, "binary");
				response.end();
    });
}

function direction(response, request) {
	console.log("Request handler 'direction' was called.");
	fs.readFile('direction.jpg',"binary", function(err,file){
                response.writeHead(200, {"Content-Type": "image/jpg"});
				response.write(file, "binary");
				response.end();
    });
}




exports.start = start;
exports.main = main;
exports.uni2 = uni2;
//university css
exports.uni = uni;
//campus pages
exports.course1 = course1;
exports.course2 = course2;
exports.course3 = course3;
exports.studentpage = studentpage;
exports.studentpage1 = studentpage1;
exports.studentpage2 = studentpage2;
exports.studentpage3 = studentpage3;
exports.studentpage4 = studentpage4;
exports.studentpage5 = studentpage5;
exports.studentpage6 = studentpage6;
exports.studentpage7 = studentpage7;
exports.studentpage8 = studentpage8;
exports.studentpage9 = studentpage9;
exports.studentpage10 = studentpage10;
exports.precourse = precourse;
exports.login = login;
exports.directions1 = directions1;
//university images
exports.stjohnst = stjohnst;
exports.direction = direction;
exports.cam1 = cam1;
exports.grenfellthumb = grenfellthumb;
exports.artemisthumb = artemisthumb;
//campus css 
exports.catalogue1 = catalogue1;
exports.catalogue2 = catalogue2;
exports.catalogue3 = catalogue3;
//campus images
exports.campus2 = campus2;

