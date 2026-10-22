function setup() {
    createCanvas(1000, 1000);
}

function draw() {
  background(0);

  //hair
  fill('#461a0b')
   rect(175, 400, 650, 650)
  
  //face
  fill('tan')
    rect(400, 600, 200, 400)
    circle(500, 500, 600)


    //left eye
  fill('white')
  ellipse(300, 500, 200, 100)
  fill('#6E260E')
  circle (300, height/2, 100)
  fill(random(255), random(255), random(255))
  stroke(random(255), random(255), random(255))
  strokeWeight(random(1, 5))
  circle(300, 500, 50)
  noStroke()
  fill('white')
  text("dot the eye", 500, 100)


  //right eye
    fill('white')
  ellipse(700, 500, 200, 100)
  fill('#6E260E')
  circle (700, height/2, 100)
  fill(random(255), random(255), random(255))
  stroke(random(255), random(255), random(255))
  strokeWeight(random(1, 5))
  circle(700, 500, 50)
  noStroke()
  fill('white')
  text("dot the eye", 500, 100)

  //nose 
  fill('#8c1f36')
    triangle(450, 600, 550, 600, 500, 500)

    //mouth
    fill('white')
    arc(500, 650, 175, 175, 0, PI);

    
//hair bangs
   fill('#461a0b')
    arc(500, 410, 650, 650, PI, PI*2); 

    fill('tan')
    rect(400, 300, 200, 150)

    push()
    fill('#461a0b')
    rotate(45)
    arc(550, -450, 400, 400, 0, PI);
    pop()
    
    push()
    fill('#461a0b')
    rotate(-45)
    arc(-30, 400, 400, 400, 0, PI);
    pop()
}
