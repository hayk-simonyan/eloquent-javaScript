// my solution
const reverseArray = arr => {
    const reversedArray = [];
    for ( let i = arr.length - 1; i >= 0; i-- ) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const reverseArrayInPlace = arr => {
    const startingLength = arr.length - 2;
    for ( let i = arr.length - 2; i >= 0; i-- ) {
        arr.push(arr[i]);
    }
    for ( let j = 0; j < startingLength + 1; j++ ) {
        arr.shift()
    }

    
    return arr
}

console.log([1,2,3,4,5,4,3,2,1].slice(4))

console.log(reverseArray(['A', 'B', 'C']));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// solution
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]