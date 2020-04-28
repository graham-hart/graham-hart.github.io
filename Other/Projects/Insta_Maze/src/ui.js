$("#download").click(function () {
     saveCanvas(`MAZE_${maze.rowct}`, "png")
})
$("#newMaze").click(function () {
     generateMaze();
})

$("#setwidth").click(function () {
})