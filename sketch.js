var balloon, balloonImage1, balloonImage2;
// create database and position variable here
var database;
var position;

function preload()  {

  bg = loadImage("cityImage.png");

  balloonImage1 = loadAnimation("hotairballoon1.png");
  balloonImage2 = loadAnimation("hotairballoon1.png","hotairballoon1.png",
  "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
  "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");

  }

//Function to set initial environment
  var positionRef = database.ref("balloon/position");
  positionRef.on("value", readPosition, showError);

function setup() {
    createCanvas(1500,700);

    database = firebase.database();

    balloon = createSprite(250,450,150,150);
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    balloon.scale = 0.5;

    textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    changePosition(-15,0)
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
  }

  drawSprites();

  fill(1);
  stroke("white");
  textSize(20);
  text("Use Arrow Keys To Move Hot Air Balloon!",40,40);

}
