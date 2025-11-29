'use strict';


let sum = (... args) => {
    let value = 0;
    while (args.length > 0) {
        value =+ args;
    }
    return value;
};


console.log(sum());