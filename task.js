// Задача 1

function parseCount(products) {
  let resultParse = Number.parseFloat(products);
  if (Number.isNaN(resultParse)) {
    throw new Error(`Невалидное значение`);
  }
  return resultParse;
}

function validateCount(products) {
  try {
    return parseCount(products);
  } catch(error) {
    return error;
  }
}

// Задача 2

class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    if ( (sideOne + sideTwo) < sideThree || (sideTwo + sideThree) < sideOne || (sideOne + sideThree) < sideTwo) {
      throw new Error(`Треугольник с такими сторонами не существует`);
    }
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
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
        get perimeter() {
          return `Ошибка! Треугольник не существует`;
        },
        get area() {
          return `Ошибка! Треугольник не существует`;
        }
      }
  }
}