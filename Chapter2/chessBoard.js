// my solution
let size = 8;
let symbol1 = "";
let symbol2 = "";
for (let j = size; j > 0; j--) {
    if ( j % 2 === 0 ) {
        symbol1 += " "
    } else {
        symbol1 += "#"
    }
}
for (let i = size; i > 0; i--) {
    if ( i % 2 !== 0 ) {
        symbol2 += " "
    } else {
        symbol2 += "#"
    }
}
for (let k = size/2; k > 0; k--) {
    console.log(symbol1)
    console.log(symbol2)
}

// solution
let size = 8;

let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    counter++;
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);