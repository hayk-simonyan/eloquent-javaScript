// my solution
const countBs = str => {
    counter = 0;
    for ( i = 0; i <= str.length - 1; i++ ) {
        if ( str[i] === "B" ) counter++;
    }
    return counter;
};

const countChar = ( str, char ) => {
    counter = 0;
    for ( i = 0; i <= str.length - 1; i++ ) {
        if ( str[i] === char ) counter++;
    }
    return counter;
}


console.log(countBs("BBCB"));
console.log(countBs("bbc"))
console.log(countChar("kakkerlak", "k"));

// solution

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
}
  
function countBs(string) {
return countChar(string, "B");
}
  
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4