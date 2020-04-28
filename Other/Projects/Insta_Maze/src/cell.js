class Cell {
     constructor(i, j, m) {
          this.i = i;
          this.j = j;
          this.m = m;
          this.s = m.cellsize;
          this.x = i * this.s;
          this.y = j * this.s;
          this.walls = { l: true, r: true, t: true, b: true };
          this.visited = false
     }
     show() {
          push()
          translate(this.x, this.y);
          if (this == this.m.endCell || this == this.m.startCell) {
               noStroke();
               fill(120, 0, 25);
               rect(0, 0, this.s)
          }
          stroke(255)
          // strokeWeight(1)
          if (this.walls.l) {
               line(0, 0, 0, this.s);
          }
          if (this.walls.b) {
               line(0, this.s, this.s, this.s);
          }
          if (this.walls.r) {
               line(this.s, this.s, this.s, 0);
          }
          if (this.walls.t) {
               line(this.s, 0, 0, 0);
          }
          pop()
     }
     getNeighbors() {
          let n = {};
          if (this.i != 0) {
               let p = this.m.cells[this.i - 1][this.j]
               if (!p.visited) {
                    n.l = p;
               }
          }
          if (this.i != this.m.rowct - 1) {
               let p = this.m.cells[this.i + 1][this.j];
               if (!p.visited) {
                    n.r = p;
               }
          }
          if (this.j != 0) {
               let p = this.m.cells[this.i][this.j - 1];
               if (!p.visited) {
                    n.t = p;
               }
          }
          if (this.j != this.m.rowct - 1) {
               let p = this.m.cells[this.i][this.j + 1];
               if (!p.visited) {
                    n.b = p;
               }
          }
          return n;
     }
     getNextCell() {
          let neighbors = this.getNeighbors();
          let k = Object.keys(neighbors);
          if (k.length > 0) {
               let dir = random(k);
               let pick = neighbors[dir];
               if (dir == "l") {
                    this.walls.l = false;
                    pick.walls.r = false;
               }
               if (dir == "r") {
                    this.walls.r = false;
                    pick.walls.l = false;
               }
               if (dir == "t") {
                    this.walls.t = false;
                    pick.walls.b = false;
               }
               if (dir == "b") {
                    this.walls.b = false;
                    pick.walls.t = false;
               }
               return pick;
          } else {
               return null;
          }
     }
}