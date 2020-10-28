
var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var divisions=[];
var particles = [];
var plinkos = [];
var ground
var divisionHeight=300;

function setup() {
createCanvas(700, 950);
engine = Engine.create();
world = engine.world;

  
ground = new Ground(400,950,800,20);

for(k=0 ; k<=width; k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinkos(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
     plinkos.push(new Plinkos(j,175));
  }
   for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinkos(j,275));
  }
   for (var j = 60; j <=width-10; j=j+60) 
  {
     plinkos.push(new Plinkos(j,385));
  }
  
  
}



function draw() {
background("gold");


Engine.update(engine);

  ground.display();

 
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
}
for (var i = 0; i < plinkos.length; i++) {
 plinkos[i].display();
}
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10, width/2+10), 10,10));

}
for (var j = 0; j < particles.length; j++) {
 particles[j].display();
}

}