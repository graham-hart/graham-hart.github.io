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
          fill(0, 0, 0, 255);
          rect(this.pos.x, 0, paddleWidth + 5, height);
          fill(255, 255, 255, 255);
          noStroke();
          rect(this.pos.x, this.pos.y, paddleWidth + 3, paddleHeight);

          pop();
     }
     aiMove() {
          if (this.pos.y + paddleHeight / 2 > ball.pos.y) {
               this.pos.y -= aiSpeed;
          } else if (this.pos.y - paddleHeight / 2 < ball.pos.y) {
               this.pos.y += aiSpeed;
          }
          this.pos.y = constrain(this.pos.y, 0, height - paddleHeight);
     }
     playerMove() {
          this.pos.y = mouseY - (paddleHeight / 2);
          this.pos.y = constrain(this.pos.y, 0, height - paddleHeight);
     }
}