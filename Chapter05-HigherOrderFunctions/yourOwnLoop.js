// my solution
function loop (val, testFunction, updateFunction, bodyFunction) {
    for ( let i = val; testFunction(i); i = updateFunction(i)) {
        bodyFunction(i);
    }
}

// solution
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1