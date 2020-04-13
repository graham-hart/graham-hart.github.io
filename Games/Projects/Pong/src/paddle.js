class Paddle {
     constructor(isAI) {
          this.isAI = isAI;
          this.pos = createVector()
          if (this.isAI) {
               this.pos.x = width - (paddleWidth + paddleMargin);
          } else {
               this.pos.x = paddleMargin;
          }
          this.pos.y = (height / 2) - (paddleHeight / 2);
     }
     show() {
          push();
          fill(255, 255, 255, 255);
          noStroke();
          rect(this.pos.x, this.pos.y, paddleWidth + 3, paddleHeight);

          pop();
     }
     aiMove() {
          if (ball.pos.y > this.pos.y + paddleHeight * (3 / 4)) {
               this.pos.y += aiSpeed;
          }
          if (ball.pos.y < this.pos.y + paddleHeight / 4) {
               this.pos.y -= aiSpeed;
          }
          this.pos.y = constrain(this.pos.y, 0, height - paddleHeight);
     }
     playerMove() {
          this.pos.y = mouseY - (paddleHeight / 2);
          this.pos.y = constrain(this.pos.y, 0, height - paddleHeight);
     }
}