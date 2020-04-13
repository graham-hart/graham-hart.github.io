class Ball {
     constructor() {
          this.pos = createVector(width / 2, height / 2);
          this.angle = random(-PI / 4, PI / 4);
          this.vel = createVector(ballSpeed * cos(this.angle), ballSpeed * sin(this.angle));
          if (random(1) < 0.5) {
               this.vel.x = -this.vel.x;
          }
     }
     show() {
          push();
          fill(255);
          noStroke()
          ellipse(this.pos.x, this.pos.y, ballSize, ballSize);
          pop();
     }
     update() {
          if (this.pos.y - ballSize <= 0 || this.pos.y + ballSize >= height) {
               this.vel.y = -this.vel.y;
          }
          this.pos.add(this.vel)
     }
     checkLeftPaddle(p) {
          if (this.pos.x - ballSize <= p.pos.x + paddleWidth && this.pos.y >= p.pos.y && this.pos.y - ballSize <= p.pos.y + paddleHeight) {
               this.diff = this.pos.y - p.pos.y;
               let rad = radians(45);
               let a = map(this.diff, 0, paddleHeight, -rad, rad);
               this.vel.x = ballSpeed * cos(a);
               this.vel.y = ballSpeed * sin(a);
          }
     }
     checkRightPaddle(p) {
          if (this.pos.x + ballSize >= p.pos.x && this.pos.y >= p.pos.y && this.pos.y - ballSize <= p.pos.y + paddleHeight) {
               this.diff = this.pos.y - p.pos.y;
               let rad = radians(135)
               let a = map(this.diff, 0, paddleHeight, -rad, rad);
               this.vel.x = ballSpeed * cos(a) * -1;
               this.vel.y = ballSpeed * sin(a);
          }
     }
     edges() {
          if (this.pos.x - ballSize <= 0 || this.pos.x + ballSize >= width) {
               aiPaddle.pos.y = height / 2;
               humanPaddle.pos.y = height / 2;
               if (this.pos.x < width / 2) {
                    aiScore++;
               } else {
                    humanScore++;
               }
               ball = new Ball();
          }
     }
}