const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand;
var box1,box2,box3,box4,box5,box6;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height-35,300,10)
  box1 = new Box(700,365,70,70);
  box2 = new Box(650,365,70,70);
  box3 = new Box(600,365,70,70);
  box4 = new Box(650,335,70,70);
  box5 = new Box(630,335,70,70);
  box6 = new Box(640,305,70,70);
  //slingshot = new SlingShot(ball.body,{x:200, y:50});

}

function draw() {
  background(15,255,255); 
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  //slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}