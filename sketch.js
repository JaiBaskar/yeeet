var block1Group;
var ground;

function setup() {
  createCanvas(800,400);
  block1Group = createGroup();
  ground = createSprite(400,380,800,20)
}

function draw() {
  background("lightblue");
  if (World.frameCount==100){
    block1();
  } 
  if(keyDown(RIGHT_ARROW)){
    block1Group.setVelocityEach(3,0);
     }
     if(keyDown(LEFT_ARROW)){
      block1Group.setVelocityEach(-3,0);
       }
       if(keyWentUp(RIGHT_ARROW)){
        block1Group.setVelocityEach(0,3);
         }
         if(keyWentUp(LEFT_ARROW)){
          block1Group.setVelocityEach(0,3);
           }
  block1Group.collide(ground);
  drawSprites();
}

function block1(){
  var pin1 = createSprite(200,0,20,20);
  var pin2 = createSprite(220,0,20,20);
  var pin3 = createSprite(240,0,20,20);
  var pin4 = createSprite(200,20,20,20);
  block1Group.add(pin1);
  block1Group.add(pin2);
  block1Group.add(pin3);
  block1Group.add(pin4);
 block1Group.setVelocityYEach(3);
 pin1.collide(pin2);
 pin2.collide(pin3);
 pin4.collide(pin1);
}