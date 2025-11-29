'use strict';

const removeElements = (array, ...items) => {
    for (let item of items) {
        const indx = array.indexOf(item);
        if (indx !== -1) array.splice(indx, 1);
    }
    return array;
};


const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);