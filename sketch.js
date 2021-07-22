const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var division=[];
var plinko=[];
var particle=[];
var score = 0;
var particle;
var turn = 0;
var gameState = "start";
var count;
//var backImage, backgr;

var divisionHeight = 300;


//function preload() {
 //backImage = loadImage("backgr.png");
  
//}

function setup() {
  createCanvas(800,750);
 // backgr = createSprite(0, 0, 800, 600);
// backgr.addImage(backImage);

  engine = Engine.create();
    world = engine.world;


    

    ground = new Ground(600,height,1200,20);
    
   for (var k = 0; k <= width; k=k+80) {
     division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
     
   }

  for(var j=75; j <= width; j=j+50){
    plinko.push(new Plinko(j , 75));
  }

  for(var j=50; j <= width-10; j=j+50){
    plinko.push(new Plinko(j , 175));
  }

  for(var j=75; j <= width; j=j+50){
    plinko.push(new Plinko(j , 275));
  }

  for(var j=50; j <= width-10; j=j+50){
    plinko.push(new Plinko(j , 375));
  }



}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  noStroke();
  textSize(35);
  fill("white");
  text("SCORE: " + score, 600, 45);

  textSize(25);
  fill("yellow");
  text("500" , 20, 450);

  textSize(25);
  fill("yellow");
  text("500" , 100, 450);

  textSize(25);
  fill("yellow");
  text("500" , 180, 450);

  textSize(25);
  fill("yellow");
  text("500" , 260, 450);

  textSize(25);
  fill("yellow");
  text("100" , 340, 450);

  textSize(25);
  fill("yellow");
  text("100" , 420, 450);

  textSize(25);
  fill("yellow");
  text("100" , 500, 450);

  textSize(25);
  fill("yellow");
  text("200" , 580, 450);

  textSize(25);
  fill("yellow");
  text("200" , 660, 450);

  textSize(25);
  fill("yellow");
  text("200" , 740, 450);

  for ( var k = 0; k < division.length; k++) {
    division[k].display();
  }

  for ( var j = 0; j < plinko.length; j++) {
    plinko[j].display();
  }

  if (frameCount%60===0) {
    particle.push(new Particle(random(width/2-350, width/2+350),10, 10));
  }

  for ( var j = 0; j < particle.length; j++) {
    particle[j].display();
  }


  if(particle!=null)
{
  particle.display();

  if (particle.body.position.y > 450)
  {
    if(particle.body.postion.x < 300)
    {
      score=score+500;
      particle = null;
      if (count >= 5) gameState = "end"
    }
  }
}


if(particle!=null)
{
  particle.display();

  if (particle.body.position.y > 450)
  {
    if(particle.body.postion.x < 500)
    {
      score=score+500;
      particle = null;
      if (count >= 5) gameState = "end"
    }
  }
}

if(particle!=null)
{
  particle.display();

  if (particle.body.position.y > 450)
  {
    if(particle.body.postion.x < 750)
    {
      score=score+500;
      particle = null;
      if (count >= 5) gameState = "end"
    }
  }
}

  drawSprites();
}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle = new Particle (mouseX, 10 ,10 ,10);
  }
}

