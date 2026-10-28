//slices
let sliceNumSlider;
let sliceColorPicker;

let radiusScale;
let slicePositionSlider;

//crust
let crustColorPicker;
let crustLengthSlider;
let crustStartSlider;
let crustWidthSlider;

//tray and table
let trayColorPicker;
let tableColorPicker;
let showTrayCheckbox;

function setup() {
  createCanvas(400, 400);
  noStroke()

  //Sliders and Pickers

createP('Let\'s make pizza')
  createElement('label', 'Number of Slices')
  sliceNumSlider = createSlider(1,10, 1)
  createElement('label', 'Slice Position')
  slicePositionSlider = createSlider(0, 10, 0)
  createElement('label', 'Pizza Color')
  sliceColorPicker = createColorPicker('#eff95f')
  createElement('label', 'Crust Color')
  crustColorPicker = createColorPicker('#c17b0b')
  createElement('label', 'Crust End')
  crustLengthSlider = createSlider(0, TWO_PI, TWO_PI, 0.01)
  createElement('label', 'Crust Rotation')
  crustStartSlider = createSlider(0, TWO_PI, 0, 0.01);
  createElement('label', 'Crust Thickness')
  crustWidthSlider = createSlider(1, 30, 10);
  createElement('label', 'Tray Color')
  trayColorPicker = createColorPicker('#a19f9b')
  createElement('label', 'Table Color')
  showTrayCheckbox = createCheckbox('Show Tray', true)
  tableColorPicker = createColorPicker('#000000')
  createElement('label', 'Pizza?')
  radiusScale = createSlider(1, 500, 100)
  
}

function draw() {
  background(tableColorPicker.value());
  translate(width/2, height/2)
 
  if (showTrayCheckbox.checked()) {
    drawTray()
  }
  drawPizza()
}




function drawTray() {
let radius = (radiusScale.value());
fill(trayColorPicker.value())
circle(0, 0, radius * 2 + 20)
}

function drawPizza() {
    let radius = (radiusScale.value());
let pos = slicePositionSlider.value();
let sliceAngle = TWO_PI / 10;

//slices
  let num = sliceNumSlider.value()

  for (let i = 0; i < num; i++) {
    push()

    fill(sliceColorPicker.value())
    // rotate(i/num * TWO_PI)
    rotate(i * sliceAngle + pos)
    triangle(0, 0, radius, 0, radius * cos(sliceAngle), radius * sin(sliceAngle))

    pop()
  }
   
//crust
  push()
  let len = crustLengthSlider.value()
  let start = crustStartSlider.value();
   noFill();
    stroke(crustColorPicker.value());
    strokeWeight(crustWidthSlider.value());
    arc(0, 0, radius * 2, radius * 2, start, start + len);
    pop()

    let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('myCanvas', 'jpg');
  })
}