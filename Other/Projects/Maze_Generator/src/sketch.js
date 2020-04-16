let cellct = 10;
let cellSize;
let cells = [];
let wallWidth = 2;
let currentCell;
let stack = [];
let start;
let finish;
let margin = 2;
let showWhileGen = true;
let done = false;
let wallColor = 200;
let visitedColor;
let currentColor;
let firstColor;
function setup() {
  let s = windowWidth / 2;
  createCanvas(s, s);
  cellSize = width / cellct;
  //X Position
  for (let i = 0; i < cellct; i++) {
    let r = [];
    //Y Position
    for (let j = 0; j < cellct; j++) {
      r.push(new Cell(i, j));
    }
    cells.push(r);
  }
  frameRate(60);
  firstCell = cells[0][0];
  currentCell = firstCell;
  currentCell.visited = true;
  currentColor = color(0, 220, 255);
  visitedColor = color(0, 50, 65);
  firstColor = color(0, 195, 155);
}

function draw() {
  background(color(0, 25, 32.5));
  let unvisited = 0;
  for (let r of cells) {
    for (let c of r) {
      if (showWhileGen) {
        c.show();
      }
      if (!c.visited) {
        unvisited++;
      }
    }
  }
  if (unvisited === 0) {
    noLoop();
    currentCell = null;
    currentColor = color(255, 0, 0);
    visitedColor = 200;
    firstColor = color(255, 0, 0);
    background(wallColor)
    wallColor = 0;
    for (let r of cells) {
      for (let c of r) {
        c.show();
      }
    }
    fill(currentColor);
    noStroke();
    done = true;
  }
  stack.push(currentCell);
  currentCell.pickNextCell();
}
$("#download").click(() => {
  if (done) {
    saveCanvas(`MAZE-${cellct}`, "png");
  }
});
$("#restart").click(() => {
  if (done) {
    restart()
  }
});
function setCellCt() {
  cellct = $("#size").val();
  restart();
}
function restart() {
  noLoop();
  clear();
  cells = [];
  cellSize = width / cellct;
  //X Position
  for (let i = 0; i < cellct; i++) {
    let r = [];
    //Y Position
    for (let j = 0; j < cellct; j++) {
      r.push(new Cell(i, j));
    }
    cells.push(r);
  }
  frameRate(60);
  firstCell = cells[0][0];
  currentCell = firstCell;
  currentCell.visited = true;
  currentColor = color(0, 25, 32.5);
  wallColor = 200;
  visitedColor = color(0, 50, 65);
  firstColor = color(0, 195, 155);
  loop();
}
