const test = (arrangement) =>{
    const count = {};
    for (const part of arrangement) {
        const element = typeof part;
        count[element] = (count[element] || 0) + 1;
    }
    return count;
};

const alfa = [null, 1488, '55', true, true, 1703, false, () => [], {x:101}];
const res = test(alfa);

console.log(res);