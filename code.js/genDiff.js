// BEGIN (write your solution here)

const genDiff = (obj1, obj2) => {
  const result = {};
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  for (const el of arr1) {
    if (!arr2.includes(el)) {
      result[el] = 'deleted';
    }
    if (arr2.includes(el) && obj1[el] !== obj2[el]) {
      result[el] = 'changed';
    }
    if (obj1[el] === obj2[el]) {
      result[el] = 'unchanged';
    }
  }
  for (const el2 of arr2) {
    if (!arr1.includes(el2)) {
      result[el2] = 'added';
    }
  }
  return result;
};

export default genDiff;

// END

/* Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает результат сравнения в виде объекта. Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением строка с описанием отличий: added, deleted, changed или unchanged.

Возможные значения:

added — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted — ключ был в первом объекте, но отсутствует во втором
changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями
import genDiff from './diffGenerator.js';

genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
);
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// } */
