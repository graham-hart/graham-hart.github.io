class Ray {
     constructor() {
          this.a = 45;
     }
     rotate(r) {
          this.a += r;
     }
     cast() {
          let d = this.bestDist(caster.pos);
          let pos = caster.pos.copy()
          push()
          while (d > 1) {
               d = this.bestDist(pos);
               if (pos.x > 0 && pos.x < width && pos.y > 0 & pos.y < width) {
                    fill(0, 100, 255, 20);
                    stroke(50, 100, 255)
                    ellipse(pos.x, pos.y, d * 2, d * 2)
                    let dir = p5.Vector.fromAngle(this.a);

                    dir.setMag(d);
                    stroke(255);
                    line(pos.x, pos.y, pos.x + dir.x, pos.y + dir.y)
                    pos.add(dir);
               } else {
                    break;
               }
          }
          if (!pos.equals(caster.pos)) {
               points.push(pos);
          }
          pop()
     }
     bestDist(p) {
          let bestD = Infinity;
          for (let s of shapes) {
               let d = p5.Vector.dist(p, s.pos) - s.s / 2;
               if (d < bestD) {
                    bestD = d;
               }
          }
          if (bestD != Infinity) {
               return bestD;
          }
     }
}