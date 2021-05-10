const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("bg.jpg");
  trainSound = loadSound("train.mp3");
  crashSound = loadSound("train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggie1 = new Boggie(50,170,50,50);
  boggie2 = new Boggie(150,170,50,50);
  boggie3 = new Boggie(250,170,50,50);
  boggie4 = new Boggie(350,170,50,50);
  boggie5 = new Boggie(450,170,50,50);
  boggie6 = new Boggie(550,170,50,50);
  
  



}

function draw() {
  background(bg);  
  Engine.update(myEngine);
    boggie1.show();
    boggie2.show();
    boggie3.show();
    boggie4.show();
    boggie5.show();
    boggie6.show();

 
  }

  
