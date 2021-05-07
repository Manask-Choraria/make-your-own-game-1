var player,ground





function setup() {
  createCanvas(600,800);
 ground = createSprite(300,400,600,800);
 ground.shapeColor = "brown";
 ground.velocityY = 2;
 player = createSprite(300, 700, 50, 50);
 
 
}

function draw() {
  background(0); 
  if(ground.y>450){
    ground.y = ground.height/2;
  }
  

  drawSprites();
  
}