function showScore() {
  push();
  textFont(font);
  textSize(32);
  fill(255);
  text(snake.segments.length - snakeStartLength, width / 2, 70);
  pop();
}
function diedText() {
  push();
  textAlign(CENTER);
  fill(255);
  textSize(32);
  textFont(font);
  text("YOU DIED! PRESS ENTER TO RESTART!", width / 2, height / 2);
  pop();
}
