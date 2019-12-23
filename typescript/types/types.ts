// string
let myName = "John";
console.log(myName);
// name = 28;

let year = 2019;
// year = 'John'
year = 2019.2;
console.log(year);

let isHobbies = false;
// isHobbies = 1
console.log(isHobbies);

// check types
let valor = true;

if (typeof valor === "number") {
  console.log("This is a number!");
} else {
  console.log(typeof valor);
}

// never
function fail(msg: string): never {
  // while(true) { }
  throw new Error(msg);
}

const product = {
  name: "Sabão",
  price: 4,
  validateProduct() {
    if (!this.name || this.name.trim().length == 0) {
      fail("Precisa ter um nome");
    }

    if (this.price <= 0) fail("Preço inválido");
  }
};

product.validateProduct();

// --------

let height = 12;
// height = null

let heightCustom: null | number = 12;
heightCustom = null;

type Contact = {
  name: string;
  phone1: string;
  phone2: string | null;
};

const contact1: Contact = {
  name: "Fulano",
  phone1: "12345678",
  phone2: null
};

console.log(contact1.name);
console.log(contact1.phone1);
console.log(contact1.phone2);

let n = null; // any!
// let n:null = null;
n = 12;
console.log(n);
n = "abc";
console.log(n);

type BankAccount = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: BankAccount = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  }
};

type AccountHolder = {
  nome: string;
  contaBancaria: BankAccount;
  contatos: string[];
};

let correntista: AccountHolder = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"]
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
