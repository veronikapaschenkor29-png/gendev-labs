'use strict';

const difference = (array1, array2) => {
    let difference = [];
    for (let item of array1) {
        if (!array2.includes(item)) difference.push(item);
    }
    return difference;
};

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);