
function Project(x,y){
  this.x = x;
  this.y = y;
};

Project.prototype.show = function(){
  fill(random(0,255),random(0,255),random(0,250),100);
  ellipse(this.x,this.y,300,500);
}

Project.prototype.move = function(size){
  var mx = random(0,20);
  var my = random(0,20);
  if(this.x<windowWidth)
  this.x = this.x + mx;
  if(this.y<3*windowHeight)
  this.y = this.y + my;

}
