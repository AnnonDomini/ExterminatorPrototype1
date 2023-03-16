var player;
function preload(){
playerMoving = loadAnimation("walk_knight_1.png","walk_knight_2.png","walk_knight_3.png","walk_knight_4.png","walk_knight_5.png","walk_knight_6.png","walk_knight_7.png","walk_knight_8.png"
,"walk_knight_9.png","walk_knight_10.png","walk_knight_11.png","walk_knight_12.png")

}
function setup(){
  createCanvas(windowWidth,windowHeight)
  player = createSprite(width/2,height/2,100,100)
  player.addAnimation("moving",playerMoving)
  player.scale=2
}
function draw(){
background("red")
drawSprites()
}