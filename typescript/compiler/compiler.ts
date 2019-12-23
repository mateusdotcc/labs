let channel: string = "Gaveta";
let subscribed: number = 60000;

// channel = subscribed;
console.log(channel);

// let name: string = "Pedro";
// name = 'Pedro'
console.log(`Name = ${name}`);

(function() {
  let name: string = "Ana";
})();

function sum(a: any, b: any) {
  return a + b;
}

let anything: any;
anything = 12;
anything = "abc";

function greet(isMorning: boolean): string | null {
  let salutation: string;

  if (isMorning) {
    salutation = "Morning";
  } else {
    salutation = "Have a good life";
  }

  return salutation;
}

// noEmitOnError: true
// SourceMap: true
// noImplicityAny: true
// noUnusedParameters: true
// strictNullChecks: true
// noUnusedParameters: true
// noUnusedLocals: true
// outDir: 'path'
// outFile: ./build/app.js 'path' only file
