//namespacing == renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic:true
  }

  ground = Bodies.rectangle(400,390,800,20,ground_options);
  World.add(world, ground);
  console.log(ground.position.x);
  console.log(ground.position.y);


  var ball_options={
    restitution:1.0
  }

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  drawSprites();
}