
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world
var roof,rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof=new Roof(520,40,500,40);

  bobObject1=new Bob(370,400,70,70);
  bobObject2=new Bob(450,400,70,70);
  bobObject3=new Bob(530,400,70,70);
  bobObject4=new Bob(610,400,70,70);
  bobObject5=new Bob(690,400,70,70);

  rope1=new Rope(bobObject1.body,roof.body,-150,0);
  rope2=new Rope(bobObject2.body,roof.body,-80,0);
  rope3=new Rope(bobObject3.body,roof.body,-10,0);
  rope4=new Rope(bobObject4.body,roof.body,60,0);
  rope5=new Rope(bobObject5.body,roof.body,130,0);
  
 
  //ground=new Ground(400,680,800,20)

	//Engine.run(engine);
  
}


function draw() {
  

  

  rectMode(CENTER);
  background(220); 
  Engine.update(engine);
 
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
 drawSprites();
 
} 

function keyPressed() {
  if(keyCode===UP_ARROW) {
    console.log("up")
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-450,y:500});
  //  Matter.Body.applyForce(bobObject1.body,{x:20,y:20},{x:-10,y:10});
    console.log(bobObject1.body.position)
  }
}


