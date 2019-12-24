"use strict";
// string
var myName = "John";
console.log(myName);
// name = 28;
var year = 2019;
// year = 'John'
year = 2019.2;
console.log(year);
var isHobbies = false;
// isHobbies = 1
console.log(isHobbies);
// check types
var valor = true;
if (typeof valor === "number") {
    console.log("This is a number!");
}
else {
    console.log(typeof valor);
}
// never
function fail(msg) {
    // while(true) { }
    throw new Error(msg);
}
var product = {
    name: "Sabão",
    price: 4,
    validateProduct: function () {
        if (!this.name || this.name.trim().length == 0) {
            fail("Precisa ter um nome");
        }
        if (this.price <= 0)
            fail("Preço inválido");
    }
};
product.validateProduct();
// --------
var height = 12;
// height = null
var heightCustom = 12;
heightCustom = null;
var contact1 = {
    name: "Fulano",
    phone1: "12345678",
    phone2: null
};
console.log(contact1.name);
console.log(contact1.phone1);
console.log(contact1.phone2);
var n = null; // any!
// let n:null = null;
n = 12;
console.log(n);
n = "abc";
console.log(n);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"]
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
