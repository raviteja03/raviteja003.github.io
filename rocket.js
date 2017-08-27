function ufo(x,y,img){
  this.pos = createVector(x,y);
  this.vel = createVector(random(-7,7),random(-7,7));
  this.z = random(width);
  this.img = img;
  this.dead = 0;
  this.time = 0;
}

ufo.prototype.show = function(){
  imageMode(CENTER);
  image(this.img,this.pos.x,this.pos.y,42,20);
  this.time++;
  if(this.pos.x > windowWidth || this.pos.x < 0 || this.pos.y > 3 * windowHeight || this.pos.y < windowHeight || this.time > 120 ){
      this.dead = 1;
  }
}

ufo.prototype.update = function(){
  this.pos.add(this.vel);
}
