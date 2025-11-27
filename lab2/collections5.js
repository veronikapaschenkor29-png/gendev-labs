'use strict';

const array = [
    { name: 'Marcus Aurelius', phone: '+11452896478' },
    { name: 'Pashchenko', phone: '+380977773928' }
];

const findPhoneByName1 = (name) => {
    for (const obj of array) {
        if (obj.name === name) return obj.phone;
    }
};

const hash_table = {
    Marcus: '+11452896478',
    Pashchenko: '+380977773928'
};

const findPhoneByName2 = (name) => hash_table[name];