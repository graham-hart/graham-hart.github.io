class Maze {
     constructor(rowct, width_) {
          this.rowct = rowct;
          this.size = width_
          this.cells = [];
          this.cellsize = width_ / rowct;
          this.stack = [];
          this.generate();
          this.currentCell;
     }
     generate() {
          for (let i = 0; i < this.rowct; i++) {
               let row = []
               for (let j = 0; j < this.rowct; j++) {
                    row.push(new Cell(i, j, this));
               }
               this.cells.push(row);
          }
          this.currentCell = this.cells[0][0]
          this.startCell = this.currentCell;
          this.endCell = this.cells[this.rowct - 1][this.rowct - 1];
          // this.stack.push(this.currentCell);
          let unvis = this.rowct * this.rowct;
          while (unvis > 0) {
               this.currentCell.visited = true;
               this.currentCell = this.currentCell.getNextCell();
               // console.log(this.stack)
               this.stack.push(this.currentCell);
               if (this.currentCell != null) {
                    unvis = this.rowct * this.rowct - 1;
                    for (let r of this.cells) {
                         for (let c of r) {
                              if (c.visited) {
                                   unvis--;
                              }
                         }
                    }
               } else {
                    this.stack.pop();
                    this.currentCell = this.stack.pop();
               }
          }
     }
     show() {
          for (let r of this.cells) {
               for (let c of r) {
                    c.show();
               }
          }
     }
}