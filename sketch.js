var playerPaddle;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var gameState="play";
var engine, world,edges;
var ground, ball,ballImg;

function preload(){
  ballImg=loadImage("Ping Pong.png")
}

function setup() { 
  createCanvas(400, 400);
  playerPaddle=createSprite(100,350,100,25);
  ground=createSprite(200,390,200,20);
  ball=createSprite(100,50,20,20);

  edges=createEdgeSprites();
  ball.addImage(ballImg);
  ball.scale=0.1;
  ball.velocityX=0.5;
  ball.velocityY=10;
  
  var canvas = createCanvas(400,400);
    

   

   /*var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);*/

    

    //console.log(ground);

    
}

function draw() {
 background(220);
if (gameState==="play"){
  playerPaddle.shapeColor=("green");
  //playerPaddle.y=mouseY;
  playerPaddle.x=mouseX;
 
  ball.bounceOff(edges);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
    if (ball.isTouching(playerPaddle)){bounceOff(ball,playerPaddle);}
    if (ball.isTouching(ground)){
      gameState="END";
    }
    drawSprites();
}
if (gameState==="END"){
  text("Game Over",180,200)
}
}
function bounceOff(object1,object2){
        if (object1.position.x - object2.x < object2.width/2 + 10
          && object2.x - 10 < object2.width/2 + 10) {
          object1.velocityX = object1.velocityX * (-1);
          object2.velocityX = object2.velocityX * (-1);
        }
        if (object1.y - object2.y < object2.height/2 + object1.height/2
          && object2.y - object2.y < object2.height/2 + object1.height/2) {
            object1.velocityY = object1.velocityY * (-1);
            object2.velocityY = object2.velocityY * (-1);
        } 
      }
