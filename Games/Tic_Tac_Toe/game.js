const canv = document.getElementById("canv");
const ctx = canv.getContext("2d");
const canvS = 600;
canv.height = canvS;
canv.width = canv.height;

const center = {x: canvS / 2, y: canvS / 2};

const l = canvS / 3;
let rect = canv.getBoundingClientRect();
let board = [["", "", ""], ["", "", ""], ["", "", ""]];

let p1 = "X";
let p2 = "O";
let currentPlayer = p1;

let aiPlayer = p2;
let humanPlayer = p1;

let GridCol = "#000071";
let GridLineWidth = 5;
let playerColors = {
    X: "#00bb00",
    O: "#bb0000"
}

canv.addEventListener("mouseup", function (e) {
    if(CheckWin() === null) {
        let mX = e.clientX - rect.left;
        let mY = e.clientY - rect.top;
        if(GetSection(mX, mY)) {
            Update();
            if(currentPlayer == p1 && CheckWin() === null) {
                currentPlayer = p2;
                BestMove();
                currentPlayer = p1;
            }
        }
        Update();
        let winner = CheckWin();
    }
});

function DrawBoard() {
    Line(l, 0, l, canvS);
    Line(l * 2, 0, l * 2, canvS);
    Line(0, l * 2, canvS, l * 2);
    Line(0, l, canvS, l);
}

function Line(x1, y1, x2, y2) {
    ctx.strokeStyle = GridCol;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = GridLineWidth;
    ctx.stroke();
}
function GetSection(x, y) {
    let col;
    let row;
    if(x < l) {
        col = 0;
    } else if(l < x && x < 2 * l) {
        col = 1;
    } else {
        col = 2;
    }
    if(y < l) {
        row = 0;
    } else if(l < y && y < 2 * l) {
        row = 1;
    } else {
        row = 2;
    }
    if(board[row][col] == "") {
        board[row][col] = currentPlayer;
        return true;
    } else {
        return false;
    }
}

function Setup() {
    Update();
    currentPlayer = p1;
}

function Update() {
    ctx.clearRect(0, 0, canvS, canvS);
    DrawBoard();
    for(let i = 0; i < 3; i++) {
        let letterY = l / 2 + (l * i) + 28;
        for(let j = 0; j < 3; j++) {
            let letterX = l / 2 + (l * j) - 37;
            ctx.font = "100px Helvetica";
            ctx.fillStyle = playerColors[board[i][j]];
            ctx.fillText(board[i][j], letterX, letterY);
        }
    }
}

function AllEqual(a, b, c) {
    return a === b && b === c && a !== "";
}

function CheckWin() {
    let winner = null;
    //Rows
    for(let i = 0; i < 3; i++) {
        if(AllEqual(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }
    //Columns
    for(let i = 0; i < 3; i++) {
        if(AllEqual(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }
    //Diagonal From Top-Left
    if(AllEqual(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    //Diagonal From Top-Right
    if(AllEqual(board[0][2], board[1][1], board[2][0])) {
        winner = board[0][2];
    }
    //Check if there are any spaces left
    let openCount = 0;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(board[i][j] == "") {
                openCount++;
            }
        }
    }
    if(winner == null && openCount == 0) {
        winner = "tie";
    }
    return winner;
}

const scores = {
    X: -10,
    O: 10,
    tie: 0
}

function minimax(b, isMaximizing, depth) {
    let result = CheckWin();
    if(result != null) {
        return scores[result];
    }
    if(isMaximizing) {
        let bestScore = -Infinity;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(b[i][j] == "") {
                    b[i][j] = aiPlayer;
                    let score = minimax(b, false, depth+1);
                    //console.log("ROW : " + i + ", COL : " + j + ", SCORE : " + score + ", BEST_SCORE : " + bestScore + ", IS_MAX : " + isMaximizing);
                    b[i][j] = "";
                    if(score > bestScore) {
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(b[i][j] == "") {
                    b[i][j] = humanPlayer;
                    let score = minimax(b, true, depth + 1);
                    b[i][j] = "";
                    if(score < bestScore) {
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
}

function BestMove() {
    let bestScore = -Infinity;
    let move;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(board[i][j] == "") {
                board[i][j] = aiPlayer;
                let score = minimax(board, false, 0);
                board[i][j] = "";
                if(score > bestScore) {
                    bestScore = score;
                    move = {i, j};
                }
            }
        }
    }
    board[move.i][move.j] = aiPlayer;
}

function OWins() {
    ctx.beginPath();
    ctx.arc(center.x, center.y, (canvS / 2) - 30, 0, 2*Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = playerColors["O"];
    ctx.stroke();
}

Setup();