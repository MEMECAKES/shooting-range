var score =0;
var gun,blueBubble,redBubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var blueBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY 
    
    if (keyDown("space")) {
      shootBullet();
    }
    if (frameCount%80===0) {
      drawBlueBubble(); 
    }
    
    if (blueBubbleGroup.collide(bulletGroup)) {
      handleBubbleCollision(blueBubbleGroup);
    }
    if (blueBubbleGroup.collide(backBoard)) {
      handleBubbleCollision(blueBubbleGroup);
    }
    if (blueBubbleGroup.collide(backBoard)) {
      handleBubbleCollision(redBubbleGroup);
    }

    if (redBubbleGroup.collide(bulletGroup)) {
      handleBubbleCollision(redBubbleGroup);
    }
    if (frameCount%20===0) {
      bulletGroup.destoryEach();
      redBubbleGroup.destoryEach(); 
    }

  drawSprites();
   
  }
     
}

swal({
title: 'Game Over',
text: "Oops you lost the game....!!!",
text: "Your Score is " + score,
imageUrl:
"https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_sign_Emoji_Icon_ios1",
imageSize: "100x100",
confirmButtonText: "Thanks For Playing"
})

function shootBullet(){
  bullet= createSprite(150,height/2);
  bullet.addImage(bulletImg);
  bullet.scale=0.10
  bullet.y=gun.y-35
  bullet.x=gun.x+50
  bullet.velocityX=2;
  bullet.lifetime=325;
  bulletGroup.add(bullet);

}

function drawBlueBubble() {
  blueBubble= createSprite(800,random(20,780),40,40);
  blueBubble.addImage(blueBubbleImg);
  blueBubble.scale=0.1
  blueBubble.velocityX=-8;
  blueBubble.lifetime=400
  blueBubbleGroup.add(blueBubble);
}

function drawRedBubble() {
  redBubble= createSprite(800,random(20,780),40,40);
  redBubble.addImage(redBubbleImg);
  redBubble.scale=0.1
  redBubble.velocityX=-8;
  redBubble.lifetime=400
  redBubbleGroup.add(redBubble);
}

function handleBubbleCollision(blueBubbleGroup) {
  blast=createSprite(bullet.x+60,bullet.y,50,50);
  blast.addImage(blastImg);
  blast.scale=0.3
  bulletGroup.destroyEach();
  blueBubbleGroup.destroyEach();
}

function handleBubbleCollision(redBubbleGroup) {
  blast=createSprite(bullet.x+60,bullet.y,50,50);
  blast.addImage(blastImg);
  blast.scale=0.3
  bulletGroup.destroyEach();
  redBubbleGroup.destroyEach();
}

function handleGameOver(redBubbleGroup) {
  if (redBubbleGroup.collides(backBoard)) {
    play(swal());
  }
}

