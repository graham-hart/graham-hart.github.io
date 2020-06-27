function keyPressed() {
  if (keyCode === UP_ARROW && snake) {
    if (snake.velocity.y === 0) {
      snake.velocity = createVector(0, -1);
    }
  } else if (keyCode === DOWN_ARROW) {
    if (snake.velocity.y === 0) {
      snake.velocity = createVector(0, 1);
    }
  } else if (keyCode === LEFT_ARROW) {
    if (snake.velocity.x === 0) {
      snake.velocity = createVector(-1, 0);
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (snake.velocity.x === 0) {
      snake.velocity = createVector(1, 0);
    }
  } else if (key === "g") {
    if (graphicsType === "lineArt") {
      graphicsType = "filled";
    } else {
      graphicsType = "lineArt";
    }
  } else if (keyCode === ENTER) {
    if (paused) {
      loop();
      paused = false;
    } else {
      paused = true;
      noLoop();
    }
  }
}
