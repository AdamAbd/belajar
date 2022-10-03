// Basic Types
let id: number = 5;
let nama: String = "Adam";
let isPublished: boolean = true;
let x: any = true;
let ids: number[] = [1, 2, 3, 4, 5];
const sandi: String = "Halo";

x = "Hallo";
ids.push(50);

// Tuple
let person: [number, string, number[]] = [1, "Adam", [1, 2, 3]];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Adam"],
  [2, "Adam"],
  [3, "Adam"],
];

employee.push([4, "Sodikin"]);

// Union
let pid: string | number = 22;

pid = "22";

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Object
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Adam",
};

// Type Assertation
let cid: any = 1;
// let customerId = <number> cid;
let customerId = cid as number;
customerId = 120;

// Function
function sum(x: number, y: number): string {
  return `hallo ${x + y}`;
}

// Void
function log(message: String | number): void {
  return console.log(message);
}

// log(1201029832109381209);

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: String;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employess(1, "Adam", "Dev");

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);

//   strArray.push(1) // Throws error
