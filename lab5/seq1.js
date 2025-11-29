'use strict';

const seq = (f) => { 
   return (g) => { 
      if (typeof g === 'number') { 
         return f(g); 
   }
   else {
      return seq((x) => f(g(x)));
   }
   } 
}

const result1 = seq(x => x + 7)
   (x => x * 2)(5);
const result2 = seq(x => x * 2)
   (x => x + 7)(5)

const result3 = seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)

console.log(result1);
console.log(result2);
console.log(result3);