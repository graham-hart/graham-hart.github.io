let cellrw = 50;
let cellct = Math.pow(cellrw, 2);
let alivechance = 0.1;
let cells = [];
let cellsize;
let newGen;
let editing = true;
let edited = [];
let mode = "draw";

function setup() {
     createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
     frameRate(3);
     cellsize = width / cellrw;
     cells = arr2d(cellrw)
     $("#start").click(function () {
          $("canvas").show();
          if (editing) {
               noLoop();
               edit();
          } else {
               for (let i = 0; i < cellrw; i++) {
                    for (let j = 0; j < cellrw; j++) {
                         cells[i][j] = random(1) < alivechance;
                    }
               }
          }
     });
}
function draw() {
     background(255)
     for (let i = 0; i < cells.length; i++) {
          for (let j = 0; j < cells.length; j++) {
               stroke(0)
               strokeWeight(1);
               if (cells[i][j]) {
                    fill(0);
               } else {
                    noFill();
               }
               rect(i * cellsize, j * cellsize, cellsize)
          }
     }
     let newGen = arr2d(cellrw)

     for (let i = 0; i < cells.length; i++) {
          for (let j = 0; j < cells.length; j++) {
               if (cells[i][j]) {
                    newGen[i][j] = countN(cells, i, j) < 4 && countN(cells, i, j) > 1;
               } else {
                    newGen[i][j] = countN(cells, i, j) == 3;
               }
          }
     }

     cells = newGen;
     // newGen = null;
}
function arr2d(r) {
     let arr = []
     for (let i = 0; i < r; i++) {
          let row = [];
          for (let j = 0; j < r; j++) {
               row.push(false);
          }
          arr.push(row);
     }
     return arr;
}
function countN(arr, x, y) {
     let s = 0;
     let startI = -1;
     let maxI = 1;
     let startJ = -1;
     let maxJ = 1;
     if (x == 0) {
          startI = 0;
     } else if (x == cellrw - 1) {
          maxI = 0;
     }
     if (y == 0) {
          startJ = 0;
     } else if (y == cellrw - 1) {
          maxJ = 0;
     }
     for (let i = startI; i < maxI + 1; i++) {
          for (let j = startJ; j < maxJ + 1; j++) {
               s += arr[x + i][y + j]
          }
     }
     s -= arr[x][y]
     return s;
}
function edit() {
     let interval = setInterval(function () {
          if (mouseIsPressed) {
               coords = {x: floor(mouseX / cellsize), y: floor(mouseY / cellsize)}
               if(edited.length == 0) {
                    if(cells[coords.x][coords.y]) {
                         mode = "erase";
                    } else {
                         mode = "draw";
                    }
               }
               if(!contains(edited, coords)) {
                    cells[coords.x][coords.y] = mode != "erase";
                    edited.push(coords);
               }
               background(255)
               for (let i = 0; i < cells.length; i++) {
                    for (let j = 0; j < cells.length; j++) {
                         stroke(0)
                         strokeWeight(1);
                         if (cells[i][j]) {
                              fill(0);
                         } else {
                              noFill();
                         }
                         rect(i * cellsize, j * cellsize, cellsize)
                    }
               }
          }
          if (keyCode == 13) {
               key = null;
               clearInterval(interval)
               loop();
          }
     }, 10)
}

function contains(arr, val) {
     for(let v of arr) {
          if(v.x == val.x && v.y == val.y) {
               return true;
          }
          // console.log(v, val)
     }
     return false;
}
function mouseReleased() {
     edited = [];
     mode = null;
}
function keyReleased() {
     if(key === "r") {
          cells = arr2d(cellrw)
          noLoop();
          edit();
     } else if(key === " ") {
          noLoop();
          key = null;
          edit();
     }
}