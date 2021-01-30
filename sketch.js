var canvas,box1;
var music,box2,box3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1=createSprite(500,600,300,25);
    box1.shapeColor= rgb(255,169,0)
    box2=createSprite(100,600,300,25);
    box2.shapeColor= rgb(101,255,159);
    //create 4 different surfaces

    //create box sprite and give velocity
    box3=createSprite(random(20,750),100,10,10);
    box3.shapeColor= rgb(0,0,0);
    box3.velocityY=10;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
   
    //create edgeSprite
    edge=createSprite(0,0,10000,1)
    if (box3.x - edge.x < edge.width/2 + box3.width/2
        && edge.x - box3.x < edge.width/2 + box3.width/2) {
      box3.velocityX = box3.velocityX * (-1);
      edge.velocityX = edge.velocityX * (-1);
      

    }
    if (box3.y - edge.y < edge.height/2 + box3.height/2
      && edge.y - box3.y < edge.height/2 + box3.height/2){
      box3.velocityY = box3.velocityY * (-1);
      edge.velocityY = edge.velocityY * (-1);
    }




    //add condition to check if box touching surface and make it box
    if (box3.x - box2.x < box2.width/2 + box3.width/2
        && box2.x - box3.x < box2.width/2 + box3.width/2) {
      box3.velocityX = box3.velocityX * (-1);
      box2.velocityX = box2.velocityX * (-1);
    }
    if (box3.y - box2.y < box2.height/2 + box3.height/2
      && box2.y - box3.y < box2.height/2 + box3.height/2){
      box3.velocityY = box3.velocityY * (-1);
      box2.velocityY = box2.velocityY * (-1);
    }
    if (box3.x - box1.x < box1.width/2 + box3.width/2
        && box1.x - box3.x < box1.width/2 + box3.width/2) {
      box3.velocityX = box3.velocityX * (-1);
      box1.velocityX = box1.velocityX * (-1);
    }
    if (box3.y - box1.y < box1.height/2 + box3.height/2
      && box1.y - box3.y < box1.height/2 + box3.height/2){
      box3.velocityY = box3.velocityY * (1);
      box1.velocityY = box1.velocityY * (-1);
    }
   
    if(box1.isTouching(box3)){
        box3.shapeColor=rgb(255,169,0);
        box3.velocityX=2.5;
        music.play();
    } 
    if(box2.isTouching(box3)){
        box3.shapeColor=rgb(101,255,159);
        box3.velocityX=2.5;
        music.play();
    } 
}
