var car,wall;
var speed;
var weight;




function setup() {
  createCanvas(800,400);
  
 wall =createSprite(700, 400, 30, 800);
  car=createSprite(100, 200, 25, 25);
  car.shapeColor="black";
  wall.shapeColor="black";
 speed =random(10,100);  
 weight=random(400,1500) ;
}

function draw() {
    background(255,255,255); 
      car.velocityX=speed;
    if (wall.x-car.x<wall.width/2+car.width/2){
        car.velocityX=0;
        var deformation=0.5*weight*speed*speed/22509;
      if (deformation>180){  
        car.shapeColor=color(255,0,0);
      }

      if (deformation<180 && (deformation>100)){
          car.shapeColor=color(230,230,0);
      } 
        
      
      if (deformation<100){
          car.shapeColor=color(0,255,0); 
      }
 }
    drawSprites();
}
