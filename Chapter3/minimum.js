// my solution
const min = (a, b) => {
    return (a > b) ?  console.log(b) : console.log(a);
}

min(2,1)

// solution
function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10