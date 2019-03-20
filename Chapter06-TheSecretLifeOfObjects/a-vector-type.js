// my solution
class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    plus (vector) {
        let newVector = new Vec ();
        newVector.x =  this.x + vector.x;
        newVector.y = this.y + vector.y;
        return newVector;
    }
    minus (vector) {
        let newVector = new Vec ();
        newVector.x =  this.x - vector.x;
        newVector.y = this.y - vector.y;
        return newVector;
    }
    get length() {
        return (Math.sqrt((this.x*this.x) + (this.y*this.y)))
    }
}

let newVec = new Vec (3,4);
let anotherVec = new Vec (1,1);
let thirdVec = new Vec (2,3);
console.log(newVec);
console.log(newVec.x);
console.log(newVec.length);
console.log(newVec.plus(anotherVec));
console.log(newVec.minus(thirdVec));
// console.log(Vec.prototype.plus);

// solution
class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5