function echo(obj: any) {
  return obj;
}

console.log(echo("John").length);
console.log(echo(27).length); // => undefined
console.log(echo({ name: "John" }));

function echoGenerics<T>(obj: T): T {
  return obj;
}

console.log(echoGenerics("John").length);
console.log(echoGenerics(27).length); // => undefined
console.log(echoGenerics<number>(27)); // => generics T = number
console.log(echoGenerics("27").length); // => string
console.log(echoGenerics({ name: "John" }));

// Generics Array
const rating: Array<number> = [10, 9.3, 7.7];
rating.push(8.4);
rating.push("5.5");
console.log(rating);

// Array
function print<T>(args: T[]) {
  args.forEach(elem => console.log(elem));
}

type PP = { name: string; age: number };

print([1, 2, 3]);
print<number>([1, 2, 3]);
print<string>(["Ana", "Bia", "Ian"]);
print<{ name: string; age: number }>([{ name: "Ian", age: 22 }]);
print<PP>([{ name: "Ian", age: 22 }]);

// Generic Type
type Echo = <T>(data: T) => T;
const callEcho: Echo = echoGenerics;
console.log(callEcho<string>("Something"));

// Class w/ Generics
abstract class Operation<T, R> {
  constructor(public operation1: T, public operation2: T) {}

  abstract execute(): R;
}

// console.log(new Operation("Good", "Morning").execute());
// console.log(new Operation(3, 7).execute());
// console.log(new Operation(3, "Hi!").execute());

class SumOperation extends Operation<number, number> {
  execute(): number {
    return this.operation1 + this.operation2;
  }
}

console.log(new SumOperation(3, 4).execute());
console.log(new SumOperation(30, 434).execute());

class DifferencesBetweenDates extends Operation<Data, string> {
  getTime(data: Data): number {
    let { day, month, year } = data;
    return new Date(`${month}/${day}/${year}`).getTime();
  }

  execute(): string {
    const t1 = this.getTime(this.operation1);
    const t2 = this.getTime(this.operation2);
    const difference = Math.abs(t1 - t2);
    const day = 1000 * 60 * 60 * 24;

    return `${Math.ceil(difference / day)} day(s)`;
  }
}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DifferencesBetweenDates(d1, d2).execute());

class Queue<T extends number | string> {
  private queue: Array<T>;

  constructor(...args: T[]) {
    this.queue = args;
  }

  getIn(elem: T) {
    this.queue.push(elem);
  }

  next(): T | null {
    if (this.queue.length >= 0 && this.queue[0]) {
      const first = this.queue[0];

      this.queue.splice(0, 1);

      return first;
    } else {
      return null;
    }
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue<string>("Gui", "Pedro", "Ana", "Lu");
queue.print();
queue.getIn("Rafael");
queue.print();
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
queue.print();
const newQueue = new Queue<number>(1, 2, 3);
newQueue.print();

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
  itens: Array<Par<C, V>> = new Array<Par<C, V>>();

  obter(chave: C): Par<C, V> | null {
    const resultado = this.itens.filter(i => i.chave === chave);

    return resultado ? resultado[0] : null;
  }

  colocar(par: Par<C, V>) {
    const encontrado = this.obter(par.chave);

    if (encontrado) {
      encontrado.valor = par.valor;
    } else {
      this.itens.push(par);
    }
  }

  limpar() {
    this.itens = new Array<Par<C, V>>();
  }

  imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
