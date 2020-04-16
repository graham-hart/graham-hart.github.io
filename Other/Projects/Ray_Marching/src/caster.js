class Caster {
     constructor() {
          this.pos = createVector(width / 2, height / 2);
          this.ray = new Ray();
          this.a = 360
          this.s = 10;
     }
     rotate(r) {
          this.ray.rotate(r);
     }
     update(r, x, y) {
          this.rotate(r);
          this.pos.set(x, y);
          this.ray.cast();
     }
     show() {
          push();
          stroke(200);
          strokeWeight(this.s);
          point(this.pos.x, this.pos.y)
          pop()
     }
}