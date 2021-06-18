
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
obstacleGroup= new Group()
}



function setup() {
  createCanvas(670,400)
  score=0
  survivalTime=0
  
  ground = createSprite(400,390,900,20)
  
  monkey=createSprite(80,375,20,20);
  monkey.addAnimation("movine", monkey_running);
  monkey.scale=0.1
  
}


function draw() {
background("green");

  if(keyDown("space")) {
     monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  ground.velocityX = -7
  ground.x = ground.width/2;
  
  if(World.frameCount%200===0){
    fruits()
  }
 
   if(World.frameCount%300===0){
    stones()
  }
 
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0 
    monkey.velocityX=0
  }

drawSprites();
  fill("white")
  text("score: "+score,500,50)

  fill("black")
  var survivalTime=Math.round(frameCount/frameRate());
  text ("survival Time: "+survivalTime,350,50)
  
 
if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0 
    monkey.velocityX=0
  
obstacleGroup.setVelocityXEach(0)  
FoodGroup.setVelocityXEach(0)  
obstacleGroup.setLifetimeEach(-1)  
FoodGroup.setLifetimeEach(-1)  
  }
}

  function fruits(){
    banana = createSprite(670,Math.round(random(170,230)),10,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-3
    FoodGroup.add(banana)
  }

function stones(){
    obstacle=createSprite(670,380,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-2
    obstacle.scale=0.2
    obstacleGroup.add(obstacle)
}


