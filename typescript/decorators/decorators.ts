function loginClass(constructor: Function) {
  console.log(constructor);
}

function decoratorEmpty(_: Function) {}

// Factory
function loginClassIf(value: boolean) {
  return value ? loginClass : decoratorEmpty;
}

function decorator(obj: { a: string; b?: number }) {
  return function(_: Function): void {
    console.log(obj.a + " " + obj.b);
  };
}

// @loginClass
// @decorator({ a: "Teste", b: 123 })
// @decorator({ a: "Teste" })
// @loginClassIf(true)
// @loginObject
// class Eletro {
//   constructor() {
//     console.log("Hello");
//   }
// }

type Constructor = { new (...args: any[]): {} };

function loginObject(constructor: Constructor) {
  console.log("Loaded...");

  return class extends constructor {
    constructor(...args: any[]) {
      console.log("Before...");
      super(...args);
      console.log("After...");
    }
  };
}

// new Eletro();
// new Eletro();
// new Eletro();

interface Eletro {
  printable?(): void;
}

@printable
class Eletro {
  constructor() {
    console.log("Hello");
  }
}

function printable(constructor: Function) {
  constructor.prototype.print = function() {
    console.log(this);
  };
}

// (<any>new Eletro()).printable(); // error
const ele = new Eletro();
ele.printable && ele.printable();

const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: true
};

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Sem permissão!");
      }
    }
  };
}

// Method Decorator
class Account {
  @noNegative
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  @freeze
  draw(@paramInfo value: number) {
    if (value <= this.balance) {
      this.balance -= value;
      return true;
    } else {
      return false;
    }
  }

  @freeze
  getBalance() {
    return this.balance;
  }
}

const cc = new Account(10248.57);
cc.draw(5000);
console.log(cc.getBalance());

// cc.getBalance = function() {
//   return this["balance"] + 7000;
// };
// console.log(cc.getBalance()); // problem

function freeze(
  target: any,
  nameMethod: string,
  descritor: PropertyDescriptor
) {
  console.log(target);
  console.log(nameMethod);
  descritor.writable = false;
}

// Attr Decorator
function noNegative(target: any, propName: string) {
  delete target[propName];

  Object.defineProperty(target, propName, {
    get: function(): any {
      return target["_" + propName];
    },
    set: function(value: any): void {
      if (value < 0) {
        throw new Error("Invalid Balance");
      } else {
        target["_" + propName] = value;
      }
    }
  });
}

// Params Decorator
function paramInfo(target: any, nameMethod: string, indexParam: number) {
  console.log(`Target: ${target}`);
  console.log(`Method: ${nameMethod}`);
  console.log(`Index: ${indexParam}`);
}
