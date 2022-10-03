"use strict";
// Basic Types
let id = 5;
let nama = "Adam";
let isPublished = true;
let x = true;
let ids = [1, 2, 3, 4, 5];
const sandi = "Halo";
x = "Hallo";
ids.push(50);
// Tuple
let person = [1, "Adam", [1, 2, 3]];
// Tuple Array
let employee;
employee = [
    [1, "Adam"],
    [2, "Adam"],
    [3, "Adam"],
];
employee.push([4, "Sodikin"]);
// Union
let pid = 22;
pid = "22";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Adam",
};
// Type Assertation
let cid = 1;
// let customerId = <number> cid;
let customerId = cid;
customerId = 120;
// Function
function sum(x, y) {
    return `hallo ${x + y}`;
}
// Void
function log(message) {
    return console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
// subClass
class Employess extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employess(1, "Adam", "Dev");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);
//   strArray.push(1) // Throws error
