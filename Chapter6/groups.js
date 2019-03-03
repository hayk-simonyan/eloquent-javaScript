// my solution
class Group {
    constructor () {
        this.members = []
    }

    add (val) {
        if (this.members.indexOf(val) === -1) {
            this.members.push(val)
        } 
    }

    delete (val) {
        this.members = this.members.filter(value => value !== val);
    }

    has (val) {
        if (this.members.includes(val)) return true;
        return false;
    }

    static from (arr) {
        let group = new Group;
        for (let val of arr) {
            group.add(val)
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group);
group.delete(10);
console.log(group);
console.log(group.has(10));
// → false


// // solution
// class Group {
//     constructor() {
//       this.members = [];
//     }
  
//     add(value) {
//       if (!this.has(value)) {
//         this.members.push(value);
//       }
//     }
  
//     delete(value) {
//       this.members = this.members.filter(v => v !== value);
//     }
  
//     has(value) {
//       return this.members.includes(value);
//     }
  
//     static from(collection) {
//       let group = new Group;
//       for (let value of collection) {
//         group.add(value);
//       }
//       return group;
//     }
// }

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));