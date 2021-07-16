const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var circle1, box;
function setup() {
  canvas= createCanvas(windowWidth,windowHeight);
  box1 = createSprite(100, 200, 50, 50);
  box2 = createSprite(100, 200, 50, 50);
  box3 = createSprite(100, 200, 50, 50);
  box1.shapeColor="yellow";
  box2.shapeColor="yellow";
  box3.shapeColor="yellow";

    engine = Engine.create();
    world = engine.world;

    circle1 = new Circle(random(400,500), random(10,200), 15);
    circle2 = new Circle(random(400,500),random(10,200), 15);
    circle3 = new Circle(random(400,500),random(10,200), 15);

    ground=Bodies.rectangle(width/2,height-20,width,20,{isStatic:true})
    World.add(world,ground);
}

function draw() {
  background("black");  
  
 Engine.update(engine);
 box1.x=circle2.body.position.x;
 box1.y=circle2.body.position.y;

 box2.x=circle1.body.position.x;
 box2.y=circle1.body.position.y;

 box3.x=circle3.body.position.x;
 box3.y=circle3.body.position.y;
  drawSprites();

  if(isTouching(box1,box2)){
    box1.shapeColor="blue";
    box2.shapeColor="blue"
  }
else if(isTouching(box1,box3)){
    box1.shapeColor="pink";
    box3.shapeColor="pink"
  }

else if(isTouching(box2,box3)){
    box2.shapeColor="green";
    box3.shapeColor="green"
  }
 else
 {box1.shapeColor="yellow";
 box2.shapeColor="yellow"
 box3.shapeColor="yellow"}
   
    circle1.display();
    circle2.display();
    circle3.display();
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,width,20)
 
}