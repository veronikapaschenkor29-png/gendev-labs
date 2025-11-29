'use strict';

let sum = (... args) => {
    let value = 0;
    if (args.length === 0) return 0;
    do {
       value =+ args; 
    } while (args.length > 0);
    return value;
};


console.log(sum(1, -1, 1));