let gridSize = 20
let cols
let rows

function setup() {
    createCanvas(600, 600);
    cols = int(width/gridSize);
    rows = int(height/gridSize);
    frameRate(5)
}


function draw() {
  background(0);



for (let i = 0; i < cols; i++) {
    fill(random(255), random(255), random(255))
    
    for (let j = 0; j < rows; j++) {
    let x = i * gridSize + gridSize/2;
    let y = j * gridSize + gridSize/2;
    let d = dist(x, y, mouseX, mouseY)
    let rectSize = map(d, 0, 500, gridSize, gridSize * 0.2)
   
     
if (i % 2 === 0) {
        noStroke()
        fill(random(255), random(255), random(255))
      } else {
        noFill()
        strokeWeight(2)
        stroke(random(255), random(255), random(255))
      }
    //   rectMode(CENTER)
    //   rotate((frameCount*0.0001+i+j))
    //   rect(x, y, rectSize, rectSize);
    push()
      translate(x, y)
      let upValue = map(sin(frameCount*0.2+i+j), -1, 1, -10, 10)
      translate(0,upValue)
    rect(x, y, rectSize, rectSize, 0, PI, 0, PI)
    pop()

    }
        
    // let x = i * gridSize + gridSize/2;
    // let y = 25;
    // circle(x, y, gridSize);

  }
}

