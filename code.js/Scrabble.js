// BEGIN (write your solution here)

const scrabble = (symbol, word) => {
  const obj = {};
  const arrWord = word.toLowerCase().split('');
  const arrSymbol = symbol.toLowerCase().split('');
  if (symbol.length === 0 || word.length === 0) {
    return false;
  }

  for (const el of arrSymbol) {
    if (obj[el] === undefined) {
      obj[el] = 1;
    } else if (obj[el] !== undefined) {
      obj[el] += 1;
    }
  }
  for (const elWord of arrWord) {
    if (obj[elWord] !== undefined) {
      obj[elWord] -= 1;
    }
    if (obj[elWord] < 0 || obj[elWord] === undefined) {
      return false;
    }
  }
  return true;
};

export default scrabble;

// END

/*scrabble.js
Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра: набор символов в нижнем регистре (строку) и слово, и проверяет, можно ли из переданного набора составить это слово. В результате вызова функция возвращает true или false.

При проверке учитывается количество символов, нужных для составления слова, и не учитывается их регистр.

Примеры
scrabble('rkqodlw', 'world'); // true
scrabble('avj', 'java'); // false
scrabble('avjafff', 'java'); // true
scrabble('', 'hexlet'); // false
scrabble('scriptingjava', 'JavaScript'); // true*/
