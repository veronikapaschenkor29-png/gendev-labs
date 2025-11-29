'use strict';

const pipe = (...fns) => {
    fns.forEach((fn) => {
        if (typeof fn !== "function") throw console.error("Not a func");
    })
    return (x) => {
        let res = x;
        fns.forEach((fn) => {
            res = fn(res);
        })
        return res;
    };
};


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const a = pipe(inc, inc, cube);
console.log(a(7));
const b = pipe(cube, twice, twice);
console.log(b(3));
const c = pipe(inc, 8);
console.log(c(10));