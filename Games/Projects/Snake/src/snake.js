class Snake {
  constructor(x, y) {
    this.velocity = createVector(1, 0);
    this.pos = createVector(x, y);
    this.segments = [createVector(x, y)];
    for (let i = 1; i < snakeStartLength; i++) {
      this.segments[i] = createVector(
        this.segments[i - 1].x + gridS,
        this.segments[i - 1].y
      );
    }
  }
  show() {
    push();
    colorMode(HSV, 100, 100, 100);
    let hue = 0;
    for (let s of this.segments) {
      if (graphicsType === "filled") {
        fill(hue, 100, 100);
        noStroke();
      } else {
        stroke(hue, 100, 100);
        noFill();
      }
      hue += 10;
      rect(s.x * gridS, s.y * gridS, gridS, gridS);
    }
    pop();
  }
  update() {
    this.head = this.segments[0].copy();
    this.head.add(this.velocity);
    this.segments.unshift(this.head);
    if (!this.head.equals(food.pos)) {
      this.segments.splice(this.segments.length - 1, 1);
    } else {
      food = new Food();
      if (
        (snake.segments.length - snakeStartLength) % 5 === 0 &&
        snake.segments.length != snakeStartLength
      ) {
        fr += 1;
        frameRate(fr);
      }
    }
  }
  edges() {
    if (
      this.head.x < 0 ||
      this.head.x > boxCount - 1 ||
      this.head.y < 0 ||
      this.head.y > boxCount - 1
    ) {
      return true;
    }
  }
  tail() {
    let count = 0;
    for (let s of this.segments) {
      if (s.equals(this.head) && s != this.head) {
        return true;
      }
    }
  }
}
