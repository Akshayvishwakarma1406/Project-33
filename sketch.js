const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score,particle,turn,ground;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  score = 0;
  turn = 5;

  ground = new Ground(width/2,height,width,20);
  groundL = new Ground(0,height/2,10,height);
	groundR = new Ground(800,height/2,10,height);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

	for(var j = 40;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,57));
	}

	for(var j = 15;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,125));
	}

	for(var j = 40;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,197));
	}

	for(var j = 15;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,265));
	}

	for(var j = 40;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,337));
	}

	for(var j = 15;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,405));
	}

}

function draw() {
  background("black");
  stroke ("blue");
  fill ("blue");
  textSize(20)
  text("SCORE : " + score,0,30);
  Engine.update(engine);
  
  for(var k = 0; k < divisions.length; k++ ){
    divisions[k].display();
  }
  
  for(var j = 0; j < plinkos.length; j++ ){
    plinkos[j].display();
  }  
    
  for(var j = 0; j < particles.length; j++ ){
    particles[j].display();
  }
  
  if(turn !== 0){

  if(frameCount % 90 === 0){
    particles.push(new Particle(mouseX,0));
    score++;
    turn = turn - 1 ;
  }

}else{
  textSize(29);
  text("GameOver");
}

    // if(turn === 0){
    //   rect (200,200,200,200);
    // }
  
    ground.display();
  }

  function mousePressed(){
    score++
    particles = (new Particle((random(0,width),mouseY)));
    console.log(particles);
    particles.display();
  }