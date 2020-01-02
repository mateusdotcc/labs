"use strict";
var classDate = /** @class */ (function () {
    function classDate(day, month, year) {
        if (day === void 0) { day = 1; }
        if (month === void 0) { month = 1; }
        if (year === void 0) { year = 1970; }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    return classDate;
}());
var birthday = new classDate(3, 11, 1991);
birthday.day = 4;
console.log(birthday.day);
console.log(birthday);
var wedding = new classDate();
wedding.year = 2017;
console.log(wedding);
var classExpert = /** @class */ (function () {
    function classExpert(day, month, year) {
        if (day === void 0) { day = 1; }
        if (month === void 0) { month = 1; }
        if (year === void 0) { year = 1970; }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    return classExpert;
}());
var birthdayExpert = new classExpert(3, 11, 1991);
birthdayExpert.day = 4;
console.log(birthdayExpert.day);
console.log(birthdayExpert);
var weddingExpert = new classExpert();
weddingExpert.year = 2017;
console.log(weddingExpert);
var Product = /** @class */ (function () {
    function Product(name, price, discount) {
        if (price === void 0) { price = 0; }
        if (discount === void 0) { discount = 0; }
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    Product.prototype.resume = function () {
        return this.name + " it cost $" + this.price + " (" + this.discount * 100 + "% 0ff)";
    };
    return Product;
}());
var prod1 = new Product("Caneta", 4.2);
prod1.discount = 0.06;
console.log(prod1.resume());
console.log(prod1);
var prod2 = new Product("Caderno", 18.8, 0.15);
console.log(prod2);
console.log(prod2.resume());
