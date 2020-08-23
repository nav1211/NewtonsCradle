
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, ground, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(50,600);
	bobObject2 = new Bob(250,600);
	bobObject3 = new Bob(450,600);
	bobObject4 = new Bob(650,600);
	bobObject5 = new Bob(850,600);

	ground = new Ground(450,100,800,50);

	rope1 = new Rope(bobObject1.body, ground.body, -10*2, 0);
	rope2 = new Rope(bobObject2.body, ground.body, -10*2, 0);
	rope3 = new Rope(bobObject3.body, ground.body, -10*2, 0);
	rope4 = new Rope(bobObject4.body, ground.body, -10*2, 0);
	rope5 = new Rope(bobObject5.body, ground.body, -10*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	ground.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-12,y:12})
	}
}



