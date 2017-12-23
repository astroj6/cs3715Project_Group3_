var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/uni.html"] = requestHandlers.uni2;
handle["/university.html"] = requestHandlers.start;
handle["/uni_laptop.css"] = requestHandlers.uni;
handle["/course1.html"] = requestHandlers.course1;
handle["/course2.html"] = requestHandlers.course2;
handle["/course3.html"] = requestHandlers.course3;
handle["/catalogue1.css"] = requestHandlers.catalogue1;
handle["/catalogue2.css"] = requestHandlers.catalogue2;
handle["/catalogue3.css"] = requestHandlers.catalogue3;
handle["/studentPage.html"] = requestHandlers.studentpage;
handle["/PreviousCourse.html"] = requestHandlers.precourse;
handle["/login.html"] = requestHandlers.login;
handle["/directions1.html"] = requestHandlers.directions1;


handle["/studentPage1.html"] = requestHandlers.studentpage1;
handle["/studentPage2.html"] = requestHandlers.studentpage2;
handle["/studentPage3.html"] = requestHandlers.studentpage3;
handle["/studentPage4.html"] = requestHandlers.studentpage4;
handle["/studentPage5.html"] = requestHandlers.studentpage5;
handle["/studentPage6.html"] = requestHandlers.studentpage6;
handle["/studentPage7.html"] = requestHandlers.studentpage7;
handle["/studentPage8.html"] = requestHandlers.studentpage8;
handle["/studentPage9.html"] = requestHandlers.studentpage9;
handle["/studentPage10.html"] = requestHandlers.studentpage10;



handle["/stjohnst.jpg"] = requestHandlers.stjohnst;
handle["/direction.jpg"] = requestHandlers.direction;
handle["/cam1.jpg"] = requestHandlers.cam1;
handle["/grenfellthumb.jpg"] = requestHandlers.grenfellthumb;
handle["/artemisthumb.jpg"] = requestHandlers.artemisthumb;
handle["/grenfellthumb.jpg"] = requestHandlers.campus2;
handle["/campus3.png"] = requestHandlers.campus3;


server.start(router.route, handle);
