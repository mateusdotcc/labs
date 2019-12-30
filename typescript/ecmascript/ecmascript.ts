// let & const
// var isCan;
// console.log(isCan);
// isCan = "?"; // hoisting
// let isCan = "?"

let isCan = "?";
console.log(isCan);

let isCold = true;

if (isCold) {
  let action = "Colocar o casaco!";
  console.log(action);
}
// console.log(action); // scope

const cpf: string = "123.456.000-99";
// cpf = "888.999.123-00";
console.log(cpf);

const sumOpt = function(n1: number, n2: number): number {
  return n1 + n2;
};
console.log(sumOpt(2, 2));

const sub = (n1: number, n2: number) => n1 - n2;
console.log(sub(2, 3));

const hello = () => console.log("Hello!");
console.log(hello);

const talkTo = (people: string) => console.log("Hello" + people);
talkTo("John");

// this

function normalWithThis() {
  console.log(this);
}

const normalWithThisSpecial = normalWithThis.bind("abc");
normalWithThis();

// this??? r => Window
console.log(this);
const arrowWithThis = () => console.log(this); // r => Window
arrowWithThis();

const arrowWithThisSpecial = arrowWithThis.bind({ name: "Ana" });
arrowWithThisSpecial();

// Params

function count(init: number = 5, end: number = init - 5): void {
  console.log(init);
  while (init > end) {
    init--;
    console.log(init);
  }
  console.log("end");
}
count();
count(3);

// Spread & Rest

const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));

// Spread
const teamA: string[] = ["João", "Maria", "Fernanda"];
const teamB: string[] = ["Fernando", "Miguel", ...teamA, "Lorena"];
console.log(teamB);

// Rest
function returnArr(a: number, ...args: number[]): number[] {
  console.log(a); // => 1
  return args; // => rest 2, 3 +
}
const numbersOpt = returnArr(1, 2, 3, 4, 5, 6);
console.log(numbersOpt);
console.log(returnArr(...numbers)); // Spread

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);

// Destructuring (array)
const carac = ["Motor Zetec 1.8", 2020];
// const motor = carac[0]
// const year = carac[1];
const [motor, yyear] = carac;
console.log(motor);
console.log(yyear);
const [w, z] = [2, 3];

// Destructuring (object)
const item = {
  name: "SSD 480GB",
  price: 200,
  carac: {
    ww: "Imported"
  }
};
const nameItem = item.name;
const priceItem = item.price;
const {
  name: nn,
  price: p,
  carac: { ww }
} = item; // name: alias
console.log(nn, p, ww);

// Template String
const userID: string = "Suporte";
const notifications: string = "9";
// const welcome = "Welcome" + userID + "Notifications" + notifications;
const welcome = `Welcome ${userID} Notifications ${
  parseInt(notifications) > 9 ? "+9" : notifications
}`;
console.log(welcome);
console.log(`${(1 + 1) * 30}`);
console.log(`${carac[0]}`);
