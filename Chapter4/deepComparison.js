function deepEqual(val1, val2) {
    if (typeof val1 !== 'object' && typeof val2 !== 'object') {
        if (val1 === val2) return true;
        return false;
    }
    if (typeof val1 === 'object' && typeof val2 !== 'object') return false;
    if (typeof val1 !== 'object' && typeof val2 === 'object') return false;
    if (typeof val1 === 'object' && typeof val2 === 'object') {
        console.log('both are objects ')
        const obj1Keys = Object.keys(val1);
        const obj2Keys = Object.keys(val2);
        if (obj1Keys.length === obj2Keys.length) {
            for (let i = 0; i <= obj1Keys.length; i++) {
                if (obj1Keys[i] === obj2Keys[i]) {
                    if (val1[obj1Keys[i]] === val2[obj2Keys[i]]) {
                        delete val1['obj1Keys[i]'];
                        delete val2['obj2Keys[i]'];
                        // continue
                    }
                }
            }
        }
        return false;
    }
}


console.log(deepEqual({a: 'somestring',b: 42,c: false},{a: 'somestring',b: 42,c: false}));

// solution
// function deepEqual(a, b) {
//     if (a === b) return true;
    
//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;
  
//     let keysA = Object.keys(a), keysB = Object.keys(b);
  
//     if (keysA.length != keysB.length) return false;
  
//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
  
//     return true;
// }

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true