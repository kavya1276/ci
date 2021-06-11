
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world;
var paper;
var bg;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(10,100);
	Engine.run(engine);
  bg=loadImage("ha.jpg");
}

function draw() {
  rectMode(CENTER);
  background(bg);

  groundObject.display();
  dustbinObj.display();
  paper.display();

  stroke("yellow");
  fill("green");
  textSize(40);
  text("Press UP Arrow Key To Help Clean India",300,150);

}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-100});
		stroke("yellow");

	}
}
