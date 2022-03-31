
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
function setup()
{
  createCanvas(800,600);
engine=Engine.create()
world = engine.world;

ground=new Ground(400,595,800,10)
wall1=new Ground(550,550,10,100)
wall2=new Ground(700,550,10,100)


var ball_options = {
  restitution:0.5,
 
  
}

ball=Bodies.circle(200,200,20,ball_options)
World.add(world,ball);




rectMode(CENTER);
ellipseMode(RADIUS);

}
function keyPressed(){
if (keycode === UP_ARROW){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})

}

}

function draw() 
{
  
  background(51);

  ellipse(ball.position.x,ball.position.y,20)
  
  ground.display();
  wall1.display();
  wall2.display();
  
  Engine.update(engine)
 
}

