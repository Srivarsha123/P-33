  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle
var turn = 0;
var yellowline;

var gameState = "play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

//(400, 480, 800, 10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {
  background("black");
  textSize(20)
  if(gameState === "play"){
  text("Score : "+score,20,30);
  }
  text("100", 20, 520)
  text("500", 100, 520)
  text("250", 180, 520)
  text("750", 260, 520)
  text("  0", 340, 520)
  text("1000", 420, 520)
  text("750", 500, 520)
  text("250", 580, 520)
  text("500", 660, 520)
  text("100", 740, 520)
 
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }

  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles.body.position.y>760){
     if (particles.body.position.x<300){
       score = score+500;
       if(turn>=5){
         gameState = "end"
       }
     }
   }
 
}
function mousePressed(){
  if(gameState === "play"){
     particles.push(new Particle (mouseX, mouseY, 10));
     turn = turn+1  
  }
}

