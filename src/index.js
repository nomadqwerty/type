"use strict";
// types: number, string, boolean, symbol, null, any, undefined
var user = "schoolboy";
var und = null;
var nullish;
und = null;
nullish = undefined;
var sym = Symbol();
var bool = true;
// specify type for function params
var circ = function (diameter) {
    return diameter * Math.PI;
};
// function can only be calle with param of specified type
circ(Number("50"));
// reference types: object, array.
// declare datatype with array syntax beside it
// array can only be filled with specified datatype
var str = ["any", "1", 1, {}];
str.push(true);
// the object fields can only accept specified type
var obj = {
    name: "",
    age: 0,
};
obj.name = "benson";
obj.age = 10;
// union types :
// vars
var val;
val = "john";
val = 2;
// arrays
var arr = [];
arr.push("john");
arr.push(2);
// functions in typescript
let funk = () => {
    console.log("function");
};
let func;
func = (...args) => {
    console.log("function");
};
// optional params: ?
var doSom = (a, b, c) => { };
// functions: explicit types to return
var exp = (a) => {
    return a;
};
// return nothing. void of any value.
var exp = (a) => { };
// type aliases lect 9
