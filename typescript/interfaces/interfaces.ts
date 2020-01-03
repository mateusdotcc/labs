interface Human {
  name: string;
  age?: number; // ? optional
  [prop: string]: any; // dynamic prop
  // greet?(surname: string): void; // optional
  greet(surname: string): void;
}

function greet(people: Human) {
  console.log("Hello," + people.name);
}

function changeName(people: Human) {
  people.name = "Joana";
}

const pp: Human = {
  name: "John",
  age: 27,
  greet(surname: string) {
    console.log("Hello, my name is" + this.name + " " + surname);
  }
};

greet(pp);
changeName(pp);
greet(pp);
// greet({ name: "Jonas", age: 27, height: 1.75 });
pp.greet("Skywalker");

class Client implements Human {
  name: string = "";
  lastPurchase: Date = new Date();
  greet(surname: string) {
    console.log("Hello, my name is" + this.name + " " + surname);
  }
}

const myClient = new Client();
myClient.name = "Han";
greet(myClient);
myClient.greet("Solo");
console.log(myClient.lastPurchase);

// Function Interface
interface FuncCalcule {
  (a: number, b: number): number;
}

let potencia: FuncCalcule;

potencia = function(base: number, exp: number): number {
  // Math.pow(3, 10)
  // 3 ** 10
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(3, 10));

// Inheritance
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}

  abstract d(): void;
}

interface Object {
  log(): void;
}

Object.prototype.log = function() {
  console.log(this.toString());
};

const x = 2;
const y = 3;
const q = 4;
x.log();
y.log();
q.log();
// console.log(x);
// console.log(y);
// console.log(q);

const cli = {
  name: "Pedro",
  toString() {
    return this.name;
  }
};
cli.log();
