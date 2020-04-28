let maze;



function setup() {
     createCanvas(min(windowWidth / 1.5, windowHeight / 1.5), min(windowWidth / 1.5, windowHeight / 1.5));
     frameRate(60)
     noLoop();
}

function generateMaze() {
     maze = new Maze(parseInt($("#cellct").val()), width);
     background(51)
     maze.show();
}