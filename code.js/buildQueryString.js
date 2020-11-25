// BEGIN (write your solution here)

const buildQueryString = (obj) => {
  let count = [];
  let result = [];
  const arrObj = Object.entries(obj);
  for (const el of arrObj) {
    count.push(el);
  }
  for (const [key, value] of count.sort()) {
    result.push(`${[key]}=${[value]}`);
  }
  return result.join('&');
};

export default buildQueryString;

// END

//Version.2===============

// BEGIN (write your solution here)

const buildQueryString = (obj) => {
  let result = [];
  const arrObj = Object.entries(obj);
  const arrSort = arrObj.sort();
  for (const [key, value] of arrSort) {
    result.push(`${[key]}=${[value]}`);
  }
  return result.join('&');
};

export default buildQueryString;

// END



/*Query String (строка запроса) - часть адреса страницы в интернете, содержащая константы и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример:

# query string: page=5
https://ru.hexlet.io/blog?page=5
Если параметров несколько, то они отделяются амперсандом &:

# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5
buildQueryString.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:

import bqs from '../buildQueryString.js';

bqs({ per: 10, page: 1 });
// page=1&per=10
bqs({ param: 'all', param1: true });
// param=all&param1=true
Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать).*/
