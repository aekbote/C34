const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var apple;
var angryB, normalB, happyB;
var landscape;
var tree;

function preload(){

  landscape = loadImage("landscape.jpg");
  tree = loadImage("tree.png");

  angryB = loadImage("angry boy.png");
  normalB = loadImage("normal boy.png");
  happyB = loadImage("happy boy.png");
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  tree = createSprite(200,200,20,20);
  tree.scale = 0.5;


 
  apple1 = new Apple(200,10,10);
  apple2 = new Apple(30,40,10);
  apple3 = new Apple(150,100,10);
  apple4 = new Apple(30,180,10);

  
}


function draw(){

  background(51);
  Engine.update(engine);

  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  

  drawSprites();
  
}

