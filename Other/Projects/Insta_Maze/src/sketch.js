let maze



function setup() {
     createCanvas(min(windowWidth / 2, windowHeight / 2), min(windowWidth / 2, windowHeight / 2));
     frameRate(60)
     maze = new Maze(prompt("How many cells wide should your maze be?"), width);
     background(51)
     maze.show();
     noLoop();
}
$("#download").click(function () {
     saveCanvas(`MAZE_${maze.rowct}`, "png")
})
$("#newMaze").click(function () {
     clear();
     maze = new Maze(prompt("How many cells wide should your maze be?"), width);
     background(51)
     maze.show();
})