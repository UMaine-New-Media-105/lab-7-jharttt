function setup() {
  let offset = 40;
  createCanvas(400, 400);
  background(200);

  // used lerpcolor to make gradient easier
  let fromColor = color(255, 165, 0);
  let toColor = color(0, 255, 255);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = offset + j * offset * 2;
      let y = offset + i * offset * 2;
      let gradientAmountX = j / 4;
      let gradientAmountY = i / 4;
      let fillColor = lerpColor(fromColor, toColor, gradientAmountX + gradientAmountY);

      fill(fillColor);
      ellipse(x, y, 80, 80);
    }
  }
}
// mousePressed function to turn the gradient to purple to orange
// couldnt have it be temporary, tried noLoop()
function mousePressed() {
  let offset = 40;
  let fromColor = color(255, 165, 0);
  let toColor = color(128, 0, 128);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = offset + j * offset * 2;
      let y = offset + i * offset * 2;
      let gradientAmountX = j / 4;
      let gradientAmountY = i / 4;
      let fillColor = lerpColor(fromColor, toColor, gradientAmountX + gradientAmountY);
      fill(fillColor);
      ellipse(x, y, 80, 80);
    }
  }
}
