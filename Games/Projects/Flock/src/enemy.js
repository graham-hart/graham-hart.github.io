class Enemy {
  constructor(p) {
    let x;
    let y;
    if (round(random(1)) === 0) {
      this.pos = createVector(p, round(random(1)) * height);
    } else {
      this.pos = createVector(round(random(1)) * width, p);
    }
    this.s = 32;
    this.speed = enemySpeed;
  }
  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading.heading());
    fill(MAIN_COLOR);
    beginShape();
    vertex(0, 0);
    vertex(-this.s, -this.s / 6);
    vertex(-this.s * 1.25, 0);
    vertex(-this.s, this.s / 6);
    endShape();
    pop();
  }
  update() {
    this.heading = createVector(
      player.pos.x - this.pos.x,
      player.pos.y - this.pos.y
    );
    this.heading.limit(this.speed);
    this.pos.add(this.heading);
    this.edges();
    this.show();
    this.checkCrash();
  }
  edges() {
    if (this.pos.x - this.s / 2 <= boundaries.min.x) {
      this.pos.x = this.s / 2 + boundaries.min.x;
    } else if (this.pos.x + this.s / 2 >= boundaries.max.x) {
      this.pos.x = boundaries.max.x - this.s / 2;
    }
    if (this.pos.y - this.s / 2 <= boundaries.min.y) {
      this.pos.y = this.s / 2 + boundaries.min.y;
    } else if (this.pos.y + this.s / 2 >= boundaries.max.y) {
      this.pos.y = boundaries.max.y - this.s / 2;
    }
  }
  checkKillPlayer() {
    return p5.Vector.dist(this.pos, player.pos) < (player.s - 10) / 2;
  }
  checkCrash() {
    let killSelf = false;
    for (let e of enemies) {
      if (
        dist(this.pos.x, this.pos.y, e.pos.x, e.pos.y) < this.s / 2 &&
        e != this
      ) {
        enemies.splice(enemies.indexOf(e), 1);
        killSelf = true;
        score++;
      }
    }
    if (killSelf) {
      enemies.splice(enemies.indexOf(this), 1);
    }
  }
}
