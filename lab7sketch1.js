let colors = ["gold", "red"]
let x = 20
let y = 20
let x2 = 360
let y2 = 20
function setup() {
  background(220);
  createCanvas(400, 400);
  }

function draw() {
  noLoop();
 ellipse(380, 20, 50)
 // strokeWeight(4);
   for (let i = 0; i < 15; i++) {
    let randColor = colors[int(random(0, colors.length))];
    stroke(randColor);
     ellipse(x, y, 50);
     x += 25
     y += 25
     ellipse(x2, y, 50);
     x2 += -25
     y2 += -25
     
  }
}
