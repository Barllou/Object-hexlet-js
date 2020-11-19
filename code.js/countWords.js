// BEGIN (write your solution here)

const countWords = (str) => {
  const obj = {};
  const arrStr = _.words(str);
  for (const value of arrStr) {
    let lowerValue = value.toLowerCase();
    if (obj[lowerValue] === undefined){
      obj[lowerValue] = 1;
    }else{
      obj[lowerValue] += 1;
    }
  }
  return obj
};

export default countWords;

// END

/*Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении и возвращает объект в котором свойства это слова (приведенные к нижнему регистру), а значения — это то сколько раз слово встретилось в предложении. Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.

import countWords from './words.js';

// Если предложение пустое, то возвращается пустой объект 
countWords('');
// {}

const text1 = 'one two three two ONE one wow';
countWords(text);
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }*/
