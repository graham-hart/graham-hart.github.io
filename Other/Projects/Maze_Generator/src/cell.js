class Cell {
  constructor(gridx, gridy) {
    this.pos = createVector(gridx, gridy);
    this.walls = { l: true, r: true, t: true, b: true };
    this.visited = false;
  }
  show() {
    push();
    translate(this.pos.x * cellSize + margin, this.pos.y * cellSize + margin);
    if (this.visited) {
      noStroke();
      fill(visitedColor);
      if (this == currentCell) {
        fill(currentColor);
      } else if (this == firstCell) {
        fill(firstColor);
      }
      rect(0, 0, cellSize - margin, cellSize - margin);
    }
    stroke(wallColor);
    strokeWeight(wallWidth);
    if (this.walls.t) {
      line(0, 0, cellSize - margin, 0);
    }
    if (this.walls.b) {
      line(cellSize - margin, cellSize - margin, 0, cellSize - margin);
    }
    if (this.walls.l) {
      line(0, 0, 0, cellSize - margin);
    }
    if (this.walls.r) {
      line(cellSize - margin, 0, cellSize - margin, cellSize - margin);
    }
    strokeWeight(wallWidth / 2)
    point(0, 0);
    point(cellSize - margin, 0);
    point(0, cellSize - margin);
    point(cellSize - margin, cellSize - margin)
    pop();
  }
  getNeighbors() {
    let neighbors = {};
    let toPick;
    if (this.pos.x > 0 && this.walls.l) {
      toPick = cells[this.pos.x - 1][this.pos.y];
      if (!toPick.visited) {
        neighbors.l = toPick;
      }
    }
    if (this.pos.x < cellct - 1 && this.walls.r) {
      toPick = cells[this.pos.x + 1][this.pos.y];
      if (!toPick.visited) {
        neighbors.r = toPick;
      }
    }
    if (this.pos.y > 0 && this.walls.t) {
      toPick = cells[this.pos.x][this.pos.y - 1];
      if (!toPick.visited) {
        neighbors.t = toPick;
      }
    }
    if (this.pos.y < cellct - 1 && this.walls.b) {
      toPick = cells[this.pos.x][this.pos.y + 1];
      if (!toPick.visited) {
        neighbors.b = toPick;
      }
    }
    return neighbors;
  }
  pickNextCell() {
    let neighbors = this.getNeighbors();
    let n = Object.keys(neighbors);
    if (n.length != 0) {
      let p = random(n);
      let pick = neighbors[p];
      if (p == "r") {
        this.walls.r = false;
        pick.walls.l = false;
      }
      if (p == "l") {
        pick.walls.r = false;
        this.walls.l = false;
      }
      if (p == "t") {
        this.walls.t = false;
        pick.walls.b = false;
      }
      if (p == "b") {
        pick.walls.t = false;
        this.walls.b = false;
      }
      currentCell = pick;
      pick.visited = true;
    } else {
      stack.pop();
      currentCell = stack.pop();
    }
  }
}
