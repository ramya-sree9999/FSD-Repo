class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // Method to add another vector
    plus(vector) {
      return new Vec(this.x + vector.x, this.y + vector.y);
    }
  
    // Method to subtract another vector
    minus(vector) {
      return new Vec(this.x - vector.x, this.y - vector.y);
    }
  
    // Getter to calculate the length of the vector
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






  class Group {
  constructor() {
    this.ele = [];
  }

  // Method to add a value to the group
  add(i) {
    if (!this.has(i)) {
      this.ele.push(i);
    }
  }

  // Method to delete a value from the group
  delete(i) {
    this.ele = this.ele.filter(member => member !== i);
  }

  // Method to check if a value is in the group
  has(i) {
    return this.ele.includes(i);
  }

  // Static method to create a group from an iterable
  static from(iterable) {
    let group = new Group();
    for (let i of iterable) {
      group.add(i);
    }
    return group;
  }
}

// Sample usage
let group = Group.from([10, 20]);

console.log(group.has(10)); // → true
console.log(group.has(30)); // → false

group.add(10); // Adding 10 again has no effect
group.delete(10); // Deleting 10 from the group

console.log(group.has(10)); // → false