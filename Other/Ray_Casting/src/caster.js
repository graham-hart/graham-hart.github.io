class Caster {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.rays = [];
    for (let i = 0; i < VIEW_ANGLE; i += RAY_ANGLE_DIFF) {
      this.rays.push(new Ray(radians(i), this.pos));
    }
    this.heading = 0;
    this.s = 5;
  }
  cast() {
    let i = 0;
    const view = [];
    for (let r of this.rays) {
      let bestD = Infinity;
      let bestpt;
      for (let w of walls) {
        let pt = r.cast(w);
        if (pt) {
          if (
            p5.Vector.dist(pt, r.pos) < bestD &&
            p5.Vector.dist(pt, r.pos) <= MAX_DIST
          ) {
            bestD = p5.Vector.dist(pt, r.pos);
            bestpt = pt;
          }
        }
      }
      if (bestpt) {
        push();
        stroke(255, 100);
        line(r.pos.x, r.pos.y, bestpt.x, bestpt.y);
        pop();
      }
      view[i] = bestD;
      i++;
    }
    return view;
  }
  update(x, y) {
    this.pos.x = x;
    this.pos.y = y;
    this.pos.x = constrain(this.pos.x, this.s / 2, width / 2 - this.s / 2);
    this.pos.y = constrain(this.pos.y, this.s / 2, height - this.s / 2);
    for (let r of this.rays) {
      r.update(this.pos);
    }
  }

  rotate(a) {
    this.heading += a;
    for (let i = 0; i < this.rays.length; i += RAY_ANGLE_DIFF) {
      this.rays[i].setAngle(this.heading + radians(i));
    }
  }

  show() {
    push();
    strokeWeight(this.s);
    stroke(255);
    point(this.pos.x, this.pos.y);
    pop();
  }
}
