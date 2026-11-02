// working from https://editor.p5js.org/leey611/sketches/dqfFSCmePs

let particles = []
let num = 100
let scaleValue = 0.0005   // how zoomed in the noise is
let speed = 2

let paper = '#F3EFE6'
let ink = '#14161F'
let colors = ['#FF6B4A', '#53d5fd', '#F2C14E', '#7c2a00', '#14161F','#F3EFE6']

function setup() {
  createCanvas(600, 600)
  background(paper)
  noStroke()
  for (let i = 0; i < num; i++) {
    particles.push(makeParticle())
  }
}

function makeParticle() {
  // random(1) cubed: most sizes come out small, a few come out huge
  let size = 4 + pow(random(1), 4) * 40
  let life = random(80)
  return {
    x: random(width),
    y: random(height),
    size: size,
    life: life,
    maxLife: life,
    steps: 2,
    c: random(colors)
  }
}

function draw() {

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]

    // noise (0 to 1) becomes an angle (0 to two full turns)
    let n = noise(p.x * scaleValue, p.y * scaleValue)
    let angle = n * TWO_PI * 2
    p.x += cos(angle) * speed
    p.y += sin(angle) * speed
    p.life -= 1
    p.steps += 1

    // 0 at birth, 1 in the middle of its life, 0 at death
    let age = 1 - p.life / p.maxLife
    let d = p.size * sin(age * PI)

    fill(p.c) 
    // stroke(p.c)
    // noFill()
    square(p.x, p.y, d)

    // die when old or off the canvas, then start again
    let offCanvas = p.x < 0 || p.x > width || p.y < 0 || p.y > height
    if (p.life <= 0 || offCanvas) {
      particles[i] = makeParticle()
    }
  }
}

// click: a new noise landscape on a clean sheet
function mousePressed() {
  noiseSeed(random(10000))
  background(random(colors))
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('my-flow-field', 'png')
  }
}
