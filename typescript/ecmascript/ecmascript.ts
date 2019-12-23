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
