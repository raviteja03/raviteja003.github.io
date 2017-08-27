var font, intro, points;
var x = 0 , i = 0 ;
var canvas, img1, img2;
var vehicles = [], projects = [] , ufos = [] ;
var stars = [] ;

var speed;
function preload(){
 font = loadFont('12.ttf');
 img1 = loadImage('black.jpg');
 img2 = loadImage('ufo2.png');
 // img3 = loadImage('nit.png');
}
function setup() {
  var w = windowWidth;
  var h = windowHeight;
  canvas = createCanvas(w,3*h);
  canvas.position(0,0);
  canvas.style('z-index',-1);
  // translate(width/2,height/2);
   points = font.textToPoints('RaviTeja',w/10,h/2, w*h/2900, {
    sampleFactor: 0.1
  });

  for (i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
  var ufo = select('#ufo');
  ufo.mousePressed(launch);

  //Start with 800 stars
  for (i = 0; i < 800; i++) {
    stars[i] = new star(w,h);
  }
}


function draw() {
  background(0);
  var w = windowWidth,h = windowHeight;
  // Space background for #intro
  speed = 5;
  push()
  translate( width / 2 , ( 3 * h / 2 ));
  for (i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  pop()

  image(img1,0,0,w,h);
  for (i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
  fill(51);
  var photo = ellipse(floor(w/2),floor(h+h/4.5),floor(w/9),floor(h/4));
  // img3.imageMode(centre);
  // image(img3,floor(w/2.3),floor(h+h/6),floor(w/9),floor(h/4));
// Will be added in the future for projects
  // for (i = 0; i < projects.length; i++) {
  //   var p = projects[i];
  //   p.show();
  //   p.move();
  // }

// Loop for UFOs
  for(i = 0; i < ufos.length; i++) {
    var r = ufos[i];
    r.show();
    r.update();
    if(r.dead) ufos.splice(i,1);
  }

}


function windowResized() {
  vehicles.splice(0,vehicles.length);
  // translate(0,0);
  var w = windowWidth, h = windowHeight;
  resizeCanvas(w,3*h);
  points = font.textToPoints('RaviTeja',w/8,h/1.7, w*h/2900, {
    sampleFactor: 0.1
  });
  for (i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    }
}

function launch(){
  var ufo1 = new ufo(mouseX,mouseY,img2);
  ufos.push(ufo1);
}
