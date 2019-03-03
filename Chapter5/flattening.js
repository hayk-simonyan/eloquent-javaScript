// my solution
let arrays = [[1, 2, 3], [4, 5], [6]];
const arrayCombiner = arr => {
    let inArrays = [];
    for (let val of arr) {
        console.log(val);
        for (let val0 of val) {
            console.log(val0);
            inArrays.push(val0)
        }
    }
    console.log(inArrays)
}

arrayCombiner(arrays);
// → [1, 2, 3, 4, 5, 6]
// console.log(arrays.reduce((a,b)=>a+b));
// console.log([1, 2, 3].concat([4, 5]));

// solution
// let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]