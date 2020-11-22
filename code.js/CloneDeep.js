import _ from 'lodash';

// BEGIN (write your solution here)

const cloneDeep = (obj) => {
  const resObj = {};
  const arr = Object.keys(obj);
  for (const el of arr) {
    if (_.isObject(obj[el])) {
        resObj[el] = cloneDeep(obj[el]);
    } else {
      resObj[el] = obj[el];
    }
  }
  return resObj;
};
export default cloneDeep;

// END

//Version 2===================
const cloneDeep = (obj) => {
  const resObj = {};
  const arr = Object.keys(obj);
  for (const el of arr) {
    _.isObject(obj[el]) ? resObj[el] = cloneDeep(obj[el]) : resObj[el] = obj[el];
  }
  return resObj;
};

/*objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов. Для реализации этой задачи нельзя использовать функцию cloneDeep() библиотеки lodash.

import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true
Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект. Если значением какого-то свойства является объект, то нужно рекурсивно запустить функцию cloneDeep(value).

Подсказки
Для рекурсивного запуска понадобится имя для функции
_.isObject()
Рекурсия*/
