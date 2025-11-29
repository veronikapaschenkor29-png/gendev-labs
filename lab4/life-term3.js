'use strict';

const lifeTerm = (obj) => {
  const data = {};
  for (const key in obj) {
    const year = obj[key];
    data[key] = year.died - year.born;
  }
  return data;
};

const persons = {
  Shakespeare: { born: 1564, died: 1616 },
  Skovoroda: { born: 1722, died: 1794 },
  Austen: { born: 1775, died: 1817 },
  Rowling: { born: 1894, died: 1971 },
};
console.log(lifeTerm(persons));