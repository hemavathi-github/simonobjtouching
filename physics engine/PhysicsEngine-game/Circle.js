
class Circle{
    constructor(x, y,radius){
        var options = {
            'restituition' : 0.1,
            'density' : 0.0,
            'friction' : 0.0,
        }
        this.body = Bodies.circle(x, y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
    push();
    ellipseMode(RADIUS);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipse(0, 0, this.radius);
    pop();
    }
}

