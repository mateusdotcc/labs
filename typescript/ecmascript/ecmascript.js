"use strict";
// let & const
// var isCan;
// console.log(isCan);
// isCan = "?"; // hoisting
// let isCan = "?"
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var isCan = "?";
console.log(isCan);
var isCold = true;
if (isCold) {
    var action = "Colocar o casaco!";
    console.log(action);
}
// console.log(action); // scope
var cpf = "123.456.000-99";
// cpf = "888.999.123-00";
console.log(cpf);
var sumOpt = function (n1, n2) {
    return n1 + n2;
};
console.log(sumOpt(2, 2));
var sub = function (n1, n2) { return n1 - n2; };
console.log(sub(2, 3));
var hello = function () { return console.log("Hello!"); };
console.log(hello);
var talkTo = function (people) { return console.log("Hello" + people); };
talkTo("John");
// this
function normalWithThis() {
    // console.log(this);
}
var normalWithThisSpecial = normalWithThis.bind("abc");
normalWithThis();
// this??? r => Window
// console.log(this);
// const arrowWithThis = () => console.log(this); // r => Window
// arrowWithThis();
// const arrowWithThisSpecial = arrowWithThis.bind({ name: "Ana" });
// arrowWithThisSpecial();
// Params
function count(init, end) {
    if (init === void 0) { init = 5; }
    if (end === void 0) { end = init - 5; }
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
var numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max.apply(Math, numbers));
// Spread
var teamA = ["João", "Maria", "Fernanda"];
var teamB = __spreadArrays(["Fernando", "Miguel"], teamA, ["Lorena"]);
console.log(teamB);
// Rest
function returnArr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(a); // => 1
    return args; // => rest 2, 3 +
}
var numbersOpt = returnArr(1, 2, 3, 4, 5, 6);
console.log(numbersOpt);
console.log(returnArr.apply(void 0, numbers)); // Spread
// Rest & Spread (Tupla)
var tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
// Destructuring (array)
var carac = ["Motor Zetec 1.8", 2020];
// const motor = carac[0]
// const year = carac[1];
var motor = carac[0], yyear = carac[1];
console.log(motor);
console.log(yyear);
var _a = [2, 3], w = _a[0], z = _a[1];
// Destructuring (object)
var item = {
    name: "SSD 480GB",
    price: 200,
    carac: {
        ww: "Imported"
    }
};
var nameItem = item.name;
var priceItem = item.price;
var nn = item.name, p = item.price, ww = item.carac.ww; // name: alias
console.log(nn, p, ww);
// Template String
var userID = "Suporte";
var notifications = "9";
// const welcome = "Welcome" + userID + "Notifications" + notifications;
var welcome = "Welcome " + userID + " Notifications " + (parseInt(notifications) > 9 ? "+9" : notifications);
console.log(welcome);
console.log("" + (1 + 1) * 30);
console.log("" + carac[0]);
