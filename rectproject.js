
var still;
var moving;


function setup() {
  createCanvas(800,800);
  moving = createSprite(600,200,50,50);
  moving.shapeColor="red";
  still = createSprite(600,400,50,100);
  still.shapeColor="red";
  moving.debug=true;
  still.debug=true;
  moving.velocityY=4;
  still.velocityY=-4;
}

function draw() {
  background(255,255,255); 
  
if(moving.x-still.x<moving.width/2 + still.width/2 
  && still.x-moving.x<moving.width/2 + still.width/2 
){
    moving.velocityX = moving.velocityX*(-1);
    still.velocityX = still.velocityX*(-1);
}

if(still.y-moving.y<moving.height/2 + still.height/2 
    && moving.y-still.y<moving.height/2 + still.height/2 ){
        moving.velocityY = moving.velocityY*(-1);
        still.velocityY = still.velocityY*(-1);
    }
drawSprites();
}