'use strict';

const contract = (fn, ...types) => (...args) =>{
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const type = types[i];
        const name = type.name.toLowerCase();
        if (typeof arg !== name) {
            throw new TypeError("Arguments types are different");
        }       
    }
    const res = fn(...args);
    const type = types[types.length - 1];
    const name = type.name.toLowerCase();
    if (typeof res !== name) {
        throw new TypeError("Arguments types are different");
    }
    return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!'));