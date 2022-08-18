let spacing= 10;

function setup() {
  createCanvas(400, 400);
  //colorMode(HSB);
  background(20, 50, 65);
  frameRate(15);
}

function draw() {
  noStroke();
  

  
  // white dots
  fill(255,random(50,255))
  for (let j = 0; j < 20; j++) {
  //for (let i = 0; i < 9; i++) {
      rect(mouseX, 0+(random(50)*spacing*j),random(1,6),2);
        }
  
  
//fat lines
  fill(250, 10, 85);
  rect(mouseX, 0, 30, random(0, height/3));
  
  
  
//thinner lines
  fill(250, 10, 85,180);
  rect(mouseX, 0, 10, random(0, height*2/3));
  
  //thinnestlines
  fill(250, 10, 85,random(20,255));
 rect(mouseX, 0, 3, random(0, height*2.5/3));
}


function mousePressed(){
}
