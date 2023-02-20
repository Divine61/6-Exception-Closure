// Задача 1

function parseCount(products) {
  if (Number.isNaN(Number.parseFloat(products))) {
    throw new Error(`Невалидное значение`);
  }
  return Number.parseFloat(products);
}

function validateCount(products) {
  try {
    parseCount(products);
  } catch(error) {
    console.error(`Невалидное значение`);
  }
  return parseCount(products);
}

// Задача 2

class Triangle {
  #perimeter;
  #area;
  constructor(sideOne, sideTwo, sideThree) {
    if ( (sideOne + sideTwo) < sideThree || (sideTwo + sideThree) < sideOne || (sideOne + sideThree) < sideTwo) {
      throw new Error(`Треугольник с такими сторонами не существует`);
    }
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.#perimeter;
    this.#area;
  }
  get perimeter() {
    return +(this.sideOne + this.sideTwo + this.sideThree);
  }
  get area() {
    let p = this.perimeter / 2;
    return +( Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree)) ).toFixed(3);
  }
}

function getTriangle(sideOne, sideTwo, sideThree) {
  try {
    return new Triangle(sideOne, sideTwo, sideThree);
  } catch(error) {
    return {
      perimeter: `Ошибка! Треугольник не существует`,
      area: `Ошибка! Треугольник не существует`,
    }
  }
}