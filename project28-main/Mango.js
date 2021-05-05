class Mango {
constructor(x,y,radius) {
var options = {
isStatic:true,
restitution:0,
friction:1

}
this.x=x;
this.y=y;
this.radius=radius;

this.image=loadImage("images/mango.png");
this.body=Bodies.circle(this.x,this.y,this.radius,options);
World.add(world,this.body)
}
display() {

image(this.image,this.x,this.y,this.radius,this.radius);


}

}