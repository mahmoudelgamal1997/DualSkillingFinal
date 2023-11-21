class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  // toString method to display area and parameters
  toString() {
    return `This is a polygon with ${this.sides} sides.`;
  }
}

class Rectangle extends Polygon {
  constructor(length, width) {
    super(4); // Rectangles always have 4 sides
    this.length = length;
    this.width = width;
  }

  // Override toString to display area and parameters
  toString() {
    const area = this.length * this.width;
    return `Rectangle - Length: ${this.length}, Width: ${this.width}, Area: ${area}`;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Square is a special case of Rectangle with equal sides
  }

  // Override toString to display area and parameters
  toString() {
    const area = this.length * this.length;
    return `Square - Side: ${this.length}, Area: ${area}`;
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super(0); // Circles don't have a fixed number of sides
    this.radius = radius;
  }

  // Override toString to display area and parameters
  toString() {
    const area = Math.PI * this.radius ** 2;
    return `Circle - Radius: ${this.radius}, Area: ${area}`;
  }
}

// Example usage:

const rectangle = new Rectangle(5, 8);
const square = new Square(4);
const circle = new Circle(3);
console.log(rectangle.toString()); // Output: Rectangle - Length: 5, Width: 8, Area: 40
console.log(square.toString());    // Output: Square - Side: 4, Area: 16
console.log(circle.toString());    // Output: Circle - Radius: 3, Area: 28.274333882308138
