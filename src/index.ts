// types: number, string, boolean, symbol, null, any, undefined
var user: string = "schoolboy";
var und: null = null;
var nullish: undefined;
und = null;
nullish = undefined;

var sym: symbol = Symbol();

var bool: boolean = true;

// specify type for function params
var circ = function (diameter: number) {
  return diameter * Math.PI;
};
// function can only be calle with param of specified type
circ(Number("50"));

// reference types: object, array.
// declare datatype with array syntax beside it
// array can only be filled with specified datatype
var str: any[] = ["any", "1", 1, {}];

str.push(true);

// the object fields can only accept specified type
var obj = {
  name: "",
  age: 0,
};
obj.name = "benson";
obj.age = 10;

// cannot re-assign object to another datatype that isnot object {}, and if  updated to anoher object the properties of the new object should match the properties of the previous object.

// explicit types lect 5

// interface
interface Obj {
  name: string;
  age: number;
}

// union types :
// vars
var val: string | Number;
val = "john";
val = 2;

// arrays
var arr: (string | number)[] = [];

arr.push("john");
arr.push(2);

// functions in typescript
let funk: Function = () => {
  console.log("function");
};
let func: Function;
func = (...args: string[]) => {
  console.log("function");
};

// optional params: ?
var doSom: Function = (a: number, b: number, c?: number) => {};

// functions: explicit types to return
var exp: Function = (a: number): number => {
  return a;
};

// return nothing. void of any value.
var exp: Function = (a: number): void => {};

// type aliases lect 9
