class classDate {
  // Public
  day: number;
  public month: number;
  year: number;

  constructor(day: number = 1, month: number = 1, year: number = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const birthday = new classDate(3, 11, 1991);
birthday.day = 4;
console.log(birthday.day);
console.log(birthday);

const wedding = new classDate();
wedding.year = 2017;
console.log(wedding);

class classExpert {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970
  ) {}
}

const birthdayExpert = new classExpert(3, 11, 1991);
birthdayExpert.day = 4;
console.log(birthdayExpert.day);
console.log(birthdayExpert);

const weddingExpert = new classExpert();
weddingExpert.year = 2017;
console.log(weddingExpert);

class Product {
  constructor(
    public name: string,
    public price: number = 0,
    public discount: number = 0
  ) {}

  private priceWithDiscount(): number {
    return this.price * (1 - this.discount);
  }

  public resume(): string {
    return `${this.name} it cost $${this.priceWithDiscount} (${this.discount *
      100}% 0ff)`;
  }
}

const prod1 = new Product("Caneta", 4.2);
prod1.discount = 0.06;
console.log(prod1.resume());
console.log(prod1);

const prod2 = new Product("Caderno", 18.8, 0.15);
console.log(prod2);
console.log(prod2.resume());

class Car {
  private vel: number = 0;

  constructor(
    public mark: string,
    public model: string,
    private maxVel: number = 200
  ) {}

  protected changeVel(delta: number): number {
    const newVel = this.vel + delta;
    const checkVel = newVel >= 0 && newVel <= this.maxVel;

    if (checkVel) {
      this.vel = newVel;
    } else {
      this.vel = delta > 0 ? this.maxVel : 0;
    }

    return this.vel;
  }

  public speedUp(): number {
    return this.changeVel(5);
  }

  public brake(): number {
    return this.changeVel(-5);
  }
}

const car1 = new Car("Ford", "Ka", 185);

Array(50)
  .fill(0)
  .forEach(() => car1.speedUp());
console.log(car1.speedUp());

Array(40)
  .fill(0)
  .forEach(() => car1.brake());
console.log(car1.brake());

// Inheritance && public / protected / private
class Ferrari extends Car {
  constructor(model: string, maxVel: number) {
    super("Ferrari", model, maxVel);

    // ...
  }

  public speedUp(): number {
    return this.changeVel(20);
  }

  public brake(): number {
    return this.changeVel(-15);
  }
}

const f40 = new Ferrari("F40", 324);
console.log(`${f40.mark} ${f40.model}`);
console.log(f40.speedUp);
console.log(f40.brake);

// Getters & Setters
class People {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0 && value <= 120) {
      this._age = value;
    }
  }
}

const people1 = new People();
people1.age = 10; // set
console.log(people1.age); // get

// Static Attr and methods
class Mathematic {
  static PI: number = 3.1416;

  static viewRadius(radiu: number): number {
    return Mathematic.PI * radiu * radiu;
  }
}

// const m1 = new Mathematic();
// m1.PI = 4.2;
// console.log(m1.viewRadius(4));
console.log(Mathematic.viewRadius(4));

// Abstract class
abstract class X {
  abstract y(a: number): number;

  w(b: number): void {
    console.log(b);
  }
}
// console.log(new X())

abstract class Calcule {
  protected result: number = 0;

  abstract execute(...numbers: number[]): void;

  getResult(): number {
    return this.result;
  }
}

class Sum extends Calcule {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t + a);
  }
}

class Mult extends Calcule {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t * a);
  }
}

let c1: Calcule = new Sum();
c1.execute(1, 2, 3, 4, 5);
console.log(c1.getResult());

c1 = new Mult();
c1.execute(1, 2, 3, 4, 5);
console.log(c1.getResult());

// Singleton
class Unique {
  private static instance: Unique = new Unique();
  private constructor() {}

  static getInstance(): Unique {
    return Unique.instance;
  }

  now() {
    return new Date();
  }
}

// const error = new Unique();
console.log(Unique.getInstance().now());

// Readonly
class Airplane {
  public readonly model: string;

  constructor(model: string, public readonly prefix: string) {
    this.model = model;
  }
}

const turbo = new Airplane("111", "222");
// turbo.model = "error";
