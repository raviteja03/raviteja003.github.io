function star(w,h) {
  this.x = random(-w, w);
  this.y = random(-h, h);
  this.z = random(w);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1 ) {
      this.z = w;
      this.x = random(-w, w);
      this.y = random(-h, h);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255,255,255,100);
    noStroke();

    var sx = map(this.x / this.z, 0,1, 0, w);
    var sy = map(this.y / this.z, 0,1, 0, h);
    // var a = ['#' , '%' , '&' , '$' ,'!' ,'@' , '?' , ':' , ';' ];
    var r = map(this.z, 0, w, 16, 0);

    // text(a[floor(random(0,a.lenth1))] , sx , sy , r);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0,1, 0, w);
    var py = map(this.y / this.pz, 0,1, 0, h);

    this.pz = this.z;

    stroke(255);
    line(px/5, py/5, sx/5, sy/5);

  }
}
