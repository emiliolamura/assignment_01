function setup() {
  createCanvas(800,600);
}

function draw() {
  background(200,200,200)
  //noStroke();
  noFill();


//LINEE
  strokeWeight(20);
  stroke(0,0,0);
  line(200,100,500,400);
  line(600,100,300,400);


  //CERCHI
  strokeWeight(30);
  stroke(250,250,250);
  ellipse(width/2,height/2,400,400);
  
  strokeWeight(30);
  stroke(20,20,20,30);
  ellipse(width/2,height/2,260,260);
  
  strokeWeight(40);
  stroke(20,20,20);
  ellipse(width/2,height/2,120,120);
  
  
  strokeWeight(40);
  stroke(20,20,20);
  ellipse(width/4,height/2,30,30);
  
 strokeWeight(40);
  stroke(20,20,20);
  ellipse(width/1.33,height/2,30,30);
 
 
  //LINEE
  strokeWeight(60);
  stroke(100,5,200);
  line(300,200,500,400);
  line(500,200,300,400);
  
  //RETTANGOLO
  strokeWeight(20);
  stroke(20,20,20);
  noFill();
  rect(385,460,30,30);

}
