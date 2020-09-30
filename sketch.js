
var still;
var moving;


function setup() {
  createCanvas(800,800);
  moving = createSprite(400,200,50,50);
  moving.shapeColor="red";
  still = createSprite(200,200,50,100);
  still.shapeColor="red";
  moving.debug=true;
  still.debug=true;
  rect2 = createSprite(400,400,50,100);
  rect3 = createSprite(600,600,100,50);
  rect4 = createSprite(600,200,80,80);
  rect3.velocityY = -4; 
  rect4.velocityY = 4;
}

function draw() {
  background(255,255,255); 
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(isTouching(moving,rect2)){
    moving. shapeColor = "green";
    rect2.shapeColor = "green";
  }
  else{
    moving. shapeColor = "blue";
  rect2.shapeColor = "blue";
  }

  bounceOff(rect3,rect4)


drawSprites();
}

